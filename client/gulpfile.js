const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('default', ['css'], () => {
  gulp.watch(["./src/sass/*/**.scss", "./src/sass/**.scss"], ['css'])
})

gulp.task('css', () => {
  gulp.src("src/sass/bundle.scss")
  .pipe(sass({outputStyle: 'compressed'}))
  .on('error', sass.logError)
  .pipe(autoprefixer({browsers: ['last 2 versions']}))
  .pipe(gulp.dest("public/css"))
})

gulp.task('prodcss', () => {
  gulp.src("src/sass/bundle.scss")
  .pipe(sass({outputStyle: 'compressed'}))
  .on('error', sass.logError)
  .pipe(autoprefixer({browsers: ['last 2 versions']}))
  .pipe(gulp.dest("../build/css"))
})
