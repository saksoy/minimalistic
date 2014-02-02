module.exports = function(grunt) {
	grunt.initConfig({
		uglify: {
			learnstack: {
				files: [{
					expand: true,
					cwd: 'src/js',
					src: '**/*.js',
					dest: 'dist/js'
				}]
			}
		},
		compass: {
			learnstack: {
				options: {
					sassDir: 'src/sass',
					cssDir: 'dist/css',
					outputStyle: 'compressed'
				}
			}
		},
		imagemin: {
			learnstack: {
				files: [{
					expand: true,
					cwd: 'src/img',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dist/img'
				}]
			}
		},
		copy: {
			learnstack: {
				files: [{
					expand: true, 
					cwd: 'src/fonts/',
					src: ['**'],
					dest: 'dist/fonts/',
					filter: 'isFile'
				}]
			}
		},
		watch: {
			css: {
				files: 'src/**/*.scss',
				tasks: ['compass']
			},
			js: {
				files: 'src/**/*.js',
				tasks: ['uglify']
			},
			img: {
				files: 'src/img/*',
				tasks: ['imagemin']
			},
			fonts: {
				files: 'src/fonts/*',
				tasks: ['copy']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('depoly', ['uglify', 'compass', 'imagemin', 'copy']);
	grunt.registerTask('develop', ['watch']);
}
