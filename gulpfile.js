var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var fontAwesome = require('node-font-awesome');



gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/css'))
});

gulp.task('compile-css', function () {
  return gulp.src('app/css/**/*.css')
    .pipe(concatCss('bundle.css'))
    .pipe(gulp.dest('app/cssBundle/'));
});

gulp.task('fonts', function() {
  gulp.src(fontAwesome.fonts)
    .pipe(gulp.dest('./app/fonts'));
 });

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  gulp.watch('app/css/**/*.css', ['fonts', 'compile-css']); 
})