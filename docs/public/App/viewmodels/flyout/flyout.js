define(['durandal/app','lib/pagelayout','lib/prettify'], function (app, pagelayout, prettify) {
    var activePage = ko.observable(),    
    hash = "",
    fladdvisible = ko.observable(false),
    fl;
    
    return {
        compositionComplete : function() {
            var that = this;
            fl = Stashy.Flyout("#flyout", { slideType : "reveal", enableTouch:true})
            pagelayout.flyoutLayout(fl);
            fladdvisible(true);
            prettyPrint();
            Stashy.Utils.ScrollTo('#' + that.hash);
        },     
        activePage : activePage,  
        activate: function (page) {
            var that = this;
            
            if (page != undefined) {                
                that.hash = page;            
                Stashy.Utils.ScrollTo('#flyout #' + that.hash);                
            }
            ga('send', 'pageview');
        },
        fladdvisible : fladdvisible
    };
});