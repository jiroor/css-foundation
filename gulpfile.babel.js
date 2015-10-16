import gulp from 'gulp'
import sass from 'gulp-sass'
import minify from 'gulp-minify-css'
import rename from 'gulp-rename'

gulp.task('sass', () => {
  gulp.src('./sass/foundation.sass')
    .pipe(sass())
    .pipe(gulp.dest('./dst'))
    .pipe(minify())
    .pipe(rename('foundation.min.css'))
    .pipe(gulp.dest('./dst'))
})
