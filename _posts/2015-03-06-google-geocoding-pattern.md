---
layout: post
title: "Promise Pattern for Google Geocoding API"
description: ""
category: programming
tags: [javascript, js, node, programming]
---

The company I work for sends teams to numerous outdoor events every year (80 this year), and we decided that it would be appropriate to host a page on our website allowing prospective customers to easily find those events that they might want to attend. I've been tasked with designing and implementing that. In researching the requirements for the task, I soon concluded that the most effective first step would be to (a) get a list of all the events we're attending, complete with addresses and post codes, and then (b) find the latitudes and longitudes of those postcodes. I decided I'd tackle the problem with my newfound Javascript skills.

I was supplied with a csv with the following headers (and corresponding format for each of the 80 events in the following rows):

*Event Name, Event Type, Address, Town, Post Code, Link To Event, Start Date, End Date*

My first port of call was to get a csv parser; I used the standard `npm install csv` and that turned out fine. Then I decided I'd write a little module that would take the output of 'csv.parse' and return a series of objects with the header row cells as the attributes, in our case `{'Event Name': 'Suffolk Show', 'Event Type': 'County Show', ...}` which I'll call `show objects` in future.

##### csv-to-object:

{% highlight javascript linenos=table %}
function CSV(csvArrays) {
    this.headers = csvArrays[0];
    this.rows = csvArrays.slice(1);
}

CSV.prototype.toObj = function () {
    var objects = [];
    this.rows.forEach(function (row, rownum) {
        var newObj = {};
        row.forEach(function (cell, colnum) {
            newObj[this.headers[colnum]] = cell;
        }.bind(this));
        objects.push(newObj);
    }.bind(this));
    return objects;
};


var objectify = function (csvArrays) {
    var transformer = new CSV(csvArrays);
    return transformer.toObj();
};

exports.objectify = objectify;
{% endhighlight %}

With that out of the way, I created the first portion of my script:

{% highlight javascript linenos=table %}
var csv = require('csv'),
    fs = require('fs'),
    Promise = require('promise'),
    cto = require('csv-to-object');

var read = Promise.denodeify(fs.readFile);
var write = Promise.denodeify(fs.writeFile);

read('show dates 2015.csv')
    .then(function (csvStr) {
        return new Promise(function (resolve, reject) {
            csv.parse(csvStr, {delimiter: ';'}, function (err, output) {
                if (err) {
                    reject(err);
                } else {
                    resolve(cto.objectify(output));
                }
            });
        });
    })
    .then(); // stuff still to do
{% endhighlight %}

The `then()` at the end there will take a function that will deal with the output of `cto.objectify`, which is an array of those show objects I described above.

Here's where it got a bit tricky for me. Google's Geocoding API has a limitation of 5 requests per second, and I didn't have a good pattern in mind for dealing with that (I'm quite novice, you see), but I had an idea:

I could use `setInterval` to run a function every 201ms (just under 5 times a second). That function would take one of the show objects out of the array returned by `cto.objectify`. It would remove it from the front of the array using `shift` and then process it using the Google api, and when complete it would be added to the end of a new array of processed show objects which now have attributes `lat` and `lng`.

I wrote a little module for the task:

{% highlight javascript linenos=table %}
var request = require('request');

var getGeo = function (stringQuery) {
    return new Promise(function (resolve, reject) {
        request(
            {
                url: 'https://maps.googleapis.com/maps/api/geocode/json?',
                qs: {
                    address: stringQuery,
                    key: process.env.googleapikey
                }
            }
            , function (error, response, body) {
                var bodyObj = JSON.parse(body);
                if (error) {
                    reject(error);
                } else if (bodyObj.error_message) {
                    reject(bodyObj.error_message)
                }
                resolve(bodyObj);
            });
    });
}

exports.get = getGeo;
{% endhighlight %}

Calling `getGeo` and passing it an address string will return a Promise that will fulfill or reject as appropriate. As an aside, notice lines 15 to 19. The Google Geocoding API doesn't return an error message in the way I would have expected it. It's returned in the body of the json response as an attribute. Is this normal? Should it be?

In any case, with the API requests abstracted away, I'm now ready to start going through my array of objects, depleting them one by one as a queue essentially, and putting them into the processed pile. Continuing where we left off, with the unfilled `then()` above:

{% highlight javascript linenos=table %}
var csv = require('csv'),
    fs = require('fs'),
    Promise = require('promise'),
    cto = require('csv-to-object'), // this is my own package
    geoCode = require('geoCode'); // this one too

var read = Promise.denodeify(fs.readFile);
var write = Promise.denodeify(fs.writeFile);

