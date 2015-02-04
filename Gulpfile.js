/*
 * FeedMe
 * 
 *
 * Copyright (c) 2015 
 * Licensed under the MIT license.
 */

/*jshint node:true, eqnull:true, laxcomma:true, undef:true, indent:2, camelcase:false, unused:true */
'use strict';

var gulp = require('gulp');
var riot = require('gulp-riot');
var serve = require('gulp-serve');
var watch = require('gulp-watch');
var jade = require('gulp-jade');


gulp.task('riot', function () {
  return gulp
  .src(__dirname + '/public/js/*.tag')
  .pipe(watch(__dirname + '/public/js/*.tag'))
  .pipe(
    riot({
      compact: false,
      template: 'jade'
    })
  )
  .pipe(
    gulp.dest(__dirname + '/public/js/')
  );
});

gulp.task('serve', serve('public'));

gulp.task('templates', function() { 
  gulp.src(__dirname + '/public/*.jade')
    .pipe(watch(__dirname + '/public/*.jade'))
    .pipe(jade({
      locals: {}
    }))
    .pipe(gulp.dest(__dirname + '/public/'));
});


gulp.task('default', ['riot', 'templates', 'serve']);