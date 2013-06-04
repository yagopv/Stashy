define(['durandal/app', 'durandal/system','lib/pagelayout','durandal/plugins/router'], function (app, system, offcanvas, router) {            
    
    var layouts = [{
        name : "OffCanvas",
        hash : "#/offcanvas"
    },{
        name : "Flyout",
        hash : "#/flyout"        
    },{
        name : "Sticky",
        hash : "#/sticky"    
    }],

    navigation = [{
        name : "FocalPoint",
        hash : "#/focalpoint"        
    }],
    
    media = [{
        name : "Toggle",
        hash : "#/toggle"
    }],

    utilities = [{
        name : "ShowMeMore",
        hash : "#/showmemore"    
    },{
        name : "Loader",
        hash : "#/loader"        
    },{
        name : "Slider",
        hash : "#/slider"        
    }]
    
    return {
        layouts : layouts,
        navigation : navigation,
        media : media,
        utilities : utilities
    };
});