define(['durandal/app','lib/pagelayout'], function (app, pagelayout) {
    var hash = "",
    oc;

    return {
        compositionComplete : function() {
            oc = Stashy.OffCanvas("#notfound", { enableTouch : true });
            pagelayout.offcanvasLayout(oc);            
        },
        activate: function () {        
            ga('send', 'pageview');
        }
    };
});