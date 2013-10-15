define(['durandal/app','lib/pagelayout','lib/prettify'], function (app, pagelayout, prettify) {
    var activePage = ko.observable(),    
    hash = "",
    oc;
    
    var availablePoints = ko.observableArray([
        'up-1', 'up-2', 'up-3','up-4','up-5','up-6',
        'down-1', 'down-2', 'down-3','down-4','down-5','down-6',
        'right-1', 'right-2', 'right-3','right-4','right-5','right-6',
        'left-1', 'left-2', 'left-3','left-4','left-5','left-6'
    ]);
    
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
        Stashy.FocalPoint(data.image).on(data.pointA,data.pointB);
    }
    
    var sampleOff  = function(data, event) {
        Stashy.FocalPoint(data.image).off();
    }
    
    var sampleUpdate  = function(data, event) {
        Stashy.FocalPoint(data.image).update(data.pointA, data.pointB);
    }
     
    var samplesOff = function() {
        Stashy.FocalPoint("#sample-1").off();
        Stashy.FocalPoint("#sample-2").off();        
    }
    
    return {
        compositionComplete : function() {
            var that = this;
            oc= Stashy.OffCanvas("#focalpoint", { enableTouch : true })
            pagelayout.offcanvasLayout(oc);
            prettyPrint();            
            Stashy.FocalPoint("#sample-1").on("top-3", "right-3");        
            Stashy.FocalPoint("#sample-2").on("top-2", "right-2");            
            Stashy.Utils.ScrollTo('#' + that.hash);
        },                    
        activePage : activePage,  
        activate: function (page) {
            var that = this;
            
            if (page != undefined) {                
                that.hash = page;            
                Stashy.Utils.ScrollTo('#focalpoint #' + that.hash);                
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
        samplesOff : samplesOff,
        availablePoints : availablePoints
    };
});