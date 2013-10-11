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
                { route: ['','home/(:page)'], moduleId: 'viewmodels/home/home', title: 'Home', nav: true, settings : { activemenu : 'home' } },
                { route: 'about', moduleId: 'viewmodels/about/about', title: 'About', nav: true },
                { route: 'offcanvas(/:page)', moduleId: 'viewmodels/offcanvas/offcanvas', title: 'OffCanvas', nav: false, settings : { activemenu : 'offcanvas' } },
                { route: 'flyout(/:page)', moduleId: 'viewmodels/flyout/flyout', title: 'Flyout', nav: false , settings : { activemenu : 'flyout' }},
                { route: 'toggle(/:page)', moduleId: 'viewmodels/toggle/toggle', title: 'Toggle', nav: false , settings : { activemenu : 'toggle' }},
                { route: 'showmemore(/:page)', moduleId: 'viewmodels/showmemore/showmemore', title: 'ShowMeMore', nav: false , settings : { activemenu : 'showmemore' }},
                { route: 'focalpoint(/:page)', moduleId: 'viewmodels/focalpoint/focalpoint', title: 'FocalPoint', nav: false , settings : { activemenu : 'focalpoint' }},                  
                { route: 'loader(/:page)', moduleId: 'viewmodels/loader/loader', title: 'Loader', nav: false , settings : { activemenu : 'loader' }},
                { route: 'slider(/:page)', moduleId: 'viewmodels/slider/slider', title: 'Slider', nav: false , settings : { activemenu : 'slider' }},                
                { route: 'sticky(/:page)', moduleId: 'viewmodels/sticky/sticky', title: 'Sticky', nav: false , settings : { activemenu : 'sticky' }},                
                { route: 'refresh(/:page)', moduleId: 'viewmodels/refresh/refresh', title: 'Refresh', nav: false , settings : { activemenu : 'refresh' }},
                { route: 'elasticvideo(/:page)', moduleId: 'viewmodels/elasticvideo/elasticvideo', title: 'ElasticVideo', nav: false , settings : { activemenu : 'elasticvideo' }},
                { route: 'elastictext(/:page)', moduleId: 'viewmodels/elastictext/elastictext', title: 'ElasticText', nav: false , settings : { activemenu : 'elastictext' }},
                { route: 'list(/:page)', moduleId: 'viewmodels/list/list', title: 'List', nav: false , settings : { activemenu : 'list' }},
                { route: 'table(/:page)', moduleId: 'viewmodels/table/table', title: 'Table', nav: false , settings : { activemenu : 'table' }},
                { route: 'notify(/:page)', moduleId: 'viewmodels/notify/notify', title: 'Notify', nav: false , settings : { activemenu : 'notify' }},                                                                
                { route: 'notfound', moduleId: 'viewmodels/notfound/notfound', title: 'Page not found', nav: false }
            ]);
            
            router.buildNavigationModel();
            
            router.mapUnknownRoutes('viewmodels/notfound/notfound', 'notfound');

            return router.activate({ pushState : false});
        }
    };
});