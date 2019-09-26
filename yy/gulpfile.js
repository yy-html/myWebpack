//导入需要的插件
const gulp = require('gulp');		//gulp插件
const sass = require('gulp-sass');		//编译sass插件
const cssnano = require('gulp-cssnano');	//压缩css
const rename = require('gulp-rename');		//重命名
const uglify = require('gulp-uglify');		//压缩js
const concat = require('gulp-concat');		//合并js
const babel = require('gulp-babel');		//ES6模块
//创建并发布任务
gulp.task('test',function(){
	console.log('test');
});
//编译sass,重命名css,压缩css,放入新文件夹
gulp.task('sass',function(){
	gulp.src('src/scss/*.scss').pipe(sass().on('error',sass.logError)).pipe(rename({'suffix':'.min'})).pipe(cssnano()).pipe(gulp.dest('css'));//放到哪
})
//压缩js,重命名js,合并js
gulp.task('js',function(){
	gulp.src('js/*.js').pipe(uglify()).pipe(rename({'suffix':'.min'})).pipe(concat('all.min.js')).pipe(gulp.dest('js'));
})
//监听
gulp.task('watch',function(){
	gulp.watch('src/scss/*.scss',['sass']);//数组
})
//ES6模块转ES5
gulp.task('babel',function(){
	gulp.src('js/main.js').pipe(babel({
		'presets' : ['env']
	})).pipe(rename({'suffix':'.babel'})).pipe(gulp.dest('src/js'));
})