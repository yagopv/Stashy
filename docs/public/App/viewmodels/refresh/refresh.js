define(['durandal/app','lib/pagelayout','lib/prettify'], function (app, pagelayout, prettify) {
    var activePage = ko.observable(),
    hash = "",
    oc;
    
    return {
        attached : function() {
            var that = this;
            oc= Stashy.OffCanvas("#refresh", { enableTouch : false });
            pagelayout.offcanvasLayout(oc);
            prettyPrint();    
            Stashy.Utils.ScrollTo('#' + that.hash);
		    Stashy.Refresh("#playground-refresh", { breakpoint : 80, onRelease : function() {
					var self = this;
					setTimeout(function() {
						var preload = new Image();
						preload.onload = function() {
							document.getElementById("random-image").src = this.src;
							self.slideUp();
							Stashy.Utils.ScrollTo("#refresh #playground")
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
            Stashy.Utils.ScrollTo("body");
        },
        scrollToPlayground : function() {
            Stashy.Utils.ScrollTo("#playground");
        }
    };
});