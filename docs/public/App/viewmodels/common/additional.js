define(['durandal/app', 'durandal/system','lib/pagelayout','durandal/plugins/router'], function (app, system, offcanvas, router) {            
    
    var layouts = [{
        name : "OffCanvas",
        hash : "#/offcanvas"
    },{
        name : "Flyout",
        hash : "#/flyout"        
    },{
        name : "Toggle",
        hash : "#/toggle"    
    },{
        name : "Sticky",
        hash : "#/sticky"    
    }],
    
    utilities = [{
        name : "ShowMeMore",
        hash : "#/showmemore"    
    },{
        name : "FocalPoint",
        hash : "#/focalpoint"    
    },{
        name : "Loader",
        hash : "#/loader"        
    }]
    
    return {
        closeLayout : function() {
            system.acquire(router.activeRoute().moduleId).then(function (module) {
            module.closeLayout();            
            });
            return true;
        },
        layouts : layouts,
        utilities : utilities
    };
});