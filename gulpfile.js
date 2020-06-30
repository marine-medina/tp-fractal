const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

function css() {
  return src(['./styles/vendors/**/*.scss', './styles/components/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(dest('./dist'));
}

exports.default = function () {
  css();
  watch('./styles/**/*.scss', css);
};
