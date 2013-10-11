define(['durandal/app','lib/pagelayout','lib/prettify'], function (app, pagelayout, prettify) {
    var activePage = ko.observable(),
    hash = "",
    oc;
    
    return {
        compositionComplete : function() {
            var that = this;
            oc= Stashy.OffCanvas("#elasticvideo", { enableTouch : true });
            pagelayout.offcanvasLayout(oc);
            prettyPrint();    
            Stashy.Utils.ScrollTo('#' + that.hash);
            Stashy.ElasticVideo("iframe,object,embed").on();
        },                    
        activePage : activePage,  
        activate: function (page) {
            var that = this;
            
            if (page != undefined) {                
                that.hash = page;            
                Stashy.Utils.ScrollTo('#elasticvideo #' + that.hash);
            }
            ga('send', 'pageview');
        }
    };
});