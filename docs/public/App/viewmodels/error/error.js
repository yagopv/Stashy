define(['durandal/app','lib/pagelayout'], function (app, pagelayout) {
    var hash = "",
    oc;

    return {
        viewAttached : function() {
            oc = Stashy.OffCanvas("#error", { enableTouch : true });
            pagelayout.offcanvasLayout(oc);            
        },
        activate: function (args) {        
            ga('send', 'pageview');
        }
    };
});