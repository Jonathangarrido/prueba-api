// File: Gulpfile.js
'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

// Servidor web de desarrollo
gulp.task('server', function(){
  connect.server({
    root: './app',
    port: 8080,
    livereload: true
  });
})

// Compila el html
gulp.task('html', function() {
  gulp.src('./app/**/*.html')
    .pipe(connect.reload());
});

// Busca errores en el JS y nos los muestra por pantalla
gulp.task('jshint', function() {
  return gulp.src('./app/js/app.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(connect.reload());
});

// Preprocesa archivos SASS a CSS y recarga los cambios
gulp.task('css', function() {
  gulp.src('./app/css/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))// compact | compressed
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(sourcemaps.write())
    .pipe(concat('./main.css'))
    .pipe(gulp.dest('./app/css'))
    .pipe(connect.reload());
});



// Vigila cambios que se produzcan en el código
// y lanza las tareas relacionadas
gulp.task('watch', function() {
  gulp.watch(['./app/**/*.html'], ['html']);
  gulp.watch(['./app/css/**/*.scss'], ['css']);
  gulp.watch(['./app/js/**/*.js', './Gulpfile.js'], ['jshint']);
});

gulp.task('default', ['server','watch']);