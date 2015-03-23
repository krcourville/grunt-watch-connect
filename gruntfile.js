module.exports = function(grunt){

	grunt.initConfig({

		connect : {

			dev: {
				options: {
					port: 8000,
					hostname: 'localhost',
					base: '.',
					livereload: true,
					open: true
				}
			}			
		},

		watch: {

				html: {
					options: {
						livereload: true,
						spawn: false
					},

					files: ['**/*.html']
				}
			}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('serve', ['connect:dev', 'watch:html']);

};