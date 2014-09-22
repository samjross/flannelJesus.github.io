---
layout: post
title: "CSS Trick: Nth-Child Formulas"
description: "How to use :nth-child() cleverly"
category: web design
tags: [css, selectors]
css: nth-child
---
{% include JB/setup %}

I've known about `nth-child` for quite some time. It's not new to me, and I've even google a few tutorials on how to use it. There's some stuff I'm going to explain here that hasn't been explained elsewhere, but let's start the basics:

I'm going to use the following html for the examples:

{% highlight html %}
<div class="example">
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</div>
{% endhighlight %}

`x:nth-child(n)` selects anything that matches selector `x` that is the nth-child of its parent. So, selecting `div.example > div:nth-child(4)` and setting `{background:green}` will produce the following result:

<div class="example e1">
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</div>

Then, you've got `nth-child(even)` and `nth-child(odd)` which do exactly what you'd expect. I'll apply `border:solid 2px black` to odd children and `background:purple` to even ones:

<div class="example e2">
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</div>

The last of the basics is that you can use certain formulas that behave like `modulo` operators. `nth-child(3n)` for example selects the 3rd, 6th, 9th, etc. children. `nth-child(3n+1)` selects the 1st, 4th, 7th, etc.

<div class="example e3">
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</div>

What I recently wanted to achieve was to use one of those `modulo` selectors, but without affecting some of the first ones. I wanted to use `nth-child(3n+2)`, which normally selects the 2nd, 5th, 8th etc elements, but I didn't want it to select the 2nd one. My first idea was to use `(3n+5)` instead (as 5%3 == 2%3 obviously), but that didn't seem to work.

<aside>Fucking hell, I just tried it here and that technique DOES work. The entire reason I was making this post was because that technique didn't work when I tried it a couple weeks ago. I'll keep on posting on my findings anyway.</aside>

OK, that technique *does* work. You can see above I applied `background:orange` with the selector `(3n+1)`. Below I'll show the result of the selector `nth-child(3n+4)`:

<div class="example e4">
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</div>

So, that sorta dampens the entire spirit of this post. HOWEVER, perhaps most people didn't know that you could do that, so maybe this will still be useful.

But anyway, the workaround I discovered (when I still thought `3n+4` selected the same things as `3n+1`) involves another `nth-child` formula that I didn't talk about: `(n+x)` which selects the xth element and beyond. In addition, `(-n+x)` selects elements up to and including x. Apparently the selector works by iterating values of `n` starting from 0 and going up until the selector is too large to apply to anything anymore, or *too small* in the case of a negative coefficient. I probably would have known that from the outset if I read any documentation. 

I'll use `nth-child(n+3)` and `nth-child(-n+5)` below, applying `backround:brown` and `border:solid 2px black` respectively:

<div class="example e5">
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</div>

All of the above formulas apply predictably to the `:nth-last-child()` selector as well.

Now, with a clever combination of `:not`, `:nth-child(modulo formula)`, `nth-child(n+x)` and `:nth-last-child()` you can create some really powerful methods of selecting (for some admittedly rare, niche use-cases). We can, for example, select elements whose `mod 4` is 1, but only applying to, say, the last 8 elements with `div.example > div:nth-last-child(-n+8):nth-child(4n+1)`:

<div class="example e6">
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</div>

Again, I realise that the use cases for this are probably not all that common, but I came across the need for a selector of this type in my own work so maybe you will too.
