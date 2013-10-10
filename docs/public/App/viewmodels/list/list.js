define(['durandal/app','lib/pagelayout', 'lib/prettify'], function (app, pagelayout, prettify) {
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
        attached : function() {
            var that = this;
            oc = Stashy.OffCanvas("#list", { enableTouch : true });
            pagelayout.offcanvasLayout(oc);
            prettyPrint();          
            Stashy.Utils.ScrollTo('#' + that.hash);
        },                  
        activePage : activePage,
        activate: function (args) {
            var that = this;
            
            if (args.page != undefined) {                
                that.hash = args.page;            
                Stashy.Utils.ScrollTo('#list #' + that.hash);                               
            }
            ga('send', 'pageview');
        },
        sampleData : sampleData
    };
});