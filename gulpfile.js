var gulp = require('gulp');
var server = require('gulp-webserver');
var sass = require('gulp-sass');

gulp.task('serve', function() {
    return gulp.src("./src/index.html").pipe(gulp.dest("./dist/"))
});

gulp.task('sass', function() {
    return gulp.src("./src/sass/main.scss").pipe(sass()).pipe(gulp.dest("./dist/"))
});

gulp.task('default', function() {
    gulp.watch(["./src/index.html"],["serve"]);
    gulp.watch(["./src/sass/main.scss"],["sass"])
    
    gulp.src("./dist/")
        .pipe(server({
            port: 9002,
            livereload: true,
            directoryListing: false,
            open: true
        }));
});
