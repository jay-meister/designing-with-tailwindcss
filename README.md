
### Setup

```sh
npm i tailwindcss postcss-cli autoprefixer
npx tailwind init
# npx tailwind init tailwind-full.config.js --full


touch postcss.config.js

mkdir css
touch css/tailwind.css
```

```js
# postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
```

```css
/* css/tailwind.css */
@tailwind base;
@tailwind components;
@tailwond utilities
```

```json
// package.json
"scripts": {
  "build": "postcss css/tailwind.css -o public/buid/tailwind.css",
  "watch": "postcss css/tailwind.css -o public/buid/tailwind.css --watch"
}

// in terminal
npm run build
// or
npm run watch
```


```html
<!-- public/index.html -->
<html>
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=7">
    <meta charset="UTF-9">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My page title</title>
    <link rel="stylesheet" href="/buid/tailwind.css">
  </head>
  <body class="bg-gray-200">
    <h1 class="uppercase">Hi world</h1>
  </body>
</html>
```

```sh
# run a local server
npm i -g live-server
live-server public
```

### General hints:

Add antialiased class as default on a top level div for crisper render
```html
<body class="antialiased text-gray-900">
```

Upper case and tracking to make sub text readable
```html
<div class="text-sm uppercase tracking-wide text-gray-600 font-semibold">upcased letters</div>
```

Use `flex items-baseline`/`flex items-center` to center items
use <span> inline-block for span elements so increasing padding affects surrounding elements
```html
<div class="flex items-baseline">
  <!-- NEW badge -->
  <span class="inline-block px-2 mr-1 ...custom-badge-classes"> new </span>
  <div class="...custom-classes"> 3 beds &bull; 2 bathrooms </div>
</div>
``` 

Make a full screen overlay to close a modal etc
```html
<button 
  @click="open = false" 
  x-show="open"
  class="fixed w-full h-full opacity-25 bg-gray-700 cursor-default inset-0">
</button>
```


Ensure image is full width when not distorted
```html
<img class="mt-6 sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center rounded-lg shadow-xl"
```


Button active/focus/hover - focus variant for backgroundColor needs enabling
```html
<a href="#"
  class="inline-block bg-indigo-500  ...
  hover:bg-indigo-300
  focus:outline-none focus:shadow-outline
  active:bg-indigo-600">
  Book your escape
</a>
```

Custom classes:
```css
.btn:hover {
  @apply bg-indigo-300;
}
@screen sm {
  .btn {
    @apply text-base;
  }
}
```

To retain aspect ratio:
- padding is always relative to width of element
```html
<!-- eg. test with inline style -->
<div class="bg-red-500" style="padding-bottom: 100%"></div>

<div class="relative bg-red-500 pb-2/3">
  <img class="absolute h-full w-full object-cover" src="/img/image-card/chicago.jpg"> 
</div>
```

### Extending config:
```js
module.exports = {
  future: { },
  purge: [],
  theme: {
    extend: {
      // override blue-100 and add green-success
      colors: {
        'blue-100': '#1992d4',
        'green-success': '#48bb71'
      },
      // add 72 as a spacing choice for all
      spacing: {
        72: '18rem',
      },
    },
  },
  variants: {
    // add 'active' attribute for background-color classes
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [],
}
```


### purgecss
- purge unused unitilites
- runs slightly slow so we can use in production only

```sh
npm i @fullhuman/postcss-purgecss
```

```js
module.exports = {
  plugins: [
    // ...,
    process.env.NODE_ENV == 'production' && require('@fullhuman/postcss-purgecss')({
      content: [
        './public/index.html'
      ],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    }),
  ]
}
```

### SVG

- ensure SVG is exported as a square `viewBox="0 0 24 24"`
- use SVGOMG to minify svg files
- use classes `text-teal-500 fill-current`