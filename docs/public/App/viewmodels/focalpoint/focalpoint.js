define(['durandal/app','lib/pagelayout','stashy/Stashy.Utils','stashy/Stashy.FocalPoint', 'stashy/Stashy.OffCanvas','lib/prettify'], function (app, pagelayout, utils, focalpoint, offcanvas, prettify) {
    var activePage = ko.observable(),    
    hash = "",
    oc;
    
    var sample1 = ko.observable({
        pointA : "",
        pointB : "",
        image : "#image-1"
    });

    var sample2 = ko.observable({
        pointA : "",
        pointB : "",
        image : "#image-2"
    });

    var sample3 = ko.observable({
        pointA : "",
        pointB : "",
        image : "#image-3"
    });

    var sample4 = ko.observable({
        pointA : "",
        pointB : "",
        image : "#image-4",
        customimage : ko.observable("http://t2.gstatic.com/images?q=tbn:ANd9GcQh6lYnW0E-HTU0WtfJV0cl1UZVS2Ng0D03lu4lIHCOMdVS90SLeg")
    });
        
    var sampleOn  = function(data, event) {
        focalpoint(data.image).on(data.pointA,data.pointB);
    }
    
    var sampleOff  = function(data, event) {
        focalpoint(data.image).off();
    }
    
    var sampleUpdate  = function(data, event) {
        focalpoint(data.image).update(data.pointA, data.pointB);
    }
     
    var samplesOff = function() {
        focalpoint("#sample-1").off();
        focalpoint("#sample-2").off();        
    }
    
    return {
        viewAttached : function() {
            var that = this;
            oc= offcanvas("#focalpoint")
            pagelayout.offcanvasLayout(oc);
            prettyPrint();            
            focalpoint("#sample-1").on("top-3", "right-3");        
            focalpoint("#sample-2").on("top-2", "right-2");            
            utils.ScrollTo('#' + that.hash);
        },
        closeLayout : function() {
            pagelayout.closeOffcanvas(oc);
            return true;
        },                     
        activePage : activePage,  
        activate: function (args) {
            var that = this;
            
            if (args.page != undefined) {                
                that.hash = args.page;            
                utils.ScrollTo('#focalpoint #' + that.hash);                
            }
            ga('send', 'pageview');
        },
        sample1 : sample1,
        sample2 : sample2,
        sample3 : sample3,
        sample4 : sample4,
        sampleOn : sampleOn,
        sampleOff : sampleOff,
        sampleUpdate : sampleUpdate,
        samplesOff : samplesOff
    };
});