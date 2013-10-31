// Config require paths
requirejs.config({
    baseUrl : '../App',
    paths: {
        'text': '../Scripts/require/text',
        'durandal': '../Scripts/durandal/js',
        'plugins': '../Scripts/durandal/js/plugins',
        'transitions': '../Scripts/durandal/js/transitions',
        'lib' : 'lib'
    },
    shim : {
        'lib/prettify': {			
        }
    }
});

define('jquery', function () { return jQuery; });
define('knockout', ko);

// Config application
define(['durandal/app', 'durandal/system', 'durandal/viewLocator'],
  function (app, system, viewLocator) {
    
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");
    
    app.title = 'Stashy, responsive components';
      
    //specify which plugins to install and their configuration
    app.configurePlugins({
        router: true,
        dialog: true,
        widget: {
            kinds: ['expander']
        }
    });
      
    app.start().then(function () {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();
        
        // set root to shell
        app.setRoot('viewmodels/shell', 'entrance');
    });
});