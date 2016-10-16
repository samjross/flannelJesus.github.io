function animateElement(selector, attribute, toVal, duration) {
    return new Promise(function(resolve, reject) {
        var elem = $(selector);
        var animEl = elem.find(`animate.${attribute}`);
        var fromVal = elem.attr(attribute);
        animEl.attr('values', `${fromVal};${toVal}`);
        animEl.attr('dur', `${duration}ms`);
        animEl[0].beginElement();
        setTimeout(function() {
            elem.attr(attribute, toVal);
            resolve();
        }, duration);
    });
}

var animDuration = 700;

function changeMin(teamElement, newVal) {
    var val = 26 - newVal;
    var barElement = teamElement.find('line.bar');
    var minElement = teamElement.find('line.min');
    var p1 = animateElement(barElement, 'y2', val, animDuration);
    var p2 = animateElement(minElement, 'y1', val, animDuration);
    var p3 = animateElement(minElement, 'y2', val, animDuration);
    return Promise.all([p1, p2, p3])
}

function changeMax(teamElement, newVal) {
    var val = 26 - newVal;
    var barElement = teamElement.find('line.bar');
    var maxElement = teamElement.find('line.max');
    var p1 = animateElement(barElement, 'y1', val, animDuration);
    var p2 = animateElement(maxElement, 'y1', val, animDuration);
    var p3 = animateElement(maxElement, 'y2', val, animDuration);
    return Promise.all([p1, p2, p3])
}

function changeExpected(teamElement, newVal) {
    var val = 26 - newVal;
    var circleElement = teamElement.find('circle.expected');
    var p1 = animateElement(circleElement, 'cy', val, animDuration);
    return p1;
}

function changeTeam(teamElement, newMin, newMax, newExpected) {
    var p1 = changeMin(teamElement, newMin);
    var p2 = changeMax(teamElement, newMax);
    var p3 = changeExpected(teamElement, newExpected);
    return Promise.all([p1, p2, p3]);
}

function wait(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, ms)
    })
}

function prepareRankings(wrapperElement, weekStrings){

    var processWeek = function(liquipediaText) {
        "use strict";
        var teams = liquipediaText.split('\n');
        return teams.map(function(team) {
            "use strict";
            var teamArray = team.split('|');
            var name = teamArray[1];
            name = name.substr(0, name.length / 2);
            var handle = name.replace(/\s/g, '').replace('.','').toLowerCase();
            var scores = teamArray[2].split('-');
            var wins = Number(scores[0]);
            var losses = Number(scores[1]);
            var gamesLeft = 26 - wins - losses;
            var rate = wins / (wins + losses);
            var expectedScore = isNaN(rate) ? 13 : 26 * rate;
            console.log(handle);
            return {
                name: name,
                handle: handle,
                score: {
                    min: wins,
                    max: wins + gamesLeft,
                    expected: Math.round(expectedScore)
                }
            }

        });
    };

    var weekData = weekStrings.map(processWeek);

    var animating = false;
    var playing = false;

    function animateWeek(weekNum) {
        "use strict";
        if (!animating) {
            animating = true;
            wrapperElement.find('li').removeClass('active');
            wrapperElement.find(`li[weeknum='${weekNum}']`).addClass('active');
            var week = weekData[weekNum];
            var promises = [];
            week.forEach((team) => {
                promises.push(changeTeam($(`#${team.handle}`), team.score.min, team.score.max, team.score.expected));
            });
            var pa = Promise.all(promises);
            pa.then(() => animating = false);
            return pa;
        } else {
            return Promise.resolve(false);
        }
    }

    wrapperElement.find('li:not(.play)').click(function(){
        if (!playing) {
            var weekNum = Number($(this).attr('weeknum'));
            animateWeek(weekNum);
        }
    });

    wrapperElement.find('li.play').click(function(){
        if (!animating && !playing) {
            playing = true;
            wrapperElement.find('li.play').addClass('playing');

            function doNext(weekNum) {
                if (weekNum < weekData.length) {
                    animateWeek(weekNum).then(() => wait(2000)).then(() => doNext(weekNum + 1));
                } else {
                    playing = false;
                    wrapperElement.find('li.play').removeClass('playing');
                }
            }

            doNext(0);
        }
    });

}

