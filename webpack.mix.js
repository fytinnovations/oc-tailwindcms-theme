let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss'),
  workboxPlugin = require('workbox-webpack-plugin');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
mix.js('src/js/app.js', 'assets/js')
  .sass('src/sass/app.scss', 'assets/css')
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('tailwind.config.js')],
  })
  .setPublicPath('assets')
  .purgeCss({
    folders: ['layouts', 'partials', 'pages'],
    extensions: ['htm']
  });

