define(['plugins/router'], function (router) {
    
    return {
        attached : function() {
            setTimeout(function() {
                $("footer").css("display","block");
            },1000);            
        },
        scrollup : function() {
             Stashy.Utils.ScrollTo("body");
        },
        router: router,
        activate: function () {
            router.map([
                { route: 'home', moduleId: 'viewmodels/home/home', title: 'Home', nav: true, settings : { activemenu : 'home' } },
                { route: 'home/:page', moduleId: 'viewmodels/home/home', title: 'Home', settings : { activemenu : 'home' } },                
                { route: 'about', moduleId: 'viewmodels/about/about', title: 'About', nav: true },
                { route: 'offcanvas', moduleId: 'viewmodels/offcanvas/offcanvas', title: 'OffCanvas', nav: false, settings : { activemenu : 'offcanvas' } },
                { route: 'offcanvas/:page', moduleId: 'viewmodels/offcanvas/offcanvas', title: 'OffCanvas', nav: false, settings : { activemenu : 'offcanvas' } },
                { route: 'flyout', moduleId: 'viewmodels/flyout/flyout', title: 'Flyout', nav: false, settings : { activemenu : 'flyout' } },
                { route: 'flyout/:page', moduleId: 'viewmodels/flyout/flyout', title: 'Flyout', nav: false , settings : { activemenu : 'flyout' }},
                { route: 'toggle', moduleId: 'viewmodels/toggle/toggle', title: 'Toggle', nav: false , settings : { activemenu : 'toggle' }},
                { route: 'toggle/:page', moduleId: 'viewmodels/toggle/toggle', title: 'Toggle', nav: false , settings : { activemenu : 'toggle' }},
                { route: 'showmemore', moduleId: 'viewmodels/showmemore/showmemore', title: 'ShowMeMore', nav: false , settings : { activemenu : 'showmemore' }},
                { route: 'showmemore/:page', moduleId: 'viewmodels/showmemore/showmemore', title: 'ShowMeMore', nav: false , settings : { activemenu : 'showmemore' }},
                { route: 'focalpoint', moduleId: 'viewmodels/focalpoint/focalpoint', title: 'FocalPoint', nav: false , settings : { activemenu : 'focalpoint' }},
                { route: 'focalpoint/:page', moduleId: 'viewmodels/focalpoint/focalpoint', title: 'FocalPoint', nav: false , settings : { activemenu : 'focalpoint' }},                  
                { route: 'loader', moduleId: 'viewmodels/loader/loader', title: 'Loader', nav: false , settings : { activemenu : 'loader' }},
                { route: 'loader/:page', moduleId: 'viewmodels/loader/loader', title: 'Loader', nav: false , settings : { activemenu : 'loader' }},
                { route: 'slider', moduleId: 'viewmodels/slider/slider', title: 'Slider', nav: false , settings : { activemenu : 'slider' }},
                { route: 'slider/:page', moduleId: 'viewmodels/slider/slider', title: 'Slider', nav: false , settings : { activemenu : 'slider' }},                
                { route: 'sticky', moduleId: 'viewmodels/sticky/sticky', title: 'Sticky', nav: false , settings : { activemenu : 'sticky' }},
                { route: 'sticky/:page', moduleId: 'viewmodels/sticky/sticky', title: 'Sticky', nav: false , settings : { activemenu : 'sticky' }},                
                { route: 'refresh', moduleId: 'viewmodels/refresh/refresh', title: 'Refresh', nav: false , settings : { activemenu : 'refresh' }},
                { route: 'refresh/:page', moduleId: 'viewmodels/refresh/refresh', title: 'Refresh', nav: false , settings : { activemenu : 'refresh' }},
                { route: 'elasticvideo', moduleId: 'viewmodels/elasticvideo/elasticvideo', title: 'ElasticVideo', nav: false , settings : { activemenu : 'elasticvideo' }},
                { route: 'elasticvideo/:page', moduleId: 'viewmodels/elasticvideo/elasticvideo', title: 'ElasticVideo', nav: false , settings : { activemenu : 'elasticvideo' }},
                { route: 'elastictext', moduleId: 'viewmodels/elastictext/elastictext', title: 'ElasticText', nav: false , settings : { activemenu : 'elastictext' }},
                { route: 'elastictext/:page', moduleId: 'viewmodels/elastictext/elastictext', title: 'ElasticText', nav: false , settings : { activemenu : 'elastictext' }},
                { route: 'list', moduleId: 'viewmodels/list/list', title: 'List', nav: false , settings : { activemenu : 'list' }},
                { route: 'list/:page', moduleId: 'viewmodels/list/list', title: 'List', nav: false , settings : { activemenu : 'list' }},
                { route: 'table', moduleId: 'viewmodels/table/table', title: 'Table', nav: false , settings : { activemenu : 'table' }},
                { route: 'table/:page', moduleId: 'viewmodels/table/table', title: 'Table', nav: false , settings : { activemenu : 'table' }},
                { route: 'notify', moduleId: 'viewmodels/notify/notify', title: 'Notify', nav: false , settings : { activemenu : 'notify' }},
                { route: 'notify/:page', moduleId: 'viewmodels/notify/notify', title: 'Notify', nav: false , settings : { activemenu : 'notify' }},                                                                
                { url: 'error', moduleId: 'viewmodels/error/error', title: 'Error', nav: false }
            ]);
            
            router.buildNavigationModel();
            
            router.mapUnknownRoutes('error', 'not-found');

            return router.activate();
        }
    };
});