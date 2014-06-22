var gulp = require('gulp'),
  clean = require('gulp-clean'),
  header = require('gulp-header'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  stylus = require('gulp-stylus'),
  autoprefixer = require('gulp-autoprefixer'),
  minifyCss = require('gulp-minify-css'),
  pkg = require('./package.json'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  path = require('path'),
  template = require('lodash').template;

gulp.task('default', ['compile']);
gulp.task('dev', ['compile', 'watch']);

gulp.task('watch', function() {
  gulp.watch('lib/**/*', ['compile']);
});

gulp.task('clean', function() {
  return gulp.src(['dist', 'lib/tmp'], { read: false })
    .pipe(clean());
});

gulp.task('compile', ['compile:css', 'compile:js']);

gulp.task('compile:css', ['clean'], function() {
  return gulp.src('lib/theme.styl')
    .pipe(stylus())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(minifyCss())
    .pipe(gulp.dest('lib/tmp'));
});

gulp.task('compile:js', ['clean', 'compile:css'], function() {
  return browserify('./lib/bespoke-theme-cube.js')
    .transform('brfs')
    .bundle({ standalone: 'bespoke.plugins.theme-cube' })
    .pipe(source('bespoke-theme-cube.js'))
    .pipe(buffer())
    .pipe(header(template([
      '/*!',
      ' * <%= name %> v<%= version %>',
      ' *',
      ' * Copyright <%= new Date().getFullYear() %>, <%= author.name %>',
      ' * This content is released under the <%= licenses[0].type %> license',
      ' * <%= licenses[0].url %>',
      ' */\n\n'
    ].join('\n'), pkg)))
    .pipe(gulp.dest('dist'))
    .pipe(rename('bespoke-theme-cube.min.js'))
    .pipe(uglify())
    .pipe(header(template([
      '/*! <%= name %> v<%= version %> ',
      '© <%= new Date().getFullYear() %> <%= author.name %>, ',
      '<%= licenses[0].type %> License */\n'
    ].join(''), pkg)))
    .pipe(gulp.dest('dist'));
});
