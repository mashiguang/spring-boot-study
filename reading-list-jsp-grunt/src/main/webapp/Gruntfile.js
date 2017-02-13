
module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			all: ['manage/app/userClass/*controller.js'],
			options: {
				asi: true,				// 是否允许自动分号补全, 如果是(true)，将不再检查缺失的分号
				'-W032': true,			// 是否忽略多余的分号的检查
				'-W117': true,			// 是否忽略未定义变量的检查
				'-W041': false,			// 允许用==比较数字
				undef: false,
				unused: false,
				devel: true,			// 允许使用alert, console
				loopfunc: true,			// 允许函数字义在循环中
				sub: true,				// 允许用下标访问对象属性
				eqnull: true,			// 允许用==来比较null
				laxcomma: true,			// 允许逗号开头的编码样式
				expr: true, 			// 允许应该出现赋值或函数调用的地方使用表达式
				globals: {angular: false, ctx: false, '$': false}
			}
		},
		uglify: {
			options: {
				mangle: false,
				compress:{
					drop_console: true
				}
			},
			dynamic_mappings: {
				files:[{
					expand: true,
					cwd: 'manage',
					src: ['**/*.js'],
					dest: 'dest/manage/',
				}]
			}
		},
		concat: {
			options: {
				// Replace all 'use strict' statements in the code with a single one at the top 
				banner: "'use strict';\n",
				process: function(src, filepath) {
				  return src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
				},
			},
			app: {
				src:[
					'dest/manage/app/app.js'
					],
				dest: 'dest/app.js'
			},
			modules: {
				src:[
					'dest/manage/**/module.js'
					],
				dest: 'dest/modules.js'
			},
			services: {
				src:[
					'dest/manage/**/services.js',
					'dest/manage/**/*service.js'
					],
				dest: 'dest/services.js'	
			},
			controllers: {
				src:[
					'dest/manage/**/*controller.js'
					],
				dest: 'dest/controllers.js'		
			},
			directives: {
				src:[
					'dest/manage/**/directives.js',
					'dest/manage/**/*directive.js',
					],
				dest: 'dest/directives.js'	
			},
			allInOne: {
				src:['dest/app.js',
				'dest/modules.js',
				'dest/services.js',
				'dest/controllers.js',
				'dest/directives.js'],
				dest: 'js/nd2015.min.js'
			}
		},
		clean: ['dest'],
		'cache-busting': {
			js: {
				replace: ['jsp/menu.jsp'],
				replacement: 'nd2015.min.js',
				file: 'js/nd2015.min.js',
				get_param: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-cache-busting');

	grunt.registerTask('default', ['uglify','concat','clean','cache-busting']);
	//grunt.registerTask('default', ['uglify','concat','cache-busting']);

}