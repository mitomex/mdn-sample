var gulp = require('gulp');
var stylus = require('gulp-stylus');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');

var AUTOPREFIXER_BROWSERS = [
    'ie >= 9',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4'
];

// Copy all static images
gulp.task('images', function() {
    return gulp.src('gulp/images/**/*')
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('dist/images/'));
});

// Compile and automatically prefix stylesheets
gulp.task('stylus', function() {
    return gulp.src('gulp/css/**/*.styl')
        .pipe(stylus())
        .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('watch', function() {
    gulp.watch(['gulp/images/**/*'], ['images']);
    gulp.watch(['gulp/css/**/*.styl'], ['stylus']);
});

gulp.task('default', ['watch', 'images','stylus']);

