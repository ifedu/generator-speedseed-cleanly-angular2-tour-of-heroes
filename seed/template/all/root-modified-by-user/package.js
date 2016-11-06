module.exports = ($) => {
    const speedseed = require('speedseed')
    const file = new speedseed.Files()

    const optionsGeneral = {
        description: `${$.general.project} with ${$.tpl.framework}`,
        name: $.general.project,
        private: true,
        version: '0.0.0',
        dependencies: {
            '@angular/common': '2.1.1',
            '@angular/compiler': '2.1.1',
            '@angular/core': '2.1.1',
            '@angular/forms': '2.1.1',
            '@angular/http': '2.1.1',
            '@angular/platform-browser': '2.1.1',
            '@angular/platform-browser-dynamic': '2.1.1',
            '@angular/router': '3.1.1',
            '@angular/upgrade': '2.1.1',
            'angular-in-memory-web-api': '0.1.13',
            'core-js': '2.4.1',
            'reflect-metadata': '0.1.8',
            'rxjs': '5.0.0-beta.12',
            'systemjs': '0.19.39',
            'zone.js': '0.6.25'
        },
        devDependencies: {
            'browser-sync': '2.12.8',
            'del': '2.2.0',
            'express': '4.14.0',
            'extend': '3.0.0',
            'gulp': '3.9.0',
            'gulp-changed': '1.2.1',
            'gulp-data': '1.2.0',
            'gulp-filter': '4.0.0',
            'gulp-htmlmin': '2.0.0',
            'gulp-if': '2.0.1',
            'gulp-jade': '1.0.1',
            'gulp-minify-inline': '0.2.1',
            'gulp-modify-file': '0.1.0',
            'gulp-plumber': '1.1.0',
            'gulp-rename': '1.2.2',
            'gulp-sass': '2.3.1',
            'gulp-size': '2.1.0',
            'gulp-transform-indent': '0.3.0',
            'gulp-typescript': '2.13.6',
            'gulp-uglify': '1.2.0',
            'gulp-useref': '3.1.0',
            'gulp-util': '3.0.7',
            'gulp-watch': '4.3.5',
            'http-proxy-middleware': '0.17.0',
            'lodash': '4.13.1',
            'plato': '1.5.0',
            'run-sequence': '1.1.1',
            'ts-loader': '0.9.4',
            'typings': "1.0.5",
            'webpack': '1.13.2',
            'webpack-stream': '3.2.0'
        },

        engines : {
            node : ">=6.0.0"
        }
    }

    file.extendFromUser(optionsGeneral, './package.json')

    file.writeFile('package.json', optionsGeneral, 2)
}