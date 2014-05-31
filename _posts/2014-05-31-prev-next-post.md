---
layout: post
title: Liquid Template - "Next Post" and "Previous Post" Links
subtitle: I recently implemented those links after a long time of not knowing how. I thought I'd share what I did here.
---

In my "post" layout, I placed the following after <code>{% raw %}{{ content }}{% endraw %}</code>:

{% highlight html linenos %}
<p class="view">
    {% raw %}{% if page.previous.url %}{% endraw %}
        <a class="prev" href="{{page.previous.url}}" title="{{page.previous.title}}">
    {{"{% else " }}%}
        <a class="inactive">
    {{"{% endif " }}%}
    &laquo;
        </a>
    <em> <a href="/">view more</a> </em>
    {{"{% if page.next.url " }}%}  
        <a class="next" href="{{page.next.url}}" title="{{page.next.title}}" >
    {{"{% else " }}%}
        <a class="inactive">
    {{"{% endif " }}%}
    &raquo;
        </a>
</p>
{% endhighlight %}
