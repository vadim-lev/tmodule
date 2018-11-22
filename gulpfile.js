'use strict';

const gulp = require('gulp');
const del = require('del');

//import run from "gulp-run-command";

var exec = require('gulp-exec');

//var browserify =  require ('browserify');

//var babelify = require('babelify');

//var  vueify  = require ( 'vueify' );

//var  source  = require ( 'get-source' );

gulp.task('assets', ['clean'], function(){
	return gulp.src('src/**/**')
		.pipe(gulp.dest('public/src'));
});


gulp.task('cons2',['assets'], function() {
	return gulp.src('.')
		.pipe(exec('npm install ./client_modules --prefix ./client_modules'));
		// .pipe(exec('npm install ./client_modules '));
})



gulp.task('copy',['copy1'], function() {
	// return gulp.src(['index.html','style.css','vue.min.js','main.js'])
	// 	.pipe(gulp.dest('public'));
	return gulp.src(['./client_modules/node_modules/**/**'])
		.pipe(gulp.dest('./public/modules'));
})

gulp.task('copy1',['cons2'], function() {
	return gulp.src(['index.html','style.css','vue.min.js','main.js'])
 		.pipe(gulp.dest('public'));
})

gulp.task('clean', function(){
	return del('public');
});

gulp.task('build', ['copy']);