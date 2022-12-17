---
title: "Writing"
description: "The about page."
---

You can find many of these posts on the [Effective Altruism Forum](https://forum.effectivealtruism.org/users/finm).

<ul>
{% for post in collections.writing | reverse %}

<li class="[&>*]:inline py-2">

[{{ post.data.title }}]({{ post.url }})

{% if post.data.date %}

({% year post.data.date %})

{% endif %}
</li>
{% endfor %}
</ul>
