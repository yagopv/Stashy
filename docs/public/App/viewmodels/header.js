define(['plugins/router','lib/pagelayout'], function (router, pagelayout) {                
    var tg;
    
    return {
        attached : function() {      
            tg = Stashy.Toggle(null,{fixed:true});      
            pagelayout.togglelayout(tg);
        },
        router : router,
        
        // Strange behaviour with links not making AJAX calls in header
        // So have to do it manual
        navigate : function (model, event) {
            router.navigate(event.target.attributes["href"].value);
        }
    };
});