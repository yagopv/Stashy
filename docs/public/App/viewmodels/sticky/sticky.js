define(['durandal/app','lib/pagelayout', 'lib/prettify'], function (app, pagelayout, prettify) {
    var activePage = ko.observable(),    
    hash = "",
    oc;
    
    return {
        viewAttached : function() {
            var that = this;
            oc = Stashy.OffCanvas("#sticky", { enableTouch : true });
            pagelayout.offcanvasLayout(oc);
            prettyPrint();          
            Stashy.Utils.ScrollTo('#' + that.hash);
        },                   
        activePage : activePage,
        activate: function (args) {
            var that = this;
            
            if (args.page != undefined) {                
                that.hash = args.page;            
                Stashy.Utils.ScrollTo('#sticky #' + that.hash);                               
            }
            ga('send', 'pageview');
        }
    };
});