read('show dates 2015.csv')
    .then(function (csvStr) {
        return new Promise(function (resolve, reject) {
            csv.parse(csvStr, {delimiter: ';'}, function (err, output) {
                if (err) {
                    reject(err);
                } else {
                    resolve(cto.objectify(output));
                }
            });
        });
    })
    .then(function (showObjects) {
        return new Promise(function (resolve, reject) {
            var processedObjects = [];
            var geoTimer = setInterval(function () {
                var show = showObjects.shift();
                var query = show.Address + ' ' + show['Post Code'];
                var gcg = geoCode.get(query)
                    .then(function (response) {
                        var location = response.results[0].geometry.location;
                        show.lat = location.lat;
                        show.lng = location.lng;
                    })
                    .catch(function () {
                        show.lat = 'error';
                        show.lng = 'error';
                    })
                    .then(function () {
                        processedObjects.push(show);
                    });
                if (showObjects.length === 0) {
                    clearInterval(geoTimer);
                    gcg.then(function() {
                        resolve(processedObjects);
                    });
                }
            }, 201);
        });

    })
    .then(function (objs) {
        console.log(objs);
    });
{% endhighlight %}

This took me a while to get right. The function inside `geoTimer` is being run every 201ms. Every time it runs, it takes one of the show objects out of `showObjects`, uses its attributes to make a query for the geocoding api, and then uses the results to add attributes `lat` and `lng` to the show object. It then pushes the object onto the `processedObjects` array.

After the `showObjects` array is completely emptied, I clear the `geoTimer` interval (it will just throw an error if I don't, as there's now now more show objects for it to run on). 

In the block that starts `if (showObjects.length === 0) {`, my first try was to just do `resolve(processedObjects);` right after `clearInterval(geoTimer);` but it kept on only giving me 79 or 78 of my 80 objects I was expecting. I realized that it was calling `resolve` before the final show object had hit the `processedObjects.push(show)` line. Using promises from the beginning really came to the rescue in that situation, as you can see. `gcg` is a promise that resolves after the `push` on line 39 above. When `showObjects.length === 0`, I know I'm on my very last showObject, and so when its results get pushed onto the `processedObjects` array, I'm ready to move onto the next part of my process (which is incidentally just printing to console).

I've never seen this pattern of using promises to work through a queue of tasks before, but the simplicity that promises provided at the end there, on lines 43 and 44, really showed me that promises are a bit more than mere sugar; they provide an amazingly intuitive and simple way to deal with certain problems.

___

## EDIT

The next morning I realized that there's an error with my code - not in practice (it will work in practice probably nearly 100% of the time) but the idea is wrong.

I called `gcg.then` on the very last gcg Promise and then resolved the containing Promise. That assumes that the last gcg is going to be the last one resolved. But the fact is is we're dealing with asynchronous code, and even though in practice it works out like that the vast majority of the time, I feel a bit icky making that assumption. So, I've changed the code a bit: I now add each `gcg` promise to an array of promises, and then when the full array of promises has been created, I use `Promise.all` and then resolve the containing promise.

{% highlight javascript linenos=table %}
var csv = require('csv'),
    fs = require('fs'),
    Promise = require('promise'),
    cto = require('csv-to-object'), // this is my own package
    geoCode = require('geoCode'); // this one too

var read = Promise.denodeify(fs.readFile);
var write = Promise.denodeify(fs.writeFile);

read('show dates 2015.csv')
    .then(function (csvStr) {
        return new Promise(function (resolve, reject) {
            csv.parse(csvStr, {delimiter: ';'}, function (err, output) {
                if (err) {
                    reject(err);
                } else {
                    resolve(cto.objectify(output));
                }
            });
        });
    })
    .then(function (showObjects) {
        return new Promise(function (resolve, reject) {
            var processedObjects = [];
            var waitingFor = [];
            var geoTimer = setInterval(function () {
                var show = showObjects.shift();
                var query = show.Address + ' ' + show['Post Code'];
                var gcg = geoCode.get(query)
                    .then(function (response) {
                        var location = response.results[0].geometry.location;
                        show.lat = location.lat;
                        show.lng = location.lng;
                    })
                    .catch(function () {
                        show.lat = 'error';
                        show.lng = 'error';
                    })
                    .then(function () {
                        processedObjects.push(show);
                    });
                waitingFor.push(gcg);
                if (showObjects.length === 0) {
                    clearInterval(geoTimer);
                    Promise.all(waitingFor)
                        .then(function(){
                            resolve(processedObjects);
                        });
                }
            }, 201);
        });

    })
    .then(function (objs) {
        console.log(objs);
    });
{% endhighlight %}
