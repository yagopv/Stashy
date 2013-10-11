exports.config = function(weyland) {
    weyland.build('main')
        .task.jshint({
            include:'docs/public/App/**/*.js'
        })
        .task.uglifyjs({
            include:['docs/public/App/**/*.js', 'docs/public/Scripts/durandal/**/*.js']
        })
        .task.rjs({
            include:['docs/public/App/**/*.{js,html}', 'docs/public/Scripts/durandal/**/*.js'],
            loaderPluginExtensionMaps:{
                '.html':'text'
            },
            rjs:{
                name:'../Scripts/require/almond-custom', //to deploy with require.js, use the build's name here instead
                insertRequire:['main'], //not needed for require
                baseUrl : 'docs/public/App',
                wrap:true, //not needed for require
                paths : {
                    'text': '../Scripts/require/text',
                    'durandal':'../Scripts/durandal/js',
                    'plugins' : '../Scripts/durandal/js/plugins',
                    'transitions' : '../Scripts/durandal/js/transitions',
                    'knockout': '../Scripts/knockout',
                    'bootstrap': '../Scripts/bootstrap',
                    'jquery': '../Scripts/jquery'
                },
                inlineText: true,
                optimize : 'none',
                pragmas: {
                    build: true
                },
                stubModules : ['text'],
                keepBuildDir: true,
                out:'docs/public/App/main-built.js'
            }
        });
}