define(['durandal/app','lib/pagelayout','stashy/Stashy.Utils', 'stashy/Stashy.Loader', 'stashy/Stashy.OffCanvas','lib/prettify'], function (app, pagelayout, utils, loader, offcanvas, prettify) {
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
        loader(parameters().target).on(parameters().position, parameters().offset, parameters().color, parameters().insertiontype);
    }
    
    loaderOff = function() {
        loader().off();
    }    
    
    return {
        viewAttached : function() {
            var that = this;
            oc = offcanvas("#loader");
            pagelayout.offcanvasLayout(oc);
            prettyPrint();        
            utils.ScrollTo('#' + that.hash);
        },                 
        activePage : activePage,  
        activate: function (args) {
            var that = this;
            
            if (args.page != undefined) {                
                that.hash = args.page;            
                utils.ScrollTo('#loader #' + that.hash);                
            }
            ga('send', 'pageview');
        },
        parameters : parameters,
        loaderOn : loaderOn,
        loaderOff : loaderOff
    };
});