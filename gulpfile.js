const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const clean = require('gulp-clean');

function cleanDist() {
  return src('dist', { allowEmpty: true }).pipe(clean());
}

function css() {
  return src([
    './styles/vendors/**/*.scss',
    './styles/global/**/*.scss',
    './styles/components/**/*.scss',
  ])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(dest('./dist'));
}

function assets() {
  return src('assets/**/*').pipe(dest('dist'));
}

function startWatchers() {
  watch('./styles/**/*.scss', css);
  watch('./assets/**/*', assets);
}

exports.default = series(cleanDist, css, assets, startWatchers);
