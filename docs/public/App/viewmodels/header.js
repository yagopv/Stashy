define(['durandal/plugins/router','lib/pagelayout','stashy/Stashy.Toggle'], function (router, pagelayout, toggle) {                
    var tg;
    
    return {
        viewAttached : function() {      
            tg = toggle();      
            pagelayout.togglelayout(tg);
        },
        closeToggle : function() {
            pagelayout.closeToggle(tg);
            return true;
        },
        router : router
    };
});