define(['durandal/app','lib/pagelayout','stashy/Stashy.Utils','stashy/Stashy.ElasticText', 'stashy/Stashy.OffCanvas','lib/prettify'], function (app, pagelayout, utils, text, offcanvas, prettify) {
    var activePage = ko.observable(),
    hash = "",
    oc;
    
    return {
        viewAttached : function() {
            var that = this;
            oc= offcanvas("#elastictext", { enableTouch : true });
            pagelayout.offcanvasLayout(oc);
            prettyPrint();    
            utils.ScrollTo('#' + that.hash);
        },                    
        activePage : activePage,  
        activate: function (args) {
            var that = this;
            
            if (args.page != undefined) {                
                that.hash = args.page;            
                utils.ScrollTo('#elastictext #' + that.hash);
            }
            ga('send', 'pageview');
        }
    };
});