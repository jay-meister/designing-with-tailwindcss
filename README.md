

```sh
npm i tailwindcss postcss-cli autoprefixer
npx tailwind init

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
  "build": "postcss css/tailwind.css -o public/buid/tailwind.css"
}

// in terminal
npm run build
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

### Responsive episode:
https://www.youtube.com/watch?v=Ff_n_QClipQ&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=3&ab_channel=AdamWathan

Ensure image is full width when not distorted
```html
<img class="mt-6 sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center rounded-lg shadow-xl"
```