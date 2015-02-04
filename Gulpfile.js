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


gulp.task('riot', function () {
  return gulp
  .src('./public/js/*.tag')
  .pipe(watch('./public/js/*.tag'))
  .pipe(
    riot({
      compact: true,
      template: 'jade'
    })
  )
  .pipe(
    gulp.dest('./public/js/')
  );
});


gulp.task('serve', serve('public'));


gulp.task('default', ['riot', 'serve']);