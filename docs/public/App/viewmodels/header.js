define(['durandal/plugins/router','lib/pagelayout'], function (router, pagelayout) {                
    var tg;
    
    return {
        viewAttached : function() {      
            tg = Stashy.Toggle(null,{fixed:true});      
            pagelayout.togglelayout(tg);
        },
        router : router
    };
});