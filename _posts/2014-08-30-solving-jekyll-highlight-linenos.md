---
layout: post
title: "Solving Jekyll Highlight Linenos"
description: ""
category: jekyll
tags: [jekyll, code, styling, css]
redirect_from: "/2014-08-30/solving-jekyll-highlight-linenos/"
---
I don't always blog, but when I do I'm very picky about styling. You probably can't tell by the state of this blog -- I haven't added much custom styling at all. This is actually almost fully the out-of-the-box [Jekyll Bootstrap](http://jekyllbootstrap.com/) site. I'm working on a very cool (imo) style for this blog, but it's nowhere near ready yet.

But now that I'm into programming, I figured I am going to want to blog using code snippets here and there. I like a good syntax highlighting color scheme, and I've seen some very impressive ones on some peoples' blogs -- `pre` styling that made programming look downright sexy. So I got to work.

The first thing I did - tangential to this blog post - was install in `assets` all of the pygment stylesheets from [here](http://richleland.github.io/pygments-css/), bulk-change some of the class names to work with what Pygment outputs, and then add some code to my Jekyll layouts so that all I have to do is change `highlighter_style: name` in the `_config` file to match the file `name.css` for whatever stylesheet I wanted, or change the same property in the frontmatter of any post or page -- so now it's that easy for me to change to a different syntax highlighter.

Now with those style sheets taken care of, my thoughts came to this: with my prior experience with Jekyll (I had a Jekyll blog on this same domain that I completely scrapped), I remember having one problem that really bugged me: highlight lang linenos. I wanted line numbers presented with my code, but just using `{{ "{% highlight python linenos " }}%}` placed the numbers inline with the code -- an obvious problem for copy-pasting. (btw, if you're wondering how I just posted liquid tags within a Jekyll post, check out [this link](http://stackoverflow.com/questions/3426182/how-to-escape-liquid-template-tags) or view my [source code](https://github.com/flannelJesus/flannelJesus.github.io))

I've been interested for a long time in potentially writing guides and books on programming or web design, and so this functionality is actually pretty important to

Some googling and I found out how to get code snippets produced by pygments that allowed for copy-pasting without copying the line numbers. [thanpolas](http://thanpol.as/jekyll/jekyll-code-highlight-and-line-numbers-problem-solved/) posted about it. You'll see a similarity between the title of his post and the title of my post, but I've gone a step further than him.

What I learned from him was that `{{ "{% highlight python linenos=table " }}%}` outputs the code in a separate pane from the line-numbers. GREAT PROGRESS! I tried it and it worked! 

Well...sorta.

In his post, thanpolas notices line wrapping problems, comes up with a solution that he acknowledges is incompatible with GitHub pages, and calls it a day. But that wasn't good enough for me.

I've solved it, in a way that doesn't have wrapping problems, and works out-of-the-box in Jekyll for GitHub, no special Ruby scripts required. Here, take a look:

{% highlight python linenos=table %}
"""
A program for coding and decoding messages
"""
SHIFT = 1

def shift_coder(str):
	"""
	Takes a string and codes it
	"""
	characters = list(str)
	coded_characters = []
	
	for dummy_char in characters:
		ascii_int = ord(dummy_char)
		if ascii_int in range(32) + range(32, 65) + range(91, 97) + \
		range(123, 128):
			new_char = chr(ascii_int)
		elif ascii_int in range(65, 91):
			new_char = chr(((ord(dummy_char) + SHIFT - 65) % 26) + 65) # making this line as long as possible to test no-wrapping
		elif ascii_int in range(97, 123):
			new_char = chr(((ord(dummy_char) + SHIFT - 97) % 26) + 97)
			
		coded_characters.append(new_char)
		
	coded_str = "".join(coded_characters)
	return coded_str

def shift_decoder(str):
	"""
	Takes a coded string and decodes it into the original message
	"""
	characters = list(str)
	coded_characters = []
	
	for dummy_char in characters:
		ascii_int = ord(dummy_char)
		
		if ascii_int in range(32) + range(32, 65) + range(91, 97) + \
		range(123, 128):
			new_char = chr(ascii_int)
		elif ascii_int in range(65, 91):
			new_char = chr(((ord(dummy_char) - SHIFT - 65) % 26) + 65)
		elif ascii_int in range(97, 123):
			new_char = chr(((ord(dummy_char) - SHIFT - 97) % 26) + 97)
			
		coded_characters.append(new_char)
		
	coded_str = "".join(coded_characters)
	return coded_str

{% endhighlight %}

In addition to the line-wrapping problems that he saw, I also noticed the following things in the case of my blog:

* I wanted a responsive site (hence going with bootstrap) but the way it was showing up initially, the width of the code div was wider than its container when I resized to a phone-sized display, meaning that the whole page had a horizontal scroll -- I just wanted a horizontal scroll on the code div itself.

* When I resized the display to phone-size, the line numbers on the left for some reason started wrapping, so instead of saying '12', line 12 had the 2 below the 1, and the whole thing just got messed up altogether.

![linenos mistake]({{ site.url }}/assets/images/linenos.jpg)


I added only a total of 12 lines to my css file - and that's 12 *prettified* lines - though I'm not sure how much of the solution came from using Bootstrap in the first place. Here's what I added:

{% highlight css linenos=table %}
table.highlighttable {
  overflow-x:auto;
  display:block;
}

table.highlighttable td.code {
  width:100%;
}

pre code {
  white-space: pre;
}
{% endhighlight %}

<aside>Line 2 above used to say 'overflow:scroll' rather than 'overflow-x:auto' -- this looked fine on my Macbook but thanks to an observant reader I found soon that it had a very wonky effect on Windows.</aside>

The first 8 lines above solved the problem of overflow in the code area - there is only a horizontal scroll in the code area now, not affecting the entire page. 

The last 3 solved the problem of the linenumbers wrapping strangely.

*Now* it's solved.
