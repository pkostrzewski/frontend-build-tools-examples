const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const watch = require('gulp-watch');
const ttf2woff = require('gulp-ttf2woff');

// Ścieżki do folderów wejściowych i wyjściowych
const paths = {
  styles: {
    src: './src/scss/**/*.scss',
    dest: './assets/css/'
  },
  scripts: {
    src: './src/js/**/*.js',
    dest: './assets/js/'
  },
  images: {
    src: './src/images/**/*',
    dest: './assets/images/'
  },
  fonts: {
    src: './src/fonts/**/*.ttf',
    dest: './assets/fonts/'
  }
};

// Kompilacja plików Sass do CSS z optymalizacją CSS
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest));
}

// Minimalizacja plików JavaScript
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest));
}

// Optymalizacja obrazów
function images() {
  return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}

// Konwersja plików TTF na WOFF
function convertTTFtoWOFF() {
  return gulp.src(paths.fonts.src)
    .pipe(ttf2woff())
    .pipe(gulp.dest(paths.fonts.dest));
}

// Funkcja do obserwowania zmian w plikach
function watchFiles() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.images.src, images);
}

// Uruchamianie wszystkich zadań
exports.default = gulp.series(gulp.parallel(styles, scripts, images, convertTTFtoWOFF), watchFiles);
