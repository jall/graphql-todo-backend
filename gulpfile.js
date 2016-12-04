var gulp = require('gulp');
var babel = require('gulp-babel');
var flow = require('gulp-flowtype');

gulp.task('build', () => {
    return gulp.src('src/**/*.js')
        .pipe(flow())
        .pipe(babel())
        .pipe(gulp.dest('dist'));
})

gulp.task('watch', () => {
    return gulp.watch('src/**/*.js', ['build']);
})

gulp.task('default', ['build', 'watch']);
