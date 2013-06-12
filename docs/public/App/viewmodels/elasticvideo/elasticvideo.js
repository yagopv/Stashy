define(['durandal/app','lib/pagelayout','stashy/Stashy.Utils','stashy/Stashy.ElasticVideo', 'stashy/Stashy.OffCanvas','lib/prettify'], function (app, pagelayout, utils, video, offcanvas, prettify) {
    var activePage = ko.observable(),
    hash = "",
    oc;
    
    return {
        viewAttached : function() {
            var that = this;
            oc= offcanvas("#elasticvideo", { enableTouch : true });
            pagelayout.offcanvasLayout(oc);
            prettyPrint();    
            utils.ScrollTo('#' + that.hash);
        },                    
        activePage : activePage,  
        activate: function (args) {
            var that = this;
            
            if (args.page != undefined) {                
                that.hash = args.page;            
                utils.ScrollTo('#elasticvideo #' + that.hash);
            }
            ga('send', 'pageview');
        }
    };
});