var browserify = require('gulp-browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var config = require('../../config');

module.exports = function() {
    return gulp.src('./app/scripts/main.js')
            .pipe(browserify({
              debug : config.get('debug')
            }))
        .pipe(gulp.dest('./build/scripts/'))
};
