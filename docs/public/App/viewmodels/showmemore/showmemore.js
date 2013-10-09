define(['durandal/app','lib/pagelayout','lib/prettify'], function (app, pagelayout, prettify) {
    var activePage = ko.observable(),    
    hash = "",
    oc,
    sectionhowmany  = ko.observable(),
    listhowmany = ko.observable(),    
    items1 = [],
    items2 = [];
    
    var item = {
        title : "Lorem ipsum",
        description : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus"
    }
    
    for (var i=0; i<15; i++) {
        items1.push(item);
        items2.push(item);
    }
    
    var showmemoreOn = function(data, event) {            
            var issections = event.target.attributes["data-target"].value.indexOf("sections-sample") != -1;                        
            
            Stashy.ShowMeMore(event.target.attributes["data-target"].value, {
                linkClass : "btn btn-inverse",
                linkText : "Show more ...",
                howMany : issections ? parseInt(sectionhowmany()) : parseInt(listhowmany())
            }).on();
            
            if (issections) {
                sectionhowmany("");         
            } else {
                listhowmany("");         
            }            
    }
    
    var showmemoreOff = function(data, event) {
        Stashy.ShowMeMore(event.target.attributes["data-target"].value).off();				
    }    
    
    return {
        viewAttached : function() {
            var that = this;
            oc = Stashy.OffCanvas("#showmemore", { enableTouch : true });
            pagelayout.offcanvasLayout(oc);
            prettyPrint();   
            Stashy.Utils.ScrollTo('#' + that.hash);
        },                     
        activePage : activePage,  
        activate: function (args) {
            var that = this;
            
            if (args.page != undefined) {                
                that.hash = args.page;            
                Stashy.Utils.ScrollTo('#showmemore #' + that.hash);                
            }
            ga('send', 'pageview');
        },   
        items1 : items1,
        items2 : items2,
        showmemoreOn : showmemoreOn,
        showmemoreOff : showmemoreOff,
        sectionhowmany : sectionhowmany,
        listhowmany : listhowmany                  
    };
});