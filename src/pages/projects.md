---
title: "Projects"
description: "The about page."
---

<ul>
{% for post in collections.projects | reverse %}

<li class="[&>*]:inline py-2">

[{{ post.data.title }}]({{ post.url }})

{% if post.data.date %}

({% year post.data.date %})

{% endif %}
</li>
{% endfor %}
</ul>

