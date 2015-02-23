var gulp        = require('gulp');
var browserSync = require('browser-sync');


// --- WATCH -----------------------------------------------------------------
gulp.task('watch', function() {
  gulp.watch('**/*.*', ['browser-sync']);
});


// --- BROWSER SYNC ----------------------------------------------------------
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});
gulp.task('browser-sync-reload', function () {
    browserSync.reload();
});


// --- DEFAULT ---------------------------------------------------------------
gulp.task('default', ['browser-sync'], function () {
    gulp.watch("*.*", ['browser-sync-reload']);
});
