module.exports = function(grunt) {
  grunt.initConfig({     

    pkg: grunt.file.readJSON('package.json'),

    banner: '/*!\n' +
              ' * Stashy v<%= pkg.version %> by @yperezva\n' +
              ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              ' * Licensed under <%= _.pluck(pkg.licenses, "url").join(", ") %>\n' +
              ' */\n',

    jqueryCheck: 'if (typeof jQuery === "undefined") { throw new Error("Stashy requires jQuery") }\n\n', 

    clean: {
      dist: ['dist']
    },

    concat: {
      options: {
        banner: '<%= banner %><%= jqueryCheck %>',
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
        dest: 'dist/js/<%= pkg.name %>.js'
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
    }   

  });
 
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  // Clean
  grunt.registerTask('cleandir', ['clean']);  

  // Dist
  grunt.registerTask('distribute', ['concat','less']);  
    
  // Copy others
  grunt.registerTask('copyfiles', ['copy']);

  // CSS and JS dist
  grunt.registerTask('uglifyfiles', ['uglify']);
    
  // Watch
  grunt.registerTask('default', ['cleandir','distribute','copyfiles','uglifyfiles']);
};