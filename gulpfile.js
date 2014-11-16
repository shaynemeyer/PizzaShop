/**
 * Created by shayne on 11/15/14.
 */
var gulp = require("gulp");
gulp.task("default", function(){
    //console.log("Hello Gulp");
    return gulp.src("./public/js/**/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"));
});