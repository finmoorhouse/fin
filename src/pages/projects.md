---
title: "Projects"
description: "The about page."
---

Here are some of my projects.

{% for post in collections.projects %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
