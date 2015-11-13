---
---

var ID_TALK = {
	{% for talk in site.data.talks %}
		'{{ talks[1].id | escape }}':'{{ talk[1].title | escape }}&emsp;{{ talk[1].id | escape }}'{% unless forloop.last %},{% endunless %}
	{% endfor %}
};
