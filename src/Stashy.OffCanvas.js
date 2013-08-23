(function (Stashy, $, undefined) {
    "use strict";    
    var offcanvas = (function () {

        function offcanvas(sltor, useropt) {     
            
            var element = $(((sltor || "") + ".st-offcanvas") || ".st-offcanvas");
            
            if (element[0] == undefined || element.data("st-offcanvas") == true) {
                return false;
            }
            
            this.element = element;

            this.showmenuselector = this.element.find(".showmenubutton");
            this.showadditionalselector = this.element.find(".showadditionalbutton");
            this.menu = this.element.find(".st-offcanvas-menu");
            this.main = this.element.find(".st-offcanvas-main");
            this.additional = this.element.find(".st-offcanvas-additional");
            this.element.data("st-offcanvas", true);
            this.enabled = false;
            this.options = {     
                onMobileLayout : $.noop,
                onTabletLayout : $.noop,
                onDesktopLayout : $.noop,
				useTransitions : true,
                closeOnClickOutside : true,
                enableTouch : false
            
            };
            $.extend(this.options || {}, useropt);			
        }

        var onmobilelayout = function(self) {
            self.showadditionalselector.css("visibility","visible");
            self.showmenuselector.css("visibility","visible");
        }

        var ontabletlayout = function(self) {
            self.showadditionalselector.css("visibility","visible");
            self.showmenuselector.css("visibility","hidden");
        }            

        var ondesktoplayout = function(self) {
            self.showadditionalselector.css("visibility","hidden");
            self.showmenuselector.css("visibility","hidden");
        }    
                        
        var bindResize = function(self) {
            var width = $(window).width();
            if (width < 768) {
                onmobilelayout(self);
                self.options.onMobileLayout();
            } else if (width >= 768 && width < 978) {
                ontabletlayout(self);
                self.options.onTabletLayout();
            } else {
                ondesktoplayout(self);
                self.options.onDesktopLayout();
            }
        };

        var handleHammer = function(ev) {
            var offcanvas = ev.data.offcanvas;
    
            // disable browser scrolling
            ev.gesture.preventDefault();
            ev.stopPropagation();
            
            switch(ev.type) {
                case 'swipeleft':  
                case 'dragleft':  
                    if (offcanvas.element.hasClass("active-menu")) {
                        offcanvas.element.removeClass("active-menu");
                    } else {
                        if (offcanvas.additional.length > 0) {
                            offcanvas.element.addClass("active-additional");
                        }
                    }                                        
                    ev.gesture.stopDetect();
                    break;
    
                case 'swiperight':
                case 'dragright':  
                    if (offcanvas.element.hasClass("active-additional")) {
                        offcanvas.element.removeClass("active-additional");                        
                    } else {
                        if (offcanvas.menu.length > 0) {
                            offcanvas.element.addClass("active-menu");
                        }
                    }                                        
                    ev.gesture.stopDetect();
                    break;
            }
        }
                
        offcanvas.prototype.layout = function() {
            if (this.element ==  null) return;
            
            var self = this;
			
            $("html").addClass("js");
            
            this.showmenuselector.on("click", function(event) {                
               self.element.toggleClass("active-menu");
               event.stopPropagation();
               return false;
            });
            this.showadditionalselector.on("click", function(event) {
                self.element.toggleClass("active-additional");                
                event.stopPropagation();
                return false;
            });
            if (this.element.find(".st-offcanvas-additional").length == 0) {
                this.element.addClass("no-additional");
            } 
            if (this.element.find(".st-offcanvas-menu").length == 0) {
                this.element.addClass("no-menu");
            } 
            
            if (this.options.closeOnClickOutside) {
                var self = this;
                this.element.on("click", function() {
                    self.close();                    
                });
            }
                        
            $(window).on("debouncedresize", function() {
                bindResize(self);
                return false;
            });

            bindResize(self);
            
			if (self.options.useTransitions) {
				this.element.addClass("active-transitions");
			}
			
            if (this.options.enableTouch && typeof(Hammer) == 'function' && Modernizr.touch) {
                this.element.hammer({ drag_lock_to_axis: true });  
                this.element.on("swipeleft swiperight dragleft dragright", { offcanvas : this },handleHammer);
		    }
            
            this.enabled = true;
            return this;
        }

        offcanvas.prototype.close = function() {
            if (this.element ==  null) return;
            
            this.element.removeClass("active-menu active-additional");
        }
        
        return offcanvas;

    })();
    
	Stashy.OffCanvas = function(sltor, options) {
	    return new offcanvas(sltor, options);
	}
    
})(window.Stashy || (window.Stashy = {}), jQuery);
