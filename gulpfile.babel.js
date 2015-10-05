import gulp from 'gulp'
import sass from 'gulp-sass'

gulp.task('sass', () => {
  gulp.src('index.sass')
    .pipe(sass())
    .pipe(gulp.dest('./dst'))
})
