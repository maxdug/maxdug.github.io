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

#### Tag test
{% for tag in site.tags %}
  <h3>{{ tag[0] }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}

#### Category test 4
{% for cat in site.category-list %}
### {{ cat }}
<ul>
  {% for page in site.pages %}
    {% if page.resource == true %}
      {% for pc in page.categories %}
        {% if pc == cat %}
          <li><a href="{{ page.url }}">{{ page.title }}</a></li>
        {% endif %}   <!-- cat-match-p -->
      {% endfor %}  <!-- page-category -->
    {% endif %}   <!-- resource-p -->
  {% endfor %}  <!-- page -->
</ul>
{% endfor %}  <!-- cat -->

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
