---
layout: default
title: Recipes
description: Recipes
section: recipes
class: recipes
---

<div class="article" markdown="1">

# Recipes
My wife and I are pescitarian, but all of the recipes below are vegitarian or vegan. I like to translate all of the recipes to have ingredient amount inline in the directions. Groccery checklists are at the bottom of each recipe.

## Mains
<ul class="post-list">
{% for post in page.categories.recipes %}
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a></article></li>
{% endfor %}
</ul>

<ul>
  {% for post in site.categories.recipes %}
    {% if post.url %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

* [BBQ Tofu & Rice](./bbq-tofu-rice)
* [Meatloaf, Mashed Potatoes, & Green Beans](./meatloaf)
* [Potato Wraps with chips](./potato-wraps)
* [Chick'n & Rice Soup](./chickn-and-rice-soup)
* [Enchiladas Verde](./enchiladas-verde)

## Ingredients
## Bread
## Desserts

</div>
