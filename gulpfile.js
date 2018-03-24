const gulp = require('gulp');
const sass = require('gulp-sass');
const concatCss = require('gulp-concat-css');
// var fontAwesome = require('node-font-awesome');

function swallowError (error) {
  console.log(error.toString())
  this.emit('end')
}

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .on('error', swallowError)
    .pipe(gulp.dest('app/css'))
});

gulp.task('compile-css', function () {
  return gulp.src('app/css/**/*.css')
    .pipe(concatCss('bundle.css'))
    .on('error', swallowError)
    .pipe(gulp.dest('app/cssBundle/'));
});

gulp.task('watch', function(){
  gulp.start('sass');
  gulp.start('compile-css');
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  gulp.watch('app/css/**/*.css', ['compile-css']); 
})