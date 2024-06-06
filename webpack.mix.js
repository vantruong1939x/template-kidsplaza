const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
//         //
//     ]);

mix.sass('resources/sass/main.scss', 'public/css');
mix.sass('resources/sass/components/navbar.scss', 'public/css/components');
mix.sass('resources/sass/components/footer.scss', 'public/css/components');
mix.sass('resources/sass/pages/home/header.scss', 'public/css/pages/home');
mix.sass('resources/sass/pages/home/outstan-category.scss', 'public/css/pages/home');
mix.sass('resources/sass/pages/home/outstan-brand.scss', 'public/css/pages/home');
// mix.sass('resources/sass/abstracts/_variableweb.scss', 'public/css/abstracts');

// Biên dịch tệp app.js cho tôi
mix.js('resources/js/app.js', 'public/js');
