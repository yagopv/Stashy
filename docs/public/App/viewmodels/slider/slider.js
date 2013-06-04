define(['durandal/app','lib/pagelayout','stashy/Stashy.Utils','stashy/Stashy.Slider', 'stashy/Stashy.OffCanvas','lib/prettify'], function (app, pagelayout, utils, slider, offcanvas, prettify) {
    var activePage = ko.observable(),
    hash = "",
    oc;
    
    return {
        viewAttached : function() {
            var that = this;
            oc= offcanvas("#slider", { enableTouch : true })
            pagelayout.offcanvasLayout(oc);
            prettyPrint();    
            slider("#sl1",{enableTouch : true, autoSlide:true}).on();
            slider("#sl2",{enableControls : false, enableIndicators:false, enableTouch : true}).on();
            utils.ScrollTo('#' + that.hash);
        },                    
        activePage : activePage,  
        activate: function (args) {
            var that = this;
            
            if (args.page != undefined) {                
                that.hash = args.page;            
                utils.ScrollTo('#slider #' + that.hash);
            }
            ga('send', 'pageview');
        }
    };
});