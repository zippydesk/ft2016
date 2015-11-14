---
---

// This is a global variable (because it is defined outside any function scope)
var ID_TALK = {
	{% for talk in site.data.talks %}
		'{{ talk[1].id | escape }}': '{{ talk[1].title | escape }}'{% unless forloop.last %},{% endunless %}
	{% endfor %}
};
