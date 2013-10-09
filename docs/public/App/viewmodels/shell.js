define(['durandal/plugins/router'], function (router) {
    
    return {
        viewAttached : function() {
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
                { url: 'home', moduleId: 'viewmodels/home/home', name: 'Home', visible: true, settings : { activemenu : 'home' } },
                { url: 'home/:page', moduleId: 'viewmodels/home/home', name: 'Home', settings : { activemenu : 'home' } },                
                { url: 'about', moduleId: 'viewmodels/about/about', name: 'About', visible: true },
                { url: 'offcanvas', moduleId: 'viewmodels/offcanvas/offcanvas', name: 'OffCanvas', visible: false, settings : { activemenu : 'offcanvas' } },
                { url: 'offcanvas/:page', moduleId: 'viewmodels/offcanvas/offcanvas', name: 'OffCanvas', visible: false, settings : { activemenu : 'offcanvas' } },
                { url: 'flyout', moduleId: 'viewmodels/flyout/flyout', name: 'Flyout', visible: false, settings : { activemenu : 'flyout' } },
                { url: 'flyout/:page', moduleId: 'viewmodels/flyout/flyout', name: 'Flyout', visible: false , settings : { activemenu : 'flyout' }},
                { url: 'toggle', moduleId: 'viewmodels/toggle/toggle', name: 'Toggle', visible: false , settings : { activemenu : 'toggle' }},
                { url: 'toggle/:page', moduleId: 'viewmodels/toggle/toggle', name: 'Toggle', visible: false , settings : { activemenu : 'toggle' }},
                { url: 'showmemore', moduleId: 'viewmodels/showmemore/showmemore', name: 'ShowMeMore', visible: false , settings : { activemenu : 'showmemore' }},
                { url: 'showmemore/:page', moduleId: 'viewmodels/showmemore/showmemore', name: 'ShowMeMore', visible: false , settings : { activemenu : 'showmemore' }},
                { url: 'focalpoint', moduleId: 'viewmodels/focalpoint/focalpoint', name: 'FocalPoint', visible: false , settings : { activemenu : 'focalpoint' }},
                { url: 'focalpoint/:page', moduleId: 'viewmodels/focalpoint/focalpoint', name: 'FocalPoint', visible: false , settings : { activemenu : 'focalpoint' }},                  
                { url: 'loader', moduleId: 'viewmodels/loader/loader', name: 'Loader', visible: false , settings : { activemenu : 'loader' }},
                { url: 'loader/:page', moduleId: 'viewmodels/loader/loader', name: 'Loader', visible: false , settings : { activemenu : 'loader' }},
                { url: 'slider', moduleId: 'viewmodels/slider/slider', name: 'Slider', visible: false , settings : { activemenu : 'slider' }},
                { url: 'slider/:page', moduleId: 'viewmodels/slider/slider', name: 'Slider', visible: false , settings : { activemenu : 'slider' }},                
                { url: 'sticky', moduleId: 'viewmodels/sticky/sticky', name: 'Sticky', visible: false , settings : { activemenu : 'sticky' }},
                { url: 'sticky/:page', moduleId: 'viewmodels/sticky/sticky', name: 'Sticky', visible: false , settings : { activemenu : 'sticky' }},                
                { url: 'refresh', moduleId: 'viewmodels/refresh/refresh', name: 'Refresh', visible: false , settings : { activemenu : 'refresh' }},
                { url: 'refresh/:page', moduleId: 'viewmodels/refresh/refresh', name: 'Refresh', visible: false , settings : { activemenu : 'refresh' }},
                { url: 'elasticvideo', moduleId: 'viewmodels/elasticvideo/elasticvideo', name: 'ElasticVideo', visible: false , settings : { activemenu : 'elasticvideo' }},
                { url: 'elasticvideo/:page', moduleId: 'viewmodels/elasticvideo/elasticvideo', name: 'ElasticVideo', visible: false , settings : { activemenu : 'elasticvideo' }},
                { url: 'elastictext', moduleId: 'viewmodels/elastictext/elastictext', name: 'ElasticText', visible: false , settings : { activemenu : 'elastictext' }},
                { url: 'elastictext/:page', moduleId: 'viewmodels/elastictext/elastictext', name: 'ElasticText', visible: false , settings : { activemenu : 'elastictext' }},
                { url: 'list', moduleId: 'viewmodels/list/list', name: 'List', visible: false , settings : { activemenu : 'list' }},
                { url: 'list/:page', moduleId: 'viewmodels/list/list', name: 'List', visible: false , settings : { activemenu : 'list' }},
                { url: 'table', moduleId: 'viewmodels/table/table', name: 'Table', visible: false , settings : { activemenu : 'table' }},
                { url: 'table/:page', moduleId: 'viewmodels/table/table', name: 'Table', visible: false , settings : { activemenu : 'table' }},
                { url: 'notify', moduleId: 'viewmodels/notify/notify', name: 'Notify', visible: false , settings : { activemenu : 'notify' }},
                { url: 'notify/:page', moduleId: 'viewmodels/notify/notify', name: 'Notify', visible: false , settings : { activemenu : 'notify' }},                                                                
                { url: 'error', moduleId: 'viewmodels/error/error', name: 'Error', visible: false }
            ]);
            
            router.handleInvalidRoute = function (route, params) {
                router.navigateTo("#/error");
            };

            return router.activate('home');                        
        }
    };
});