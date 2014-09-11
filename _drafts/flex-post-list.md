---
layout: post
category : web design
title: Using Flex to Make a Perfect Post List
tagline: "Experimenting with the flexbox layout"
tags : [intro, beginner, jekyll, tutorial]
css: flex-post-list
---

## Introduction

I've been intrigued by what I've read of Flexbox in css since I first heard of it, but I'd never read any clear writup about how to use it effectively and I didn't really have the time to experiment. I finally came up with a usecase for it, though -- an excuse to get my hands dirty and try it out -- and in the context of this blog no less! This post is a walkthrough of my experiments with using `display: flex` and the css properties that go with it to hopefully create an attractive post display.

## My Goal

My goal is to create a way to present a post-list that has the following features:

* The posts in the post list should have an image, a title and an excerpt.
* The posts should be arranged in responsive rows (following a specific pattern which I will show below)
* The posts in a row should all be forced to have the same height as each other

The pattern that the responsive rows should follow is this:

There will be 11 posts, and in all variations of the display, the first row of posts should be bigger than the latter rows. On wider screens, the first row should have 3 posts and the others 4; on medium screens, 2 posts for top row and 3 for the rest; on small screens, 1 post on top and 2 for the rest. All of these patterns fit 11 posts perfectly.

![how my posts should look]({{ site.url }}/assets/images/postlist.jpg)

## First Try

<div class="first-try flex">
	<a href="">
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description. Make this description extra long to show that the other boxes take up same vertical space.</p>
	</a>
	<a href="">
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description</p>
	</a>
	<a href="">
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description</p>
	</a>
	<a href="">
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description</p>
	</a>
	<a href="">
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description</p>
	</a>
	<a href="">
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description</p>
	</a>
	<a href="">
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description</p>
	</a>
	<a href="">
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description. Another extra long one to prove my point</p>
	</a>
	<a href="">
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description</p>
	</a>
	<a href="">
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description</p>
	</a>
	<a href="">
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description</p>
	</a>
</div>

I'm not going to detail the full css - you can look at the source code for that - but I'll talk about the important bits. First the html:

{% highlight html %}
<div class="first-try flex">
	<a href="">
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description</p>
	</a>
	... 10 more of those ...
</div>
{% endhighlight %}

To get the effect, first I set the outer div to `display: flex`, `flex-wrap: wrap`, and `justify-content: space-between`. The `a` tags are set to `display:block` though I don't think that was necessary. Then I define the widths of the `a` elements, `.first-try > a`. I am using the 'calc' css which helps me to acheive precise distances between the `a` blocks but I set a fallback % width first. The specific details of those are not really relevant -- it's fairly straight forward, when I need 3 posts in a row, I have the width be a little under 33%, when I need 4 posts, a little under 25%, and when I need 1 post, 100%, etc.

It works beautifully -- very beautifully! They're perfectly spaced apart, each post block on the same row is forced to have the same height! What can go wrong?

Well, I thought about it and realized that if I'm paginating my posts to 11 posts per page, the first pages will have 11 posts but the last page will usually have fewer. When you take off a block -- try it in your dev-tools -- the last row looks funky. The `justify-content: space-between` style messes it up, produces the following result:

![unsightly gap between blocks]({{ site.url }}/assets/images/ugly-gap.jpg)

So when there are fewer blocks on the last row than on the last above, instead of the blocks essentially 'floating' left like you'd want them to, the space gets distributed evenly between them.

Now, it might be that using `display:table` solves my problems -- I don't know. It might be that display table forces the blocks to be the same height, and -- this is the part I doubt, which is why I went to flex in the first place -- allows for a responsive number of blocks that changes based on the width of the container. 

I'd like to know if `display:table` can meet all my needs -- I know just the standard `float:left` can't, and I'd have a helluva time trying to get the bootstrap grid classes working to my favor (and I'm looking into flexbox largely to avoid bootstrap classes) -- so please comment if `table` a feasible way to do it. But for now, I'm just focusing on the flexbox model. I'm going to try again, this time using a very different approach and avoiding `justify-content: space-between` or the even more-problematic `space-around`.

## Second Try

## Third Try