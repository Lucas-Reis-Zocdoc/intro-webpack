---
title: What the webpack?
author: Lucas Reis
theme: night
highlight-theme: dracula
---

# What the webpack?

**Lucas Reis**

*Booking / Raptors team*

---

<!-- .slide: data-background="linear-gradient(to bottom right, #FF5E3A, #FF2A68)" -->

### 1

## Why do we use webpack?

---

### A little bit of history

In the beginning, we had simple HTML pages with some jQuery code:

```js
var hiddenBox = $("#banner-message");

$("#button-container button").on("click", function(event) {
  hiddenBox.show();
});

$.ajax({
  url: "/api/getWeather",
  data: {
    zipcode: 97201
  },
  success: function(result) {
    $("#weather-temp").html("<strong>" + result + "</strong> degrees");
  }
});
```

---

Dependencies were *relatively* easy to manage:

```html
<head>
    <link rel="stylesheet" 
        href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
    <script type="text/javascript" 
        src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type="text/javascript" 
        src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js"></script>
    <script>
        $(function() {
            $("#progressbar").progressbar({
                value: 37
            });
        });
    </script>
</head>
```

---

- Applications were becoming **larger** and more complex

- Frameworks like Angular and Backbone started being used, and code started being organized in **modules**

- Codebases started having dozens and even **hundreds of files**

**We started needing a *build* phase in our workflow!!!**

---

### Build phase?

- Concatenating files

- Optimizing bundles *(uglify)*

- Linting

- Compiling / Transpiling

- Watch mode / Hot reloading

*... and the list goes on.*

---

### Tools used in different moments

1. Scripts: *Bash, MAKE, Node*

2. Generic task runners: *Grunt, Gulp*

3. Specialized bundlers: *Browserify, webpack*

---

### Today's standard

- Different configs for *dev, testing and production*

- Most work is done by *bundlers*, tasks are run by *npm scripts*

---

Example: Create React App

---

<!-- .slide: data-background="linear-gradient(to bottom right, #1D77EF, #81F3FD)" -->

### 2

## How does webpack work?

---

- webpack is a module bundler for *javascript* applications

- webpack recursively builds a *dependency graph* that includes every module your application needs

- webpack packages all of these modules into a small number of *bundles* to be loaded by the browser

---

### Four main concepts:

- Entry

- Output

- Loaders

- Plugins

---

## Entry

Starting point(s) of the dependency graph

---

## Output

How to treat bundled code

---

## Loaders

- Remember: webpack only understands javascript (wow!)

- Loaders process individual files before adding them to the dependency graph
  - Transform javascript files
  - Compile other files to javascript

---

## Plugins

Add functionality to webpack

---

Example!

---

<!-- .slide: data-background="linear-gradient(to bottom right, #FF5E3A, #FF2A68)" -->

### 3

## Code-Splitting with webpack

---

Example!

---

Thank you very much!