---
layout: post
title: "Shopify 301 Utilities"
description: "A bookmarklet to help people upload and back up their 301s in bulk"
category: programming
tags: [javascript, js, web, shopify, programming]
---

Import, export and delete 301s in bulk on Shopify. Drag the link below to your bookmarks area. To use, go to your Shopify Admin area and click the bookmark.

<a class="btn btn-primary" href="javascript:document.body.appendChild(document.createElement('script')).setAttribute('src','https://flanneljesus.github.io/assets/js/301_bookmarklet.js');void(0);">bookmark</a>

The input area accepts either space-delimitted or tab-delimitted redirects. The old url comes first, then the new url. The primary motivation for this was so that you could simply copy and paste from a spreadsheet to upload redirects in bulk.

Here's what the UI looks like:

![shopify 301 ]({{ site.url }}/assets/images/301_UI_screenshot.jpg)
