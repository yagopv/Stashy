define(['durandal/plugins/router'], function (router) {
    
    return {
        viewAttached : function() {
            setTimeout(function() {
                $("footer").css("display","block");
            },1000);            
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
                { url: 'sticky', moduleId: 'viewmodels/sticky/sticky', name: 'Sticky', visible: false , settings : { activemenu : 'sticky' }},
                { url: 'sticky/:page', moduleId: 'viewmodels/sticky/sticky', name: 'Sticky', visible: false , settings : { activemenu : 'sticky' }},                
                { url: 'error', moduleId: 'viewmodels/error/error', name: 'Error', visible: false }
            ]);
            
            router.handleInvalidRoute = function (route, params) {
                router.navigateTo("#/error");
            };

            return router.activate('home');                        
        }
    };
});