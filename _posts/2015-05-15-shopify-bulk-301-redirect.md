---
layout: post
title: "Creating Bulk 301 Redirects in Shopify"
description: ""
category: programming
tags: [javascript, js, web, shopify, programming]
---

<aside>Before I get into this post, I should mention that the finished product is available in the <a href="/programming/2015-05-17/shopify-301-bookmarklet">following post</a> as a bookmarklet</aside>

## The Problem

Before launching our new site, we had to make sure that the most important urls on our old site had 301s, so that visitors coming to our site from outdated links wouldn't just always end up on our 404 page. The problem was that we had around 500 URLs to redirect.

Shopify's admin page for adding or deleting 301s looks like this:

![shopify 301 ]({{ site.url }}/assets/images/shopify_301.jpg)

You click the `Add a URL Redirect` button up on the top right, that input box shows up, you manually input the old and new urls, and then you press `Save URL redirect` and the box closes, with your redirect now added to the system. There's no csv upload, no obvious faster way of doing it apparent on that page.

So of course I googled it. The only answer I was able to find was that there's a Shopify app, 'Traffic Control - Bulk Redirects', a 1-time $39 fee to bulk upload all your redirects as a csv. I sulked over to my boss and told him we'll have to pay $39 to do this.

And then a while later, I remembered: I can code. Dur.

My first idea was a workable solution, but a bit dirty. I was going to inject a script into the 301 page which would hit the `Add a redirect` button, insert an old url into the correct field, insert a corresponding new url into the other field, and hit the `Save URL redirect` button. It would loop through an array of redirect objects and slowly do them all.

Then I remembered that Shopify provides some interesting API calls that are quite easy to use in the admin area. [Here's the Redirect API documentation](https://docs.shopify.com/api/redirect).

I already had an excel file with one column filled with the old URLs and the next filled with new URLs, so it was pretty easy to just transform that into a format that would be simple to use with the API. I'd need an array of objects of the format `{"redirect": {"path": "/old/url","target": "/new/url"}}`. Copying and pasting the entirety of the Excel document into Sublime Text, and then using the lovely wizardry of multiple cursors made that problem quite simple to solve.

For safety purposes, before I got started on inputting the new redirects, I made sure I saved my old ones just in case things went tits-up.

{% highlight javascript linenos=table %}
// get the existing redirects
$.get('/admin/redirects.json', {limit:250, page:1}, function(data){
    console.log(data);
});
{% endhighlight %}

The next step was to figure out how to loop through the array to send a series of post requests. I wanted to loop through slowly, because I know that Shopify sometimes has difficulties if you send it too many API requests at once. So instead of just looping through and sending them all at once, I decided to create a system that would do the first one, and when I got the response from the server it would do the second one, and so on and so forth.

My normal solution to that problem would have been to use promises somehow, but for some reason I was drawing a blank so I came up with a sort of recursive solution to the problem. I had my array of redirect objects stored as a global variable `redirects`, so I thought I could just create a function that takes an index as an argument, gets the redirect as an index, makes the `post` request, and when that succeeds, the callback calls the same function again, this time with the next index up.

It's probably not the cleanest way to solve the problem, but it worked. Mostly.

{% highlight javascript linenos=table %}
function process(index) {
    var redirect = redirects[index];
    if (redirect) {
        $.post('/admin/redirects.json', redirect, function(){
            process(index + 1);
        });
    } else {
        alert('done');
    }
};
{% endhighlight %}

I started the processing by, of course, calling `process(0)`. It worked for about the first 300 redirects. I had one error - one of the old URLs was duplicated - and it caused the entire processing to stop. Luckily it was fairly easy to just create a new `redirects` array just with all the URLs after the failed one, so I did that.

I'm planning on making this into a tool that non-technical people can use (some sort of bookmark or plugin), so I'll have to make the code more robust - something that will log the failures and successes and keep on working through the entire array regardless of any errors. But, for a first try, it was a success, and it solved my problem.

As someone without any person guiding him in his JS adventures, I'd appreciate any constructive criticism, any ideas about more efficient or more standard solutions to this type of problem. What would you have done differently? Leave a comment.
