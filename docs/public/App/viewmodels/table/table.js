define(['durandal/app','lib/pagelayout','lib/prettify'], function (app, pagelayout, prettify) {
    var activePage = ko.observable(),    
    hash = "",
    fladdvisible = ko.observable(false),
    fl;
    
    return {
        compositionComplete : function() {
            var that = this;
            fl = Stashy.Flyout("#table", { slideType : "reveal", enableTouch:true})
            pagelayout.flyoutLayout(fl);
            fladdvisible(true);
            prettyPrint();
            Stashy.Utils.ScrollTo('#' + that.hash);
            Stashy.Table("#laptops-styled",{
		        idprefix: "sp1-",
		        notSelectable: "not-selectable",
                menuClass : "btn btn-primary"
	        }).on();	
	        Stashy.Table("#laptops-default",{
		        idprefix: "sp2-",
		        notSelectable: "not-selectable"
	        }).on();
            $(".st-table-menu-container").first().css("top","-5em");
            $("#laptops-styled thead tr th").css("text-align","left");
        },     
        activePage : activePage,  
        activate: function (page) {
            var that = this;
            
            if (page != undefined) {                
                that.hash = page;            
                Stashy.Utils.ScrollTo('#table #' + that.hash);                
            }
            ga('send', 'pageview');
        },
        fladdvisible : fladdvisible
    };
});