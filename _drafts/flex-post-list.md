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
	<div>
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description</p>
	</div>
	<div>
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description</p>
	</div>
	<div>
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description</p>
	</div>
	<div>
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description</p>
	</div>
	<div>
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description</p>
	</div>
	<div>
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description</p>
	</div>
	<div>
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description</p>
	</div>
	<div>
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description</p>
	</div>
	<div>
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description</p>
	</div>
	<div>
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description</p>
	</div>
	<div>
		<img src="{{ site.url }}/assets/images/postlistimg.jpg" alt="post list image">
		<h3>post title</h3>
		<p>post description</p>
	</div>
</div>				

## Second Try

## Third Try