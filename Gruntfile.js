module.exports = function (grunt) {
  grunt.initConfig ({     

        pkg: grunt.file.readJSON('package.json'),
    
        banner: '/*!\n' +
                  ' * Stashy v<%= pkg.version %> by @yperezva\n' +
                  ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                  ' * Licensed under <%= _.pluck(pkg.licenses, "url").join(", ") %>\n' +
                  ' */\n',
    
        clean: {
          dist: ['dist']
        },
    
        concat: {
          options: {
            stripBanners: false
          },
          stashyDist: {
            src: [
                'src/Stashy.Events.js',
                'src/Stashy.Utils.js',
                'src/Stashy.Modernizr.js',
                'src/Stashy.OffCanvas.js',
                'src/Stashy.Flyout.js',
                'src/Stashy.Toggle.js',
                'src/Stashy.FocalPoint.js',
                'src/Stashy.Loader.js',
                'src/Stashy.ShowMeMore.js',
                'src/Stashy.Slider.js',
                'src/Stashy.Refresh.js',
                'src/Stashy.ElasticVideo.js',
                'src/Stashy.ElasticText.js',
                'src/Stashy.Table.js',
                'src/Stashy.Notify.js'
            ],
            dest : 'dist/js/Stashy.js'
          }
        }, 
    
        copy: {
          stashyDeps: {
            expand: true,
            src: ["src/jquery.js","src/jquery.hammer.js"],
            dest: 'dist/js/',
            flatten: true
          },
          images: {
            expand: true,
            src: ["less/images/*"],
            dest: 'dist/css/images',
            flatten: true
          },
          siteJs: {
            expand: true,
            src: ["dist/js/Stashy.js"],
            dest: 'docs/public/Scripts/',
            flatten: true
          },
          siteCSS: {
            expand: true,
            src: ["dist/css/Stashy.css"],
            dest: 'docs/public/Content',
            flatten: true
          }
        },      
    
        less: {
          production: {
            options: {
              compress: true,
              yuicompress: true,
              optimization: 2
            },
            files: {
              // target.css file: source.less file
              "dist/css/<%= pkg.name %>.min.css": "less/Stashy.less"
            }
          },        
          development: {
            files: {
              // target.css file: source.less file
              "dist/css/<%= pkg.name %>.css": "less/Stashy.less"
            }
          }        
        },
    
        uglify: {
            stashyDeps: {
              files: {
                'dist/js/jquery.min.js': 'dist/js/jquery.js',
                'dist/js/jquery.hammer.min.js': 'dist/js/jquery.hammer.js'             
              }
            },
            stashy: {
              files: {
                'dist/js/<%= pkg.name %>.min.js': 'dist/js/Stashy.js'
              }
            },
            site : {
              files: {
                'docs/public/Scripts/vendor.js': [
                    'docs/public/Scripts/jquery.js',
                    'docs/public/Scripts/knockout.js',
                    'docs/public/Scripts/sammy.js',
                    'docs/public/Scripts/Stashy.js',
                    'docs/public/Scripts/jquery.hammer.js',
                    'docs/public/Scripts/analytics.min.js',
                    'docs/public/Scripts/bootstrap.min.js'
                ]
              }        
            }
        },
    
        watch: {
          styles: {
            // Which files to watch (all .less files recursively in the less directory)
            files: ['less/*.less'],
            tasks: ['less:development', 'copy:siteCSS'],
            options: {
              nospawn: true
            }
          },
          scripts: {
            // Which files to watch (all .less files recursively in the less directory)
            files: ['src/Stashy.*.js'],
            tasks: ['concat', 'copy:siteJs'],
            options: {
              nospawn: true
            }
          }        
        },
        
        cssmin : {
            site: {
                files : {
                    'docs/public/Content/styles.css': [
                    'docs/public/Content/bootstrap.css', 
                    'docs/public/Content/bootstrap-responsive.css', 
                    'docs/public/Content/durandal.css', 
                    'docs/public/Content/font-awesome.css',
                    'docs/public/Content/font-awesome-ie7.css', 
                    'docs/public/Content/prettify.css', 
                    'docs/public/Content/ie10mobile.css', 
                    'docs/public/Scripts/durandal/css/durandal.css', 
                    'docs/public/Content/Stashy.css', 
                    'docs/public/Content/app.css' 
                    ]
                }
            }
        },
            
        usebanner: {
         stashyCSS: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>',
                    linebreak: true
                },
                files: {
                    src: [ 'dist/css/Stashy.css', 'dist/css/Stashy.min.css', 'dist/js/Stashy.js', 'dist/js/Stashy.min.js'   ]
                }
            }
        }              

  });
 
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-banner');
  
  // Clean
  grunt.registerTask('cleandir', ['clean']);  

  // Dist
  grunt.registerTask('distribute', ['concat','less']);  
    
  // Copy others
  grunt.registerTask('copyfiles', ['copy']);

  // CSS and JS dist
  grunt.registerTask('uglifyfiles', ['uglify:stashyDeps','uglify:stashy']);
  
  // Add banners
  grunt.registerTask('banners', ['usebanner']);
                                 
  // Site optimizer
  grunt.registerTask('optimizesiteassets', ['uglify:site','cssmin:site']);    
    
  // Watch
  grunt.registerTask('default', ['cleandir','distribute','copyfiles','uglifyfiles', 'banners', 'optimizesiteassets']);

};