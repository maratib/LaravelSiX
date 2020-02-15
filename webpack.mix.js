const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .copy('resources/img/**/*', 'public/img')
    .js('resources/js/bootstrap.js', 'public/js')
    .js('resources/js/myscripts.js', 'public/js')
    .sass('resources/sass/app/app.scss', 'public/css')
    .sass('resources/sass/web/web.scss', 'public/css');

mix.browserSync({
    proxy: 'laravelsix.tst',
    // files: ['**/*.js', '**/*.vue', '**/*.blade.php', '**/*.css', '**/*.scss'],
    notify: false
});
