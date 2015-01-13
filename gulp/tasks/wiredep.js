var wiredep = require('wiredep').stream;

gulp.task('bower', function () {
    gulp.src('./build/index.html')
    .pipe(wiredep({
    }))
    .pipe(gulp.dest('./build/index.html'));
});
