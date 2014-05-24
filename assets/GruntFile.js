/*!
 *  seriousbuns GruntFile
 *
 *  Grunt Module
 */
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'source/css/style.css': 'source/scss/style.scss'
				}
			}
		},
		watch: {
			sass: {
				files: 'source/scss/*.scss',
				tasks: ['sass']
			}
		},
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['sass']);
};






