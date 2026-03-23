---
layout: default
title: Books
description: Books
section: books
class: books
---

<div class="article" markdown="1">

# Books
Creating a page where I'll track what I read. Not going to start with a big design, but rather evolve it over time.
I don't love the star system - maybe a kind of tagging system. 
* wouldn't reccomend
* would reccomend

* Had a problem with
* no hangups
* Din't finish
* loved

* Not well written
* Well written

* Felt Short
* Felt long

* cried
* didn't cry
</div>

<div class="article container">
  <div class="half" markdown="1">

## Mains
  <!-- Using https://stackoverflow.com/questions/17118551/generating-a-list-of-pages-not-posts-in-a-given-category#17913214 -->
  <ul>
  {% for page in site.pages %}
    {% if page.resource == true %}
      {% if page.categories contains 'mains' %}
              <li><b><a href="{{ page.url }}">{{ page.title }}</a></b><br>{{ page.cooktime }} | {{ page.servingsize }}</li>
      {% endif %}
    {% endif %}
  {% endfor %}
  </ul>
  </div>

  <div class="half" markdown="1">

## Ingredients
  <ul>
  {% for page in site.pages %}
    {% if page.resource == true %}
      {% if page.categories contains 'ingredients' %}
              <li><b><a href="{{ page.url }}">{{ page.title }}</a></b><br>{{ page.cooktime }} | {{ page.servingsize }}</li>
      {% endif %}
    {% endif %}
  {% endfor %}
  </ul>
  </div>

  <div class="half" markdown="1">

## Breads
  <ul>
  {% for page in site.pages %}
    {% if page.resource == true %}
      {% if page.categories contains 'breads' %}
              <li><b><a href="{{ page.url }}">{{ page.title }}</a></b><br>{{ page.cooktime }} | {{ page.servingsize }}</li>
      {% endif %}
    {% endif %}
  {% endfor %}
  </ul>
  </div>

  <div class="half" markdown="1">

## Desserts
  <ul>
  {% for page in site.pages %}
    {% if page.resource == true %}
      {% if page.categories contains 'desserts' %}
              <li><b><a href="{{ page.url }}">{{ page.title }}</a></b><br>{{ page.cooktime }} | {{ page.servingsize }}</li>
      {% endif %}
    {% endif %}
  {% endfor %}
  </ul>
  </div>
</div>
