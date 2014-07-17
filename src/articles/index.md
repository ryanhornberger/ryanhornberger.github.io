---
layout: 2014-spring-footed
title: Our son is giving his birthday to Charity:Water
---

{% include header-basic.md %}

<div class="page-max pad">

	<h1>Articles</h1>
	
	<ul>
	  {% for post in site.posts %}
	    <li>
	      <a href="{{ post.url }}">{{ post.title }}</a> ({{ post.date }})
	    </li>
	  {% endfor %}
	</ul>

</div>