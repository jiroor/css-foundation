import gulp from 'gulp'
import sass from 'gulp-sass'

gulp.task('sass', () => {
  gulp.src('./sass/foundation.sass')
    .pipe(sass())
    .pipe(gulp.dest('./dst'))
})
