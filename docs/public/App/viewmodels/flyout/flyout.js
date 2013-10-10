define(['durandal/app','lib/pagelayout','lib/prettify'], function (app, pagelayout, prettify) {
    var activePage = ko.observable(),    
    hash = "",
    fladdvisible = ko.observable(false),
    fl;
    
    return {
        attached : function() {
            var that = this;
            fl = Stashy.Flyout("#flyout", { slideType : "reveal", enableTouch:true})
            pagelayout.flyoutLayout(fl);
            fladdvisible(true);
            prettyPrint();
            Stashy.Utils.ScrollTo('#' + that.hash);
        },     
        activePage : activePage,  
        activate: function (args) {
            var that = this;
            
            if (args.page != undefined) {                
                that.hash = args.page;            
                Stashy.Utils.ScrollTo('#flyout #' + that.hash);                
            }
            ga('send', 'pageview');
        },
        fladdvisible : fladdvisible
    };
});