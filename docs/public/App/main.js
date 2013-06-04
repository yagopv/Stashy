// Config require paths
requirejs.config({
    paths: {
        'text': 'durandal/amd/text',
        'stashy' : 'stashy',
        'lib' : 'lib',
    },
    shim : {
        'stashy/Stashy.OffCanvas': {
			deps: ['stashy/Stashy.Events'],
            exports: 'Stashy.OffCanvas'
        },
        'stashy/Stashy.Flyout': {
            exports: 'Stashy.Flyout'
        },
        'stashy/Stashy.Toggle': {
            exports: 'Stashy.Toggle'
        },
        'stashy/Stashy.Utils': {
            exports: 'Stashy.Utils'
        },
        'stashy/Stashy.Loader': {
            exports: 'Stashy.Loader'
        },
        'stashy/Stashy.ShowMeMore': {
            exports: 'Stashy.ShowMeMore'
        },
        'stashy/Stashy.FocalPoint': {
            exports: 'Stashy.FocalPoint'
        },
        'stashy/Stashy.Slider': {
            exports: 'Stashy.Slider'
        },
        'stashy/Stashy.Modernizr': {
            exports: 'Modernizr'
        },        
        'stashy/Stashy.Events': {			
        },
        'lib/prettify': {			
        }
    }
});

// Config application
define(['durandal/app', 'durandal/system', 'durandal/viewLocator', 'stashy/Stashy.Modernizr'],
  function (app, system, viewLocator, modernizr) {
    
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");
    
    app.title = 'Stashy, responsive components';
    app.start().then(function () {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //app.adaptToDevice();
        
        // set root to shell
        app.setRoot('viewmodels/shell');
    });
});