define(['durandal/app','durandal/system','lib/pagelayout','durandal/plugins/router'], function (app, system,offcanvas,router) {            
    var alllinks = 
        {
        'focalpoint' : [
                    { name : "Description", hash : "#/focalpoint/description" },
                    { name : "HTML",        hash : "#/focalpoint/html" },
                    { name : "JavaScript",  hash : "#/focalpoint/javascript" },
                    { name : "Playground"  ,hash : "#/focalpoint/playground" },                    
                    { name : "Dependencies",hash : "#/focalpoint/dependencies" }
        ],
        'offcanvas' : [
                    { name : "Description", hash : "#/offcanvas/description" },
                    { name : "HTML",        hash : "#/offcanvas/html" },
                    { name : "JavaScript",  hash : "#/offcanvas/javascript" },
                    { name : "Dependencies",hash : "#/offcanvas/dependencies" }
        ],                
        'toggle' : [
                    { name : "Description", hash : "#/toggle/description" },
                    { name : "HTML",        hash : "#/toggle/html" },
                    { name : "JavaScript",  hash : "#/toggle/javascript" },
                    { name : "Dependencies",hash : "#/toggle/dependencies" }
        ],  
        'loader' : [
                    { name : "Description", hash : "#/loader/description" },
                    { name : "HTML",        hash : "#/loader/html" },
                    { name : "JavaScript",  hash : "#/loader/javascript" },  
                    { name : "Playground"  ,hash : "#/loader/playground" },                                               
                    { name : "Dependencies",hash : "#/loader/dependencies" }
        ],  
        'showmemore' : [
                    { name : "Description", hash : "#/showmemore/description" },
                    { name : "HTML",        hash : "#/showmemore/html" },
                    { name : "JavaScript",  hash : "#/showmemore/javascript" },   
                    { name : "Playground"  ,hash : "#/showmemore/playground" },                                              
                    { name : "Dependencies",hash : "#/showmemore/dependencies" }
        ],       
        'sticky' : [
                    { name : "Description", hash : "#/sticky/description" },
                    { name : "HTML",        hash : "#/sticky/html" },
                    { name : "JavaScript",  hash : "#/sticky/javascript" },
                    { name : "Dependencies",hash : "#/sticky/dependencies" }
        ],          
        'slider' : [
                    { name : "Description", hash : "#/slider/description" },
                    { name : "HTML",        hash : "#/slider/html" },
                    { name : "JavaScript",  hash : "#/slider/javascript" },
                    { name : "Playground",  hash : "#/slider/playground" },
                    { name : "Dependencies",hash : "#/slider/dependencies" }
        ],          
        'refresh' : [
                    { name : "Description", hash : "#/refresh/description" },
                    { name : "HTML",        hash : "#/refresh/html" },
                    { name : "JavaScript",  hash : "#/refresh/javascript" },
                    { name : "Playground",  hash : "#/refresh/playground" },
                    { name : "Dependencies",hash : "#/refresh/dependencies" }
        ],   
        'elasticvideo' : [
                    { name : "Description", hash : "#/elasticvideo/description" },
                    { name : "JavaScript",  hash : "#/elasticvideo/javascript" },
                    { name : "Playground",  hash : "#/elasticvideo/playground" },
                    { name : "Dependencies",hash : "#/elasticvideo/dependencies" }
        ],   
        'elastictext' : [
                    { name : "Description", hash : "#/elastictext/description" },
                    { name : "JavaScript",  hash : "#/elastictext/javascript" },
                    { name : "Playground",  hash : "#/elastictext/playground" },
                    { name : "Dependencies",hash : "#/elastictext/dependencies" }
        ],        
        'list' : [
                    { name : "Description", hash : "#/list/description" },
                    { name : "HTML",        hash : "#/list/html" },                    
                    { name : "Playground",  hash : "#/list/playground" },
                    { name : "Dependencies",hash : "#/list/dependencies" }
        ],
        'notify' : [
                    { name : "Description", hash : "#/notify/description" },
                    { name : "JavaScript",  hash : "#/notify/javascript" },
                    { name : "Playground",  hash : "#/notify/playground" },
                    { name : "Dependencies",hash : "#/notify/dependencies" }
        ],
        'home' :    [
                    { name : "What is this?", hash : "#/home/whatisthis" },
                    { name : "Components inside this library", hash : "#/home/components" },
                    { name : "Standalone samples",hash : "#/home/samples" },
                    { name : "Dependencies",hash : "#/home/dependencies" }                    
        ]},
        
        menulinks = null;
        
    return {
        beforeBind : function(element, view, settings) {
            this.menulinks = alllinks[router.activeRoute().settings.activemenu];            
        },
        menulinks : menulinks  
    };
});