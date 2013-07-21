(function (Stashy, $, undefined) {
    'use strict';
    var toggle = (function () {

        function toggle(sltor, useropt) {

            var element = $(((sltor || "") + ".st-toggle") || ".st-toggle");
            
            if (element[0] == undefined || element.data("st-toggle") == true) {
                return false;
            } 
                                    
            this.element = element;
            
            this.element.data("st-toggle", true);
            this.menu = this.element.find(".st-toggle-navigation"),
            this.menulink = this.element.find(".st-toggle-menu-link");            
            this.enabled = false;
            
            this.options = {
                closeOnClickOutside : true,
                closeOnClick : true,
                fixed : false
            };
            $.extend(this.options || {}, useropt);
        }

        toggle.prototype.layout = function () {
            var self = this;
            
            if (this.element ==  null) return;            
                
            $("html").addClass("js");
            
            this.menulink.click(function(event) {
                self.menulink.toggleClass('active');
                self.menu.toggleClass('active');
                event.stopPropagation();
                return false;
            });

            if (this.options.fixed) {
                self.element.addClass("st-toggle-fixed");
            }
            
            if (this.options.closeOnClickOutside) {
                var self = this;
                self.element.on("click", function(event) {
                    event.stopPropagation();
                });
                $("html").on("click", function() {
                    self.close();                    
                });            
            }
            
            if (this.options.closeOnClick) {
                this.element.find("a:not('.st-toggle-menu-link')")
                    .on("click", function() {
                    self.close();
                });
            }
            
            this.enabled = true;
            
            return this;
        }

        toggle.prototype.close = function() {
            this.menu.removeClass('active');
        }
        
        return toggle;

    })();

    Stashy.Toggle = function(sltor, options) {
	    return new toggle(sltor, options);
	}

})(window.Stashy || (window.Stashy = {}), jQuery);