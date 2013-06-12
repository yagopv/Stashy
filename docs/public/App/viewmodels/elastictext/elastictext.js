define(['durandal/app','lib/pagelayout','stashy/Stashy.Utils','stashy/Stashy.Events','stashy/Stashy.ElasticText', 'stashy/Stashy.OffCanvas','lib/prettify'], function (app, pagelayout, utils, events, text, offcanvas, prettify) {
    var activePage = ko.observable(),
    hash = "",
    oc;
    
    var availableRatios = ko.observableArray(['',
        '0.1', '0.2', '0.3','0.4','0.5','0.6','0.7', '0.8', '0.9','1',
        '1.1', '1.2', '1.3','1.4','1.5','1.6','1.7', '1.8', '1.9','2.0'
    ]);
        
    var availableSizes = ko.observableArray(['',
        '10px', '12px', '14px','16px','18px','20px',
        '22px', '24px', '26px','28px','30px','32px',
        '34px', '36px', '38px','40px','42px','44px',
        '46px', '48px', '50px','52px','54px','56px',
        '58px','60px'
    ]);
        
    var samplep = ko.observable({
        ratio : "",
        minsize : "",
        maxsize : ""
    });
        
    var sampleOn  = function(data, event) {
        var ratio = data.ratio == '' ? null : parseFloat(data.ratio),
            min   = data.minsize == '' ? null : data.minsize,
            max   = data.maxsize == '' ? null : data.maxsize
        
        text("#samplep").on(ratio,min,max);
    }
                    
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
        },
        adaptHeader : function() {
            text(".hero-unit h1").on(0.6,"40px");
        },
        availableSizes : availableSizes,
        availableRatios : availableRatios,
        samplep : samplep,
        sampleOn : sampleOn
    };
});