var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/css'))
});
gulp.task('fonts', function() {
  return gulp.src('node_modules/font-awesome/css/*')
    .pipe(gulp.dest('app/css'))
})
gulp.task('compile-css', function () {
  return gulp.src('app/css/**/*.css')
    .pipe(concatCss('bundle.css'))
    .pipe(gulp.dest('app/cssBundle/'));
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  gulp.watch('app/css/**/*.css', ['compile-css']); 
})