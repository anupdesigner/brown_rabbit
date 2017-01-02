var gulp = require('gulp');
var server = require('gulp-webserver');

gulp.task('anup', function() {
    console.log("Hello Anup")
});

gulp.task('default', function() {
  gulp.src("./src/")
        .pipe(server({
            port: 9002,
            livereload: false,
            directoryListing: false,
            open: true
        }));
});