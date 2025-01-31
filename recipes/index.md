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
* [BBQ Tofu & Rice](./bbq-tofu-rice)
* [Meatloaf, Mashed Potatoes, & Green Beans](./meatloaf)
* [Potato Wraps with chips](./potato-wraps)
* [Chick'n & Rice Soup](./chickn-and-rice-soup)
* [Enchiladas Verde](./enchiladas-verde)

## Ingredients
## Bread
## Desserts

<ul class="post-list">
{% for post in site.posts limit:10 %}
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span></a></article></li>
{% endfor %}
</ul>

</div>
