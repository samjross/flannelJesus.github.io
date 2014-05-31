---
layout: post
title: Shopify Liquid Template - “Next Post” and “Previous Post” Links
subtitle: I recently implemented those links after a long time of not knowing how. I thought I'd share what I did here.
---

In my "post" layout, I placed the following after <code>{% raw %}{{ content }}{% endraw %}</code>:

{% highlight html linenos %}
<p class="view">
    {% raw %}{% if page.previous.url %}{% endraw %}
        <a class="prev" href="{% raw %}{{page.previous.url}}{% endraw %}" title="{% raw %}{{page.previous.title}}{% endraw %}">
    {{"{% else " }}%}
        <a class="inactive">
    {{"{% endif " }}%}
    &laquo;
        </a>
    <em> <a href="/">view more</a> </em>
    {{"{% if page.next.url " }}%}  
        <a class="next" href="{% raw %}{{page.next.url}}{% endraw %}" title="{% raw %}{{page.next.title}}{% endraw %}" >
    {{"{% else " }}%}
        <a class="inactive">
    {{"{% endif " }}%}
    &raquo;
        </a>
</p>
{% endhighlight %}
