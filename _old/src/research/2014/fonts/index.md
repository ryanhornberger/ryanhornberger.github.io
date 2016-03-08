---
layout: 2014-spring-footed
title: Font Research
description: Web Design Consulting, System Infrastructure Consulting, VoIP Consulting
font-families: [
	"Noto Sans",
	"Source Sans Pro",
	"Open Sans",
	"Clear Sans",
	"HelveticaNeue-Light",
	"Helvetica Neue",
	"Helvetica",
	"Arial",
	"Lucida Grande",
	"sans-serif"
]
---

{% include header-basic.md %}
<link rel="stylesheet" href="fonts.css">
<div class="page-max pad">
	<h1>Here are some fonts to consider</h1>

	{% for family in page.font-families %}
		<p style='font-family: {{ family }}'>
			<span style="color: #ff0000">{{ family }} -- </span>
			<span style="font-weight: 100;"> Ryan Hornberger | </span>
			<span style="font-weight: 300;"> Dark, Magic, Light, Fun, Grumpy, Cold, Sexy, Style, Modern, Traditional, Fashion | </span>
			<span style="font-weight: 400;"> ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz | </span>
			<span style="font-weight: 600;"> 1234567890 | </span>
			<span style="font-weight: 700;"> !@#$%^&*()_+{}|:"<>?-=[]\;',./'" </span>
		</p>
	{% endfor %}
</div>
