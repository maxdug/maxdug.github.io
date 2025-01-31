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
<!-- Using https://stackoverflow.com/questions/17118551/generating-a-list-of-pages-not-posts-in-a-given-category#17913214 -->
<ul>
{% for page in site.pages %}
  {% if page.resource == true %}
    {% if page.categories contains 'recipes' %}
            <li><a href="{{ page.url }}">{{ page.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

## Ingredients
## Bread
## Desserts

## Grocerly lists
I include a grocery list for each recipe with a link to copy it to your clipboard. But note that I don't include what I consider frequent ingredients that we always keep in stock. These include:
* Basic spices: Salt, Garlic Powder, Cumin, etc...
* Oils: Olive, Vegtable, etc...
* Rice
* Bread Flour
* Bread Crumbs
* Miso Paste
* Nutritional Yeast

</div>
