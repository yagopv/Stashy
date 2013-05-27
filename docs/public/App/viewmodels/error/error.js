define(['durandal/app','lib/pagelayout','stashy/Stashy.Utils','stashy/Stashy.OffCanvas'], function (app, pagelayout, utils, offcanvas) {
    var hash = "",
    oc;

    return {
        viewAttached : function() {
            oc = offcanvas("#error");
            pagelayout.offcanvasLayout(oc);            
        },
        closeLayout : function() {
            pagelayout.closeOffcanvas(oc);
            return true;
        },
        activate: function (args) {        
            ga('send', 'pageview');
        }
    };
});