define(['durandal/app','lib/pagelayout','stashy/Stashy.Utils','stashy/Stashy.Flyout','lib/prettify'], function (app, pagelayout, utils, flyout, prettify) {
    var activePage = ko.observable(),    
    hash = "",
    fladdvisible = ko.observable(false),
    fl;
    
    return {
        viewAttached : function() {
            var that = this;
            fl = flyout("#flyout", { slideType : "reveal"})
            pagelayout.flyoutLayout(fl);
            fladdvisible(true);
            prettyPrint();
            utils.ScrollTo('#' + that.hash);
        },
        closeLayout : function() {
            pagelayout.closeFlyout(fl);
            return true;
        },        
        activePage : activePage,  
        activate: function (args) {
            var that = this;
            
            if (args.page != undefined) {                
                that.hash = args.page;            
                utils.ScrollTo('#flyout #' + that.hash);                
            }
            ga('send', 'pageview');
        },
        fladdvisible : fladdvisible
    };
});