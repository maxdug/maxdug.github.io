---
layout: default
title: Recipes
description: Recipes
section: recipes
class: recipes
---

<div class="article" markdown="1">

# Recipes
This page is a work in progress - I'm slowly bringing in my recipes from my notes app. All of the recipes below are vegitarian or vegan. Ingredient amounts are place inline in the directions. Groccery lists are at the bottom of each recipe.

## Mains
<!-- Using https://stackoverflow.com/questions/17118551/generating-a-list-of-pages-not-posts-in-a-given-category#17913214 -->
<ul>
{% for page in site.pages %}
  {% if page.resource == true %}
    {% if page.categories contains 'recipes' %}
            <li><a href="{{ page.url }}">{{ page.title }} | {{ page.cooktime }} | {{ page.servingsize }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
</ul>

## Ingredients
## Bread
## Desserts

## Grocery Lists
I include a grocery list for each recipe with a link to copy it to your clipboard. But note that I don't include what I consider frequent ingredients that we always keep in stock. These include:
* Basic spices: Salt, Garlic Powder, Cumin, etc...
* Oils: Olive, Vegtable, etc...
* Rice
* Bread Flour
* Bread Crumbs
* Miso Paste
* Nutritional Yeast

</div>