var EUWeeks = [
`1.|Ninjas in Pyjamas Ninjas in Pyjamas|-|+|
1.|Astralis Astralis|-|+|
1.|Fnatic Fnatic|-|+|
1.|G2 Esports G2 Esports|-|+|
1.|Natus Vincere Natus Vincere|-|+|
1.|Team Dignitas Team Dignitas|-|+|
1.|FaZe Clan FaZe Clan|-|+|
1.|Mousesports mousesports|-|+|
1.|Team EnVyUs Team EnVyUs|-|+|
1.|Heroic Heroic|-|+|
1.|FlipSid3 Tactics FlipSid3 Tactics|-|+|
1.|HellRaisers HellRaisers|-|+|
1.|PENTA Sports PENTA Sports|-|+|
1.|Virtus.pro Virtus.pro|-|+|`,

`1.|FaZe Clan FaZe Clan|5-1|83-57|+26|15p
2.|Ninjas in Pyjamas Ninjas in Pyjamas|3-1|65-49|+16|9p
3.|Natus Vincere Natus Vincere|2-0|32-23|+9|6p
4.|Heroic Heroic|2-4|72-80|-8|6p
5.|Team EnVyUs Team EnVyUs|1-1|26-24|+2|3p
6.|Virtus.pro Virtus.pro|1-3|40-65|-25|3p
.|Fnatic Fnatic|-|+|
.|Team Dignitas Team Dignitas|-|+|
.|Mousesports mousesports|-|+|
.|FlipSid3 Tactics FlipSid3 Tactics|-|+|
.|HellRaisers HellRaisers|-|+|
.|PENTA Sports PENTA Sports|-|+|
13.|Astralis Astralis|0-2|26-32|-6|0p
14.|G2 Esports G2 Esports|0-2|23-32|-9|0p`,

`1.|Ninjas in Pyjamas Ninjas in Pyjamas|7-3|154-113|+41|21p
2.|FaZe Clan FaZe Clan|7-3|133-113|+20|21p
3.|Team EnVyUs Team EnVyUs|5-3|102-103|-1|15p
4.|Natus Vincere Natus Vincere|4-0|64-36|+28|12p
5.|Fnatic Fnatic|3-1|61-50|+11|9p
6.|Team Dignitas Team Dignitas|3-3|84-72|+12|9p
7.|Virtus.pro Virtus.pro|3-3|72-87|-15|9p
8.|Astralis Astralis|3-5|101-101|0|9p
9.|Heroic Heroic|3-7|124-144|-20|9p
10.|G2 Esports G2 Esports|3-7|123-139|-16|9p
11.|Mousesports mousesports|2-2|58-60|-2|6p
12.|HellRaisers HellRaisers|1-3|36-62|-26|3p
.|PENTA Sports PENTA Sports|-|
14.|FlipSid3 Tactics FlipSid3 Tactics|0-4|32-64|-32|0p`,

`1.|Ninjas in Pyjamas Ninjas in Pyjamas|9-3|186-131|+55|27p
2.|FaZe Clan FaZe Clan|8-4|163-145|+18|24p
3.|Natus Vincere Natus Vincere|6-0|96-55|+41|18p
4.|G2 Esports G2 Esports|6-8|182-179|+3|18p
5.|Team EnVyUs Team EnVyUs|5-3|102-103|-1|15p
6.|Virtus.pro Virtus.pro|5-5|121-133|-12|15p
7.|Fnatic Fnatic|4-2|95-86|+9|12p
8.|Team Dignitas Team Dignitas|4-4|107-95|+12|12p
9.|Astralis Astralis|4-6|133-131|+2|12p
10.|Mousesports mousesports|3-5|98-119|-21|9p
11.|Heroic Heroic|3-7|124-144|-20|9p
12.|HellRaisers HellRaisers|2-4|72-96|-24|6p
13.|PENTA Sports PENTA Sports|1-1|23-26|-3|3p
14.|FlipSid3 Tactics FlipSid3 Tactics|0-8|69-128|-59|0p`,

`1.|FaZe Clan FaZe Clan|11-5|235-204|+31|33p
2.|Ninjas in Pyjamas Ninjas in Pyjamas|9-3|186-131|+55|27p
3.|Natus Vincere Natus Vincere|6-0|96-55|+41|18p
4.|G2 Esports G2 Esports|6-8|182-179|+3|18p
5.|Fnatic Fnatic|5-3|126-120|+6|15p
6.|Team EnVyUs Team EnVyUs|5-3|102-103|-1|15p
7.|Mousesports mousesports|5-5|130-143|-13|15p
8.|Virtus.pro Virtus.pro|5-5|121-133|-12|15p
9.|Team Dignitas Team Dignitas|4-4|107-95|+12|12p
10.|Astralis Astralis|4-6|133-131|+2|12p
11.|Heroic Heroic|3-7|124-144|-20|9p
12.|HellRaisers HellRaisers|2-4|72-96|-24|6p
13.|PENTA Sports PENTA Sports|1-5|75-96|-21|3p
14.|FlipSid3 Tactics FlipSid3 Tactics|0-8|69-128|-59|0p`,

`1.|Ninjas in Pyjamas Ninjas in Pyjamas|11-5|233-188|+45|33p
2.|FaZe Clan FaZe Clan|11-7|244-236|+8|33p
3.|Team Dignitas Team Dignitas|9-5|200-162|+38|27p
4.|Mousesports mousesports|9-5|194-170|+24|27p
5.|G2 Esports G2 Esports|9-9|244-233|+11|27p
6.|Fnatic Fnatic|8-6|211-206|+5|24p
7.|Astralis Astralis|8-8|227-208|+19|24p
8.|Natus Vincere Natus Vincere|7-1|123-79|+44|21p
9.|Team EnVyUs Team EnVyUs|5-5|120-135|-15|15p
10.|Virtus.pro Virtus.pro|5-7|143-165|-22|15p
11.|Heroic Heroic|4-8|156-177|-21|12p
12.|HellRaisers HellRaisers|2-6|93-128|-35|6p
13.|PENTA Sports PENTA Sports|2-10|150-192|-42|6p
14.|FlipSid3 Tactics FlipSid3 Tactics|0-8|69-128|-59|0p`,

`1.|Ninjas in Pyjamas Ninjas in Pyjamas|13-5|265-203|+62|39p
2.|Natus Vincere Natus Vincere|11-3|206-152|+54|33p
3.|FaZe Clan FaZe Clan|11-7|244-236|+8|33p
4.|Team Dignitas Team Dignitas|10-6|237-201|+36|30p
5.|Mousesports mousesports|10-6|218-199|+19|30p
6.|G2 Esports G2 Esports|10-12|290-297|-7|30p
7.|Astralis Astralis|9-9|257-229|+28|27p
8.|Virtus.pro Virtus.pro|9-9|214-217|-3|27p
9.|Fnatic Fnatic|8-6|211-206|+5|24p
10.|Team EnVyUs Team EnVyUs|7-7|162-160|+2|21p
11.|Heroic Heroic|5-9|188-208|-20|15p
12.|HellRaisers HellRaisers|5-9|182-218|-36|15p
13.|PENTA Sports PENTA Sports|5-15|241-314|-73|15p
14.|FlipSid3 Tactics FlipSid3 Tactics|1-11|108-183|-75|3p`,

`1.|Ninjas in Pyjamas Ninjas in Pyjamas|13-5|265-203|+62|39p
2.|FaZe Clan FaZe Clan|13-7|279-257|+22|39p
3.|Team Dignitas Team Dignitas|12-10|306-283|+23|36p
4.|Virtus.pro Virtus.pro|12-10|267-266|+1|36p
5.|Natus Vincere Natus Vincere|11-7|227-216|+11|33p
6.|Astralis Astralis|11-11|317-277|+40|33p
7.|Fnatic Fnatic|10-6|243-215|+28|30p
8.|Mousesports mousesports|10-6|218-199|+19|30p
9.|G2 Esports G2 Esports|10-12|290-297|-7|30p
10.|Team EnVyUs Team EnVyUs|9-7|194-175|+19|27p
11.|HellRaisers HellRaisers|9-9|246-240|+6|27p
12.|Heroic Heroic|5-11|203-240|-37|15p
13.|PENTA Sports PENTA Sports|5-17|256-346|-90|15p
14.|FlipSid3 Tactics FlipSid3 Tactics|2-14|139-236|-97|6p`,

`1.|Ninjas in Pyjamas Ninjas in Pyjamas|15-7|320-243|+77|45p
2.|Team Dignitas Team Dignitas|14-10|338-295|+43|42p
3.|Fnatic Fnatic|13-7|305-262|+43|39p
4.|Mousesports mousesports|13-7|291-253|+38|39p
5.|FaZe Clan FaZe Clan|13-7|279-257|+22|39p
6.|Virtus.pro Virtus.pro|13-11|303-307|-4|39p
7.|Team EnVyUs Team EnVyUs|12-8|250-224|+26|36p
8.|Natus Vincere Natus Vincere|11-9|239-248|-9|33p
9.|Astralis Astralis|11-11|317-277|+40|33p
10.|G2 Esports G2 Esports|10-12|290-297|-7|30p
11.|HellRaisers HellRaisers|9-11|265-272|-7|27p
12.|Heroic Heroic|6-14|244-297|-53|18p
13.|PENTA Sports PENTA Sports|5-17|256-346|-90|15p
14.|FlipSid3 Tactics FlipSid3 Tactics|3-17|172-291|-119|9p`,

`1.|Ninjas in Pyjamas Ninjas in Pyjamas|19-7|387-282|+105|57p
2.|Fnatic Fnatic|19-7|401-322|+79|57p
3.|Mousesports mousesports|18-8|381-304|+77|54p
4.|FaZe Clan FaZe Clan|18-8|378-350|+28|54p
5.|Team EnVyUs Team EnVyUs|16-10|337-301|+36|48p
7.|Team Dignitas Team Dignitas|14-12|359-327|+32|42p
6.|Virtus.pro Virtus.pro|14-12|334-339|-5|42p
8.|Natus Vincere Natus Vincere|13-13|330-344|-14|39p
9.|G2 Esports G2 Esports|13-13|354-346|+8|39p
10.|Astralis Astralis|12-14|353-335|+18|36p
11.|HellRaisers HellRaisers|9-17|321-352|-31|27p
12.|Heroic Heroic|8-18|316-375|-59|24p
13.|PENTA Sports PENTA Sports|5-21|291-410|-119|15p
14.|FlipSid3 Tactics FlipSid3 Tactics|4-22|226-378|-152|12p`
];


