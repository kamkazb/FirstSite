"Use strict";

const gulp = require("gulp");
const debug = require('gulp-debug');
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const del = require("del");
const rename = require("gulp-rename");
const server = require("browser-sync").create();


gulp.task("css", function () {
return gulp
.src("markup/source/sass/style.scss")
.pipe(plumber())
.pipe(sourcemap.init())
.pipe(sass())
.pipe(rename("style.css"))
.pipe(gulp.dest("markup/build/css"))
.pipe(server.stream());
});

gulp.task("server", function () {
server.init({
server: "markup/build/",
notify: false,
open: true,
cors: true,
ui: false,
});

gulp.watch("markup/source/sass/**/*.scss", gulp.series("css"));
gulp.watch("markup/source/*.html", gulp.series("html", "refresh"));
});

gulp.task("clean", function () {
return del("markup/build");
});

gulp.task("refresh", function (done) {
server.reload();
done();
});

gulp.task("copy", function () {
return gulp
.src(['./markup/source/fonts/**/*.{eot,svg,ttf,woff,woff2}','./markup/source/img/**.{jpg,png,svg}'],
{
base:"markup/source"
}
)
.pipe(gulp.dest('./markup/build/'));
});

gulp.task("html", function () {
return gulp
.src("markup/source/*.html")
.pipe(gulp.dest("markup/build"));
});

gulp.task(
"build",
gulp.series("clean", "copy", "css", "html",)
);

gulp.task("start", gulp.series("build", "server"));