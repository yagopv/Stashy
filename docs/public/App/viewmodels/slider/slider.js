define(['durandal/app','lib/pagelayout','lib/prettify'], function (app, pagelayout, prettify) {
    var activePage = ko.observable(),
    hash = "",
    oc;
    
    return {
        attached : function() {
            var that = this;
            oc= Stashy.OffCanvas("#slider", { enableTouch : true })
            pagelayout.offcanvasLayout(oc);
            prettyPrint();    
            Stashy.Slider("#sl1",{enableTouch : true, autoSlide:true}).on();
            Stashy.Slider("#sl2",{enableControls : false, enableIndicators:false, enableTouch : true}).on();
            Stashy.Slider("#sl3",{enableControls : false, enableIndicators:false, enableTouch : true, autoSlide : false}).on();
            Stashy.Utils.ScrollTo('#' + that.hash);
        },                    
        activePage : activePage,  
        activate: function (args) {
            var that = this;
            
            if (args.page != undefined) {                
                that.hash = args.page;            
                Stashy.Utils.ScrollTo('#slider #' + that.hash);
            }
            ga('send', 'pageview');
        }
    };
});