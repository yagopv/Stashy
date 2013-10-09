// Config require paths
requirejs.config({
    paths: {
        'text': 'durandal/amd/text',
        'lib' : 'lib',
    },
    shim : {
        'lib/prettify': {			
        }
    }
});

// Config application
define(['durandal/app', 'durandal/system', 'durandal/viewLocator'],
  function (app, system, viewLocator) {
    
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");
    
    app.title = 'Stashy, responsive components';
    app.start().then(function () {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();
        
        // set root to shell
        app.setRoot('viewmodels/shell','entrance');
    });
});