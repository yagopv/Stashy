define(['durandal/app','lib/pagelayout','stashy/Stashy.Utils','stashy/Stashy.OffCanvas'], function (app, pagelayout, utils, offcanvas) {
    var hash = "",
    oc;

    return {
        viewAttached : function() {
            oc = offcanvas("#error", { enableTouch : true });
            pagelayout.offcanvasLayout(oc);            
        },
        activate: function (args) {        
            ga('send', 'pageview');
        }
    };
});