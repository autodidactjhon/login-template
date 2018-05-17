module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		sass:	{
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'assets/css/app.css': 'src/sass/app.scss'
				}
			}
		},

		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'assets/css',
					src: ['*.css', '!.min.css'],
					dest: 'assets/css',
					ext: '.min.css'
				}]
			}
		},

		uglify: {
			options: {
				manage: false
			},
			target: {
				files: [{
					'assets/js/app.min.js': 'src/js/app.js'
				}]
			}
		},

		watch: {
			js: {
				files: ['src/**/*.js'],
				tasks: ['uglify']
			},
			css: {
				files: 'src/**/*.scss',
				tasks: ['sass', 'cssmin']
			},
		},

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'cssmin', 'uglify']);
	grunt.registerTask('dev', ['watch']);


};