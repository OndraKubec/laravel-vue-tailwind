const mix = require('laravel-mix');
const webpack = require('webpack');
const tailwindcss = require('tailwindcss');

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


mix.webpackConfig({
    plugins: [
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
        }),
    ],
})
// SPA
.js('resources/js/public_SPA/app.js', 'public/js')
.vue({ version: 3 })
.postCss('resources/css/public_SPA/app.css', 'public/css', [
    require("tailwindcss"),
])
// ADMINISTRATION
.js('resources/js/admin/admin.js', 'public/js')
.postCss('resources/css/admin/admin.css', 'public/css', [
    require('postcss-import'),
    [tailwindcss('./tailwind-admin.config.js')],
    require('autoprefixer'),
]);