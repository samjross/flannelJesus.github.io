---
layout: post
title: "Variable Height Sticky Footer with FlexBox"
description: ""
category: web design
tags: [css, web design, flex-box, layout]
---
{% include JB/setup %}

I have a crappy footer on this site at the moment. It is 'sticky' in the wrong way -- it uses `position: fixed` so it stays on screen always. My idea of a 'sticky footer' is more that it stays pushed to the bottom, regardless of the content above it. 

<aside>Changed the design of this site to reflect the results of this post as of 18 Sep 2014.</aside>

I'm just using the default Bootstrap sticky footer. The Bootstrap code for it is this:

{% highlight html %}
<nav class="navbar navbar-default navbar-fixed-bottom">
    <div class="container">
        <p>Please forgive the sparseness of the current state of this blog; I've just begun working on it.
        </p>
    </div>
</nav>
{% endhighlight %}

The common solution to the 'sticky footer' problem involve setting a fixed height to the footer, putting it just outside a wrapper that has a min-height of 100%, and giving the margin-bottom a negative value equal to the height of the footer and a padding-bottom equal to the height of the footer as well. [This](http://ryanfait.com/sticky-footer/) is the top google result for `sticky footer` and it uses a similar method - effectively the same in concept, but slightly different in implementation.

The major problem with this is that someone might want to have a variable-height footer. For example, my footer is a `<p>` element with some text that wraps to 2 lines on some screen sizes. I could mess about with using `@media` queries to increase the height of the footer and the padding and margin of the wrapper, but that's a lot of work and it means extra work every time you decide you want to change the content of the footer.

So what we want is a javascript-less sticky footer that doesn't require knowing its height to set up; that we can change at will, and that can have automatically wrapping lines for smaller screen sizes.

Flexbox gives us such a solution. Check out my [demo](/better-sticky-footer/). Resize the screen to see that it meets all the requirements set forth - automatically and naturally accomodates height-changes of content, stays at the bottom of the screen regardless of the size of the content above it, etc.

Here's the most important html:

{% highlight html %}
<div class="content">
	<article>
		<p>Lots of interesting opinions here.</p>
	</article>
	<nav class="footer">
		<p>Footer content here.</p>
	</nav>
</div>
{% endhighlight %}

First, you must make sure that `div.content` reaches the bottom; you can use `min-height:100%` or, in the case of my demo, have it wrapped in a flexbox itself that forces it to take the full height available.

Then, `div.content` needs to be set to `display:flex` and `flex-direction:column`. The footer doesn't need any particular styling for this - just whatever you need for the look you want. The article, `.content > article`, needs to be set to `flex-grow:1`. This is what pushes the footer down to the bottom - if the article content isn't long enough to push the footer to the bottom, the article will grow take up all the remaining vertical space until there isn't any left.

Imo, this is a more flexible, more robust and simpler solution to how to acheive sticky footers. It doesn't tie you in 3 places of the css to any particular height, the height changes as needed, and the css is fairly minimal and clean.

<aside>After making this post, I found out that I wasn't the first to come up with the technique. A basically identical approach was laid out in a series of <a href="http://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/">posts</a> that I've seen before. I don't think I copied the guy's solution though; I don't think I looked at it. I think I came up with mine independently.</aside>
