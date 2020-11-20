module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // purgecss
    process.env.NODE_ENV == 'production' && require('@fullhuman/postcss-purgecss')({
      content: [
        './public/index.html',
        './public/image-card.html'
      ],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    }),
    // minify css
    process.env.NODE_ENV == 'production' && require('cssnano')({ preset: 'default', }),

  ]
}