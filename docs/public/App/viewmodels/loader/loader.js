define(['durandal/app','lib/pagelayout','lib/prettify'], function (app, pagelayout, prettify) {
    var activePage = ko.observable(),    
    hash = "",
    oc;
    
    var parameters = ko.observable({
        target : "body",
        position : "",
        offset : "2em",
        color : "#000",
        insertiontype : ""
    });
    
    loaderOn = function() {
        Stashy.Loader(parameters().target).on(parameters().position, parameters().offset, parameters().color, parameters().insertiontype);
    }
    
    loaderOff = function() {
        Stashy.Loader().off();
    }    
    
    return {
        viewAttached : function() {
            var that = this;
            oc = Stashy.OffCanvas("#loader", { enableTouch : true });
            pagelayout.offcanvasLayout(oc);
            prettyPrint();        
            Stashy.Utils.ScrollTo('#' + that.hash);
        },                 
        activePage : activePage,  
        activate: function (args) {
            var that = this;
            
            if (args.page != undefined) {                
                that.hash = args.page;            
                Stashy.Utils.ScrollTo('#loader #' + that.hash);                
            }
            ga('send', 'pageview');
        },
        parameters : parameters,
        loaderOn : loaderOn,
        loaderOff : loaderOff
    };
});