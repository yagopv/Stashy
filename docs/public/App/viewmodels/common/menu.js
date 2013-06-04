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
                    { name : "Dependencies",hash : "#/slider/dependencies" }
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