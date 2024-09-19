# Gulp Project

This is a sample Gulp setup for automating front-end development tasks, including Sass compilation, JavaScript minification, image optimization, and font conversion.

## Requirements

- Node.js (LTS version recommended)
- npm (Node.js package manager)

## Available Tasks

- **styles**: Compiles Sass files to CSS, minifies CSS, and outputs to `./assets/css/`.
- **scripts**: Minifies JavaScript files and outputs to `./assets/js/`.
- **images**: Optimizes images and outputs to `./assets/images/`.
- **convertTTFtoWOFF**: Converts TTF fonts to WOFF and outputs to `./assets/fonts/`.

## Used Packages

- `gulp`: Run tasks.
- `gulp-sass`: Compiles Sass to CSS.
- `gulp-clean-css`: Minify CSS.
- `gulp-concat`: Concatenate files.
- `gulp-uglify`: Minify JavaScript.
- `gulp-imagemin`: Optimize images.
- `gulp-ttf2woff`: Convert TTF to WOFF.
