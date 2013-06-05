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
        name : "Slider",
        hash : "#/slider"                
    },{
        name : "Loader",
        hash : "#/loader"        
    },{
        name : "ShowMeMore",
        hash : "#/showmemore"    
    }]
    
    return {
        layouts : layouts,
        navigation : navigation,
        media : media,
        utilities : utilities
    };
});