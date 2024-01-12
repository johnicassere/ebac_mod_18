module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    './dev/style/style.css': './src/style/main.less',
                }
            },
            production:{
                option:{
                    compress: true
                },
                files:{
                    './dist/style/main.min.css':'./src/style/main.less'
                }
            }
        },
       
    })
    

    grunt.loadNpmTasks('grunt-contrib-less');
   
    grunt.registerTask('default', ['less:development'])
    grunt.registerTask('build', ['less:production'])
}