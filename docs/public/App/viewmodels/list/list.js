define(['durandal/app','lib/pagelayout','stashy/Stashy.Utils','stashy/Stashy.OffCanvas', 'lib/prettify'], function (app, pagelayout, utils, offcanvas,prettify) {
    var activePage = ko.observable(),    
    hash = "",
    oc,
    sampleData = ko.observableArray();
    
    for (var i = 0; i < 10; i++) {
        sampleData().push({
            imgsrc : "http://www.eurocosm.com/Application/images/Reproduction-Tiles/Victorian-tiles-Red-6-6-lg.jpg",
            imgalt : "Alternative Text",
            title : "List item title",
            description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet tellus velit, ut semper neque"
        });
    }
    
    return {
        viewAttached : function() {
            var that = this;
            oc = offcanvas("#list", { enableTouch : true });
            pagelayout.offcanvasLayout(oc);
            prettyPrint();          
            utils.ScrollTo('#' + that.hash);
        },                  
        activePage : activePage,
        activate: function (args) {
            var that = this;
            
            if (args.page != undefined) {                
                that.hash = args.page;            
                utils.ScrollTo('#list #' + that.hash);                               
            }
            ga('send', 'pageview');
        },
        sampleData : sampleData
    };
});