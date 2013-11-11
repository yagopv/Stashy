/**
 * Hidden menu
 * @class Stashy.Menu
*/
(function (Stashy, $, undefined) {

    var menu = (function () {

        /**
		 * Constructor
		 * @constructor
         * @param {string} selector - Menu selector
		 * @param {object} useropt - The user options
		*/
        function menu(sltor, useropt) {     
            
            if (!sltor || sltor == "") {
                throw new Error("Stashy.Menu:You need to provide a selector");
            }
            
            if (Modernizr && !Modernizr.csstransforms && !Modernizr.csstransforms3d) {
                throw new Error("Stashy.Menu:Your browser is not supported");
            }
            
            var element = $(sltor);
            
            if (element[0] == undefined) {
                throw new Error("Stashy.Menu:The element you tried to select is not valid or not exists");
            }
            
            this.element = element;

            this.options = {
                enableTouch : false,
                closeOnClick : false,
                closeOnClickOutside : false
            };
            
            $.extend(this.options || {}, useropt);			
        }

        /**
		 * Handle touch events
		 * @private
         * @function
         * @param {event} ev - Hammer Event
		*/
        var handleHammer = function(ev) {
            var menu = ev.data.menu;
            
            // disable browser scrolling
            ev.gesture.preventDefault();
            ev.stopPropagation();
            
            if ((menu.hasClass("left") && ev.type == "dragleft") ||
                (menu.hasClass("right") && ev.type == "dragright") ||
                (menu.hasClass("top") && ev.type == "dragup") ||
                (menu.hasClass("bottom") && ev.type == "dragbottom")) {
                 menu.removeClass("active"); 
            } else {
                 menu.addClass("active");     
            }        
            
            ev.gesture.stopDetect();
        }

        /**
		 * Initialize Menu
		 * @public
         * @method
		*/        
        menu.prototype.on = function() {
            var self = this;                        
            
            this.element.find(".st-menu-toggle")
                .on("click", function() {
                    self.element.toggleClass("active");
                    return false;
                });
            
            this.element.find(".st-menu-toggle-sublist")
                .on("click", function(event) {
                    $(this).children(".st-menu-sublist").toggleClass("active");
                    return false;
                }); 
            
            if (self.options.closeOnClick) {
                self.element.find("a").not(".st-menu-toggle")
                    .on("click", function() {
                    self.close();    
                    return false;
                });                
            }

            if (self.options.closeOnClickOutside) {
                self.element.on("click", function(event) {
                    event.stopPropagation();
                    return false;
                });
                $("html").on("click", function() {
                    self.close();
                    return false;                    
                });            
            }

            if (self.options.enableTouch && typeof(Hammer) == 'function' && Modernizr.touch) {
                self.element.hammer({ drag_lock_to_axis: true });
                if (self.element.hasClass("left") || self.element.hasClass("right")) {
                    self.element.on("dragleft dragright", { menu : self.element }, handleHammer);
                } else {
                    self.element.on("dragup dragdown", { menu : self.element }, handleHammer);
                }
		    }
            
            return this;
        }

        /**
		 * Open menu
		 * @public
         * @method
		*/        
        menu.prototype.open = function() {
            this.element.addClass("active");
        }

        /**
		 * Close menu
		 * @public
         * @method
		*/        
        menu.prototype.close = function() {
            this.element.removeClass("active");
        }

        return menu;

    })();
    
    /**
     * Build a new Menu instance
     * @param {string} sltor - CSS selector for choosing target elements
     * @param {object} options - User options for the new instance
    */     
	Stashy.Menu = function(sltor, options) {
	    return new menu(sltor, options);
	}
    
})(window.Stashy || (window.Stashy = {}), jQuery);