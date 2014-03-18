---
layout: 2014-spring-footed
title: Ryan Hornberger
description: Entreprenuer, Creator, Husband, Father.
---

{% include header-basic.md %}

{% assign post = site.posts.first %}
<div class="post">
  <a href="{{ post.url }}"><h2>{{ post.title }}</h2></a>
  {{ post.content }}
</div>

{% assign post2 = site.posts[1] %}
<div class="post">
  <a href="{{ post2.url }}"><h2>{{ post2.title }}</h2></a>
  {{ post2.content }}
</div>
