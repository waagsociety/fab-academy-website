var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    inject = require('gulp-inject'),
    stylus = require('gulp-stylus'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    jade = require('gulp-jade'),
    uglify = require('gulp-uglify'),
    changed = require('gulp-changed'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync');

gulp.task('css', function () {
    gulp.src('src/stylus/main.styl')
        .pipe(stylus({compress: true, paths: ['src/stylus']}))
        .pipe(autoprefixer())
        .pipe(minifyCSS())
        .pipe(gulp.dest('build'))
				.pipe(browserSync.reload({stream:true}))
});

gulp.task('html', function() {
  gulp.src('src/jade/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('build'))
		.pipe(browserSync.reload({stream:true}))
});

gulp.task('htmlmodules', function() {
  gulp.src('src/jade/modules/*.jade')
    .pipe(jade())
		.pipe(browserSync.reload({stream:true}))
});

gulp.task('js', function() {
  gulp.src([
    'bower_components/jquery/dist/jquery.js'
  ])
    // concat pulls all our files together before minifying them
    .pipe( concat('output.min.js') )
    .pipe(uglify())
    .pipe(gulp.dest('build/public/js'))
});


gulp.task('scripts', function(){ 
    var target = gulp.src('src/jade/header.jade');
    var sources = gulp.src(['src/scripts/*.js'], {read: false});
    var exportString = 'public/js';
    return target.pipe(inject(sources, {
                ignorePath: 'src/scripts',
                addPrefix: exportString,
                addRootSlash: true
            }))
    .pipe(gulp.dest('src/jade/'))
		.pipe(browserSync.reload({stream:true}))
});



gulp.task('copy', function(){
  gulp.src('src/scripts/*.js')
    .pipe(gulp.dest('build/public/js'));
  gulp.src('src/images/*')
    .pipe(gulp.dest('build/public/images'));
});

gulp.task('jshint', function() {
  gulp.src('src/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function () {
   gulp.watch('src/stylus/**/*.styl', ['css']);
   gulp.watch('src/jade/*.jade', ['html']);
   gulp.watch('src/jade/modules/*.jade', ['html']);
   gulp.watch('src/scripts/*.js', ['html', 'scripts']);
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "build"
    }
  });
});

gulp.task('default', ['css', 'scripts', 'copy', 'html', 'htmlmodules', 'js']);
gulp.task('start', ['browser-sync', 'watch']);