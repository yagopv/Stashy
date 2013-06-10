define(['durandal/app','lib/pagelayout','stashy/Stashy.Utils','stashy/Stashy.Refresh', 'stashy/Stashy.OffCanvas','lib/prettify'], function (app, pagelayout, utils, refresh, offcanvas, prettify) {
    var activePage = ko.observable(),
    hash = "",
    oc;
    
    return {
        viewAttached : function() {
            var that = this;
            oc= offcanvas("#refresh", { enableTouch : false });
            pagelayout.offcanvasLayout(oc);
            prettyPrint();    
            utils.ScrollTo('#' + that.hash);
		    refresh("#playground-refresh", { breakpoint : 80, onRelease : function() {
					var self = this;
					setTimeout(function() {
						var preload = new Image();
						preload.onload = function() {
							document.getElementById("random-image").src = this.src;
							self.slideUp();
							utils.ScrollTo("#refresh #playground")
						};
						preload.src = 'http://lorempixel.com/800/600/?'+ (new Date().getTime());
					}, 1000);
				}
			}).on();	            
        },                    
        activePage : activePage,  
        activate: function (args) {
            var that = this;
            
            if (args.page != undefined) {                
                that.hash = args.page;            
                utils.ScrollTo('#refresh #' + that.hash);
            }
            ga('send', 'pageview');
        },
        scrollToBody : function() {
            utils.ScrollTo("body");
        }
    };
});