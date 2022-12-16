---
title: "Writing"
description: "The about page."
---

Here are some of my writings.

{% for post in collections.writing %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
