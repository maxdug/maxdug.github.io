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
<ul>
  {% for post in site.categories.recipes %}
    {% if post.url %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

{% for tag in site.tags %}
  <h3>{{ tag[0] }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}

#### new tag test
{% for post in site.tags[page.tag] %}
<li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}

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
