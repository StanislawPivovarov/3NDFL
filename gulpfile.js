const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const cssmin = require("gulp-cssmin");
const tar = require("gulp-tar");
const jsmin = require('gulp-jsmin');

gulp.task("css-min", (cb) => {
  gulp.src("./styles/*.css").pipe(cssmin()).pipe(gulp.dest("dist/styles"));
  cb();
});

gulp.task("html", (cb) => {
  gulp.src("index.html").pipe(gulp.dest("dist"));
  cb();
});
gulp.task("imgs", (cb) => {
  gulp.src("assets/images/**").pipe(gulp.dest("dist/assets/images"));
  cb();
});
gulp.task("fonts", (cb) => {
  gulp.src("fonts/**").pipe(gulp.dest("dist/assets/fonts"));
  cb();
});
gulp.task('js-min-script', (cb) => {
  gulp.src('./script.js')
  .pipe(jsmin())
  .pipe(gulp.dest('dist'))
  cb()
});
gulp.task('js-min-map', (cb) => {
  gulp.src('./map.js')
  .pipe(jsmin())
  .pipe(gulp.dest('dist'))
  cb()
})
gulp.task('server', (cb) =>{
    browserSync.init({
      server:{
        baseDir: "./dist"
      }
    });
  });

  gulp.task('build', gulp.series('css-min', 'html', 'imgs', 'fonts', 'js-min-map', 'js-min-script'))