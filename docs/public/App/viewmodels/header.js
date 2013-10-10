define(['plugins/router','lib/pagelayout'], function (router, pagelayout) {                
    var tg;
    
    return {
        attached : function() {      
            tg = Stashy.Toggle(null,{fixed:true});      
            pagelayout.togglelayout(tg);
        },
        router : router
    };
});