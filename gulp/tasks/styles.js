var gulp = require("gulp"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssvars = require("postcss-simple-vars"),
    nested = require("postcss-nested"),
    cssimport = require("postcss-import"),
    mixins = require("postcss-mixins");

gulp.task("styles", function(){
    
    //pipe() --> copy content from src (styles.css) to dest (styles folder)
    // return --> because gulp.src() is asynchronous function
    return gulp.src("./app/assets/styles/styles.css")
        .pipe(postcss([cssimport, mixins, cssvars, nested, autoprefixer]))
        .on("error", function(errorInfo){
            console.log(errorInfo.toString());
            this.emit("end");
        })
        .pipe(gulp.dest("./app/temp/styles"));
    
});