prepareRankings($('#eu'), EUWeeks);

var NAWeeks = [`1.|SK Gaming SK Gaming|-|
2.|Cloud9 Cloud9|-|
3.|OpTic Gaming OpTic Gaming|-|
4.|Team Liquid Team Liquid|-|
5.|NRG eSports NRG eSports|-|
6.|Selfless Gaming Selfless Gaming|-|
7.|Renegades Renegades|-|
8.|Winterfox Winterfox|-|
9.|Splyce Splyce|-|
10.|Counter Logic Gaming Counter Logic Gaming|-|
11.|CompLexity Gaming compLexity Gaming|-|
12.|Immortals Immortals|-|
13.|EUnited eUnited|-|
14.|Echo Fox Echo Fox|-|`,

`1.|Cloud9 Cloud9|4-0|64-37|+27|12p
2.|Echo Fox Echo Fox|4-0|67-55|+12|12p
3.|OpTic Gaming OpTic Gaming|2-2|55-48|+7|6p
4.|Team Liquid Team Liquid|2-4|82-100|-18|6p
.|SK Gaming SK Gaming|-|
.|NRG eSports NRG eSports|-|
.|Renegades Renegades|-|
.|Winterfox Winterfox|-|
.|Splyce Splyce|-|
.|Counter Logic Gaming Counter Logic Gaming|-|
.|EUnited eUnited|-|
12.|Immortals Immortals|1-3|47-55|-12|3p
13.|CompLexity Gaming compLexity Gaming|1-3|33-60|-27|3p
14.|Selfless Gaming Selfless Gaming|0-2|27-32|-5|0p`,

`1.|Cloud9 Cloud9|10-0|160-87|+73|30p
2.|Immortals Immortals|8-4|169-114|+55|24p
3.|Echo Fox Echo Fox|6-0|99-68|+31|18p
4.|OpTic Gaming OpTic Gaming|5-5|130-123|+7|15p
5.|Team Liquid Team Liquid|4-4|114-115|-1|12p
6.|CompLexity Gaming compLexity Gaming|2-6|77-119|-42|6p
7.|Renegades Renegades|1-1|29-28|+1|3p
8.|Winterfox Winterfox|1-3|57-64|-7|3p
9.|Splyce Splyce|1-3|38-62|-24|3p
10.|Selfless Gaming Selfless Gaming|1-5|68-96|-28|3p
11.|EUnited eUnited|1-5|55-90|-35|3p
.|SK Gaming SK Gaming|-|
13.|Counter Logic Gaming Counter Logic Gaming|0-2|21-32|-11|0p
14.|NRG eSports NRG eSports|0-2|13-32|-19|0p`,

`1.|Cloud9 Cloud9|14-0|227-129|+98|42p
2.|Immortals Immortals|10-4|201-129|+72|30p
3.|Echo Fox Echo Fox|6-0|99-68|+31|18p
4.|Team Liquid Team Liquid|6-6|168-170|-2|18p
5.|Renegades Renegades|5-5|136-129|+7|15p
6.|OpTic Gaming OpTic Gaming|5-5|130-123|+7|15p
7.|NRG eSports NRG eSports|4-4|98-90|+8|12p
8.|Winterfox Winterfox|3-5|99-120|-21|9p
9.|SK Gaming SK Gaming|2-4|67-85|-18|6p
10.|Selfless Gaming Selfless Gaming|2-6|99-120|-21|6p
11.|CompLexity Gaming compLexity Gaming|2-6|77-119|-42|6p
12.|Splyce Splyce|1-3|38-62|-24|3p
13.|Counter Logic Gaming Counter Logic Gaming|1-5|69-95|-26|3p
14.|EUnited eUnited|1-9|85-154|-69|3p`,

`1.|Cloud9 Cloud9|14-0|227-129|+98|42p
2.|Immortals Immortals|10-4|201-129|+72|30p
3.|OpTic Gaming OpTic Gaming|7-5|162-140|+22|21p
4.|Echo Fox Echo Fox|6-2|119-100|+19|18p
5.|NRG eSports NRG eSports|6-4|130-110|+20|18p
6.|Team Liquid Team Liquid|6-6|168-170|-2|18p
7.|Renegades Renegades|5-5|136-129|+7|15p
8.|Winterfox Winterfox|5-5|131-143|-12|15p
9.|Selfless Gaming Selfless Gaming|3-7|127-142|-15|9p
10.|SK Gaming SK Gaming|2-4|67-85|-18|6p
11.|CompLexity Gaming compLexity Gaming|2-6|77-119|-42|6p
12.|EUnited eUnited|2-12|130-214|-84|6p
13.|Counter Logic Gaming Counter Logic Gaming|1-5|69-95|-26|3p
14.|Splyce Splyce|1-5|55-94|-39|3p`,

`1.|Cloud9 Cloud9|14-0|227-129|+98|42p
2.|Immortals Immortals|13-5|261-169|+92|39p
3.|Renegades Renegades|11-7|256-204|+52|33p
4.|NRG eSports NRG eSports|9-5|192-145|+47|27p
5.|Echo Fox Echo Fox|8-4|174-158|+16|24p
6.|Team Liquid Team Liquid|8-6|200-183|+17|24p
7.|OpTic Gaming OpTic Gaming|8-6|191-168|+23|24p
8.|Winterfox Winterfox|5-5|131-143|-12|15p
9.|Selfless Gaming Selfless Gaming|5-9|169-201|-32|15p
10.|SK Gaming SK Gaming|4-4|99-93|+6|12p
11.|CompLexity Gaming compLexity Gaming|4-10|137-208|-71|12p
12.|Counter Logic Gaming Counter Logic Gaming|2-8|105-157|-52|6p
13.|EUnited eUnited|2-16|161-278|-117|6p
14.|Splyce Splyce|1-9|91-158|-67|3p`,

`1.|Cloud9 Cloud9|17-1|287-168|+119|51p
2.|Immortals Immortals|15-5|293-184|+109|45p
3.|OpTic Gaming OpTic Gaming|12-6|261-217|+44|36p
4.|NRG eSports NRG eSports|11-5|224-166|+58|33p
5.|Renegades Renegades|11-7|256-204|+52|33p
6.|SK Gaming SK Gaming|10-6|178-159|+19|30p
7.|Team Liquid Team Liquid|9-9|249-236|+13|27p
8.|Echo Fox Echo Fox|9-9|237-250|-13|27p
9.|Selfless Gaming Selfless Gaming|6-12|227-262|-35|18p
10.|Winterfox Winterfox|5-7|131-143|-18|15p
11.|CompLexity Gaming compLexity Gaming|5-11|160-233|-73|15p
12.|Counter Logic Gaming Counter Logic Gaming|3-11|137-217|-80|9p
13.|EUnited eUnited|2-16|161-278|-117|6p
14.|Splyce Splyce|1-11|106-190|-84|3p`,

`1.|Cloud9 Cloud9|23-1|383-225|+158|69p
2.|SK Gaming SK Gaming|16-6|306-202|+104|48p
3.|Immortals Immortals|15-5|293-184|+109|45p
4.|OpTic Gaming OpTic Gaming|14-6|293-231|+62|42p
5.|NRG eSports NRG eSports|13-7|271-212|+59|39p
6.|Echo Fox Echo Fox|12-10|293-293|0|36p
7.|Renegades Renegades|11-7|256-204|+52|33p
8.|Team Liquid Team Liquid|11-9|281-254|+27|33p
9.|Winterfox Winterfox|7-13|220-280|-60|21p
10.|CompLexity Gaming compLexity Gaming|7-17|234-351|-117|21p
11.|Counter Logic Gaming Counter Logic Gaming|6-12|193-266|-73|18p
12.|Selfless Gaming Selfless Gaming|6-16|267-326|-59|18p
13.|EUnited eUnited|2-20|196-342|-146|6p
14.|Splyce Splyce|1-15|138-254|-116|3p`,

`1.|Cloud9 Cloud9|23-1|383-225|+158|69p
2.|OpTic Gaming OpTic Gaming|16-6|325-245|+80|48p
3.|Immortals Immortals|16-6|321-212|+109|48p
4.|SK Gaming SK Gaming|16-6|306-202|+104|48p
5.|NRG eSports NRG eSports|15-7|303-224|+79|45p
6.|Renegades Renegades|12-8|281-222|+59|36p
7.|Team Liquid Team Liquid|12-10|309-282|+27|36p
8.|Echo Fox Echo Fox|12-10|293-293|0|36p
9.|Winterfox Winterfox|9-13|252-300|-48|27p
10.|Counter Logic Gaming Counter Logic Gaming|7-15|225-323|-98|21p
11.|CompLexity Gaming compLexity Gaming|7-17|234-351|-117|21p
12.|Selfless Gaming Selfless Gaming|6-16|267-326|-59|18p
13.|Splyce Splyce|3-19|202-335|-133|9p
14.|EUnited eUnited|2-22|213-374|-161|6p`,

`1.|Cloud9 Cloud9|25-1|383-225|+158|75p
2.|Immortals Immortals|20-6|385-234|+151|60p
3.|SK Gaming SK Gaming|18-8|341-225|+116|54p
4.|OpTic Gaming OpTic Gaming|17-9|376-306|+70|51p
5.|Renegades Renegades|17-9|371-271|+100|51p
6.|NRG eSports NRG eSports|17-9|344-278|+76|51p
7.|Team Liquid Team Liquid|15-11|370-318|+52|45p
8.|Echo Fox Echo Fox|13-13|337-353|-16|39p
9.|Counter Logic Gaming Counter Logic Gaming|10-16|288-377|-89|30p
10.|Winterfox Winterfox|9-17|273-364|-93|27p
11.|CompLexity Gaming compLexity Gaming|9-17|269-377|-108|27p
12.|Selfless Gaming Selfless Gaming|7-19|302-387|-85|21p
13.|Splyce Splyce|3-23|240-402|-162|9p
14.|EUnited eUnited|2-24|239-409|-170|6p`];

prepareRankings($('#na'), NAWeeks);
