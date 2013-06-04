var compressor = require('node-minify');


exports.optimizeProjectAssets = function() {
    // Minify & combine project assets
    
    //CSS
    new compressor.minify({
        type: 'yui',
        fileIn: [
            'css/Stashy.OffCanvas.css',
            'css/Stashy.Flyout.css',
            'css/Stashy.Toggle.css',
            'css/Stashy.FocalPoint.css',
            'css/Stashy.Loader.css',
            'css/Stashy.Sticky.css',
            'css/Stashy.Slider.css',
            'css/Stashy.Theme.css'
        ],
        fileOut: 'dist/css/Stashy.min.css',
        callback: function(err){
            console.log('Stashy - CSS');
            if (err != null) console.log(err);            
        }
    });
    
    //JS
    new compressor.minify({
        type: 'gcc',
        fileIn: [
            'src/Stashy.Events.js',
            'src/Stashy.Utils.js',
            'src/Stashy.Modernizr.js',
            'src/Stashy.OffCanvas.js',
            'src/Stashy.Flyout.js',
            'src/Stashy.Toggle.js',
            'src/Stashy.FocalPoint.js',
            'src/Stashy.Loader.js',
            'src/Stashy.ShowMeMore.js',
            'src/Stashy.Slider.js'
        ],
        fileOut: 'dist/js/Stashy.min.js',
        callback: function(err){
            console.log('Stashy - JS');
            if (err != null) console.log(err);            
        }
    });
    
    new compressor.minify({
        type: 'gcc',
        fileIn: [
            'src/jquery.hammer.js'
        ],
        fileOut: 'dist/js/jquery.hammer.min.js',
        callback: function(err){
            console.log('Hammer - JS');
            if (err != null) console.log(err);            
        }
    });
    
    new compressor.minify({
        type: 'gcc',
        fileIn: [
            'src/jquery.js'
        ],
        fileOut: 'dist/js/jquery.min.js',
        callback: function(err){
            console.log('jQuery - JS');
            if (err != null) console.log(err);            
        }
    });    
}

exports.optimizeDocsAssets = function() {
    // Minify & combine production assets
        
    //CSS
    new compressor.minify({
        type: 'yui',
        fileIn: [
            'docs/public/Content/Stashy.OffCanvas.css',
            'docs/public/Content/Stashy.Flyout.css',
            'docs/public/Content/Stashy.Toggle.css',
            'docs/public/Content/Stashy.FocalPoint.css',
            'docs/public/Content/Stashy.Loader.css',
            'docs/public/Content/Stashy.Sticky.css',
            'docs/public/Content/Stashy.Slider.css',
            'docs/public/Content/bootstrap.css',
            'docs/public/Content/bootstrap-responsive.css',
            'docs/public/Content/font-awesome.css',
            'docs/public/Content/font-awesome-ie7.css',            
            'docs/public/Content/prettify.css',            
            'docs/public/Content/durandal.css',            
            'docs/public/Content/app.css',            
            'docs/public/Content/Stashy.Theme.css'
        ],
        fileOut: 'docs/public/Content/styles.css',
        callback: function(err){
            console.log('Docs - CSS');
            if (err != null) console.log(err);            
        }
    });
        
    //JS      

    new compressor.minify({
        type: 'gcc',
        fileIn: [
            'docs/public/Scripts/jquery.js',
            'docs/public/Scripts/jquery.hammer.js',
            'docs/public/Scripts/knockout.js',
            'docs/public/Scripts/sammy.js'
        ],
        fileOut: 'docs/public/Scripts/vendor.js',
        callback: function(err){
            console.log('DOCS - JS');
            if (err != null) console.log(err);            
        }
    });
}