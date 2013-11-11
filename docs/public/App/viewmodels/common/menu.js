define(['durandal/app','durandal/system','plugins/router'], function (app, system,router) {            
    var alllinks = 
        {
        'focalpoint' : [
                    { name : "Description", route : "/focalpoint/description" },
                    { name : "HTML",        route : "/focalpoint/html" },
                    { name : "JavaScript",  route : "/focalpoint/javascript" },
                    { name : "Playground"  ,route : "/focalpoint/playground" },                    
                    { name : "Dependencies",route : "/focalpoint/dependencies" }
        ],
        'offcanvas' : [
                    { name : "Description", route : "/offcanvas/description" },
                    { name : "HTML",        route : "/offcanvas/html" },
                    { name : "JavaScript",  route : "/offcanvas/javascript" },
                    { name : "Dependencies",route : "/offcanvas/dependencies" }
        ],                
        'toggle' : [
                    { name : "Description", route : "/toggle/description" },
                    { name : "HTML",        route : "/toggle/html" },
                    { name : "JavaScript",  route : "/toggle/javascript" },
                    { name : "Dependencies",route : "/toggle/dependencies" }
        ],  
        'loader' : [
                    { name : "Description", route : "/loader/description" },
                    { name : "HTML",        route : "/loader/html" },
                    { name : "JavaScript",  route : "/loader/javascript" },  
                    { name : "Playground"  ,route : "/loader/playground" },                                               
                    { name : "Dependencies",route : "/loader/dependencies" }
        ],  
        'showmemore' : [
                    { name : "Description", route : "/showmemore/description" },
                    { name : "HTML",        route : "/showmemore/html" },
                    { name : "JavaScript",  route : "/showmemore/javascript" },   
                    { name : "Playground"  ,route : "/showmemore/playground" },                                              
                    { name : "Dependencies",route : "/showmemore/dependencies" }
        ],       
        'sticky' : [
                    { name : "Description", route : "/sticky/description" },
                    { name : "HTML",        route : "/sticky/html" },
                    { name : "JavaScript",  route : "/sticky/javascript" },
                    { name : "Dependencies",route : "/sticky/dependencies" }
        ],          
        'slider' : [
                    { name : "Description", route : "/slider/description" },
                    { name : "HTML",        route : "/slider/html" },
                    { name : "JavaScript",  route : "/slider/javascript" },
                    { name : "Playground",  route : "/slider/playground" },
                    { name : "Dependencies",route : "/slider/dependencies" }
        ],          
        'refresh' : [
                    { name : "Description", route : "/refresh/description" },
                    { name : "HTML",        route : "/refresh/html" },
                    { name : "JavaScript",  route : "/refresh/javascript" },
                    { name : "Playground",  route : "/refresh/playground" },
                    { name : "Dependencies",route : "/refresh/dependencies" }
        ],   
        'elasticvideo' : [
                    { name : "Description", route : "/elasticvideo/description" },
                    { name : "JavaScript",  route : "/elasticvideo/javascript" },
                    { name : "Playground",  route : "/elasticvideo/playground" },
                    { name : "Dependencies",route : "/elasticvideo/dependencies" }
        ],   
        'elastictext' : [
                    { name : "Description", route : "/elastictext/description" },
                    { name : "JavaScript",  route : "/elastictext/javascript" },
                    { name : "Playground",  route : "/elastictext/playground" },
                    { name : "Dependencies",route : "/elastictext/dependencies" }
        ],        
        'list' : [
                    { name : "Description", route : "/list/description" },
                    { name : "HTML",        route : "/list/html" },                    
                    { name : "Playground",  route : "/list/playground" },
                    { name : "Dependencies",route : "/list/dependencies" }
        ],
        'notify' : [
                    { name : "Description", route : "/notify/description" },
                    { name : "JavaScript",  route : "/notify/javascript" },
                    { name : "Playground",  route : "/notify/playground" },
                    { name : "Dependencies",route : "/notify/dependencies" }
        ],
        'menu' : [
                    { name : "Description", route : "/menu/description" },
                    { name : "HTML",        route : "/menu/html" },
                    { name : "JavaScript",  route : "/menu/javascript" },
                    { name : "Playground",  route : "/menu/playground" },
                    { name : "Dependencies",route : "/menu/dependencies" }
        ],            
        'home' :    [
                    { name : "What is this?", route : "/home/whatisthis" },
                    { name : "Components inside this library", route : "/home/components" },
                    { name : "Standalone samples",route : "/home/samples" },
                    { name : "Dependencies",route : "/home/dependencies" }                    
        ]},
        
        menulinks = null;
        
    return {
        binding : function(element) {
            this.menulinks = alllinks[router.activeInstruction().config.settings.activemenu];            
        },
        menulinks : menulinks,
        router : router
    };
});