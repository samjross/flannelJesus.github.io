---
layout: post
title: "Another Jekyll Highlighting Problem"
tagline: "Finding out how to highlight bash session text"
category: jekyll
tags: [jekyll, code, syntax highlighting]
---
{% include JB/setup %}

On the original front page of this blog (whether it's live at the time you're reading this or not, I can't say) there was, from the default Jekyll Bootstrap index.html, a little line that read `$ rm -rf _posts/core-samples`. It's of course a bash/shell session to delete the `core-samples` folder from the default Jekyll Bootstrap repo. What I wanted to do was quite simple: in my experimenting around with Pygments Highlighting, I wanted to simply highlight it as a shell session.

It wasn't as easy as I thought it would be.

First, I tried `{{ "{% highlight bash " }}%}`. A shot in the dark. What I was hoping, at the very least, was to find that the class for the `$` was different from the class for the rest of the line. And it was! 

Success? No. Not quite.

I went to the [Pygments site](http://pygments.org/demo/) and I found that the stuff for the language 'bash' was for bash scripts, not bash sessions. So even though I kinda sorta got the result I wanted, I also was kinda sorta doing it the wrong way.

The first thing I tried after that was the next entry down on the Pygments demo site: `bash session`. The space between 'bash' and 'session' was a problem for me. `bash session` ended up using `bash` highlighting -- obviously the 'session' part was being ignored, presumably because of the space. I tried `bashsession`, `bash-session` and `bash_session`, all of which resulted in errors due to not corresponding to any supported Pygments language.

And then I tried `shell-session` and, I forget why, but for some reason that didn't work either. It wasn't an error, it just didn't change the html classes of the code the way I expected.

Googling a bit, searching through Stack Overflow, queries like 'Jekyll pygments multi word language' -- nothing. Nothing describing my particular problem.

So, the entry in the Pygments demo page for `shell-session` is 'Shell Session', and the entry I was trying before was 'Bash Session', which implied `{{ "{% highlight bash-session " }}%}` was what I was going for. But I already tried that and it didn't work. I tried it again, and it didn't work again.

So I begin thinking about opening a Stack Overflow question. I'm going to ask how to get 'Bash Session' to work -- it HAS to work, given that it's a Pygments-supported language. And so I go to the 'Bash Session' demo page again and am about to copy the url when I notice the url says 'lang=console'. I go back to 'Shell Session' and find the url says 'lang-shell-session'.

So that's when I realized that the Pygments demo site, as far as I can tell, stores the `lang` part of `{{ "{% highlight lang " }}%}` in the url. `{{ "{% highlight console " }}%}` corresponds to Bash Session. 

They could have made it more obvious.
