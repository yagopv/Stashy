define(['durandal/app','lib/pagelayout','stashy/Stashy.Utils','stashy/Stashy.Flyout','stashy/Stashy.Table','lib/prettify'], function (app, pagelayout, utils, flyout,table, prettify) {
    var activePage = ko.observable(),    
    hash = "",
    fladdvisible = ko.observable(false),
    fl;
    
    return {
        viewAttached : function() {
            var that = this;
            fl = flyout("#table", { slideType : "reveal", enableTouch:true})
            pagelayout.flyoutLayout(fl);
            fladdvisible(true);
            prettyPrint();
            utils.ScrollTo('#' + that.hash);
            table("#laptops-styled",{
		        idprefix: "sp1-",
		        notSelectable: "not-selectable",
                menuClass : "btn btn-primary"
	        }).on();	
	        table("#laptops-default",{
		        idprefix: "sp2-",
		        notSelectable: "not-selectable"
	        }).on();
            $(".st-table-menu-container").first().css("top","-5em");
            $("#laptops-styled thead tr th").css("text-align","left");
        },     
        activePage : activePage,  
        activate: function (args) {
            var that = this;
            
            if (args.page != undefined) {                
                that.hash = args.page;            
                utils.ScrollTo('#table #' + that.hash);                
            }
            ga('send', 'pageview');
        },
        fladdvisible : fladdvisible
    };
});