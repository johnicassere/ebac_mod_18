module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    './dev/style/main.css': './src/style/main.less',
                }
            },
            production:{
                option:{
                    compress: true
                },
                files:{
                    './dist/style/main.min.css':'./src/style/main.less',
                }
            }
        },

        watch:{
            less:{
                files: ['src/style/**/*.less'],
                tasks: ['less:development']
            },
            html:{
                files:['./src/index.html'],
                tasks:['replace:dev']
            }
        },
        replace:{
            dev:{
                option:{
                    patterns:[
                        {
                        match:'ENDERECO_DO_CSS',
                        replacement:'./dev/style/main.css'
                    },
                    {
                        match:'ENDERECO_DO_JS',
                        replacement:'./src/scripts/main.js'
                    }
                ]
                },
                files:[
                    {
                    expand: true,
                    flatten:true,
                    src: ['prebuild/index.html'],
                    dest: 'dev/'
                }
            ]
            },
            dist:{
                option:{
                    patterns:[
                        {
                        match:'ENDERECO_DO_CSS',
                        replacement:'./dist/style/main.min.css'
                    },
                    {
                        match:'ENDERECO_DO_JS',
                        replacement:'./dist/scripts/main.min.js'
                    }
                ]
                },
                files:[
                    {
                    expand: true,
                    flatten:true,
                    src: ['src/index.html'],
                    dest: './dist'
                }
            ]
            }
        },
        htmlmin:{
            dist:{
                option:{
                    removeComments: true,
                    collapseWhitespace:true

                },
                files:{
                    'prebuild/index.html':'./src/index.html',
                }
            }
        },
        clean:['prebuild'],
        uglify:{
            target:{
                files:{
                    './dist/scripts/main.min.js':'./src/scripts/main.js'
                }
            }
        },
       
       
    })
    

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    

   
    grunt.registerTask('default', ['watch'])
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist','clean', 'uglify'])
}
