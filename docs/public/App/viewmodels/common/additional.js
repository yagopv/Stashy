define(['durandal/app', 'durandal/system','plugins/router'], function (app, system, router) {            
    
    var layouts = [{
        name : "OffCanvas",
        route : "/offcanvas"
    },{
        name : "Flyout",
        route : "/flyout"        
    },{
        name : "Sticky",
        route : "/sticky"    
    }],

    media = [{
        name : "FocalPoint",
        route : "/focalpoint"        
    },{
        name : "ElasticVideo",
        route : "/elasticvideo"        
    }],
    
    navigation = [{
        name : "Toggle",
        route : "/toggle"
    }, {
        name : "Menu",
        route : "/menu"        
    }],

    misc = [{
        name : "Slider",
        route : "/slider"                
    },{
        name : "Refresh",
        route : "/refresh"        
    },{
        name : "Loader",
        route : "/loader"        
    },{
        name : "ShowMeMore",
        route : "/showmemore"    
    },{
        name : "ElasticText",
        route : "/elastictext"        
    },{
        name : "List",
        route : "/list"        
    },{
        name : "Table",
        route : "/table"        
    },{
        name : "Notify",
        route : "/notify"
    }]
    
    return {
        layouts : layouts,
        navigation : navigation,
        media : media,
        misc : misc,
        router : router
    };
});