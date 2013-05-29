(function (Stashy, $, undefined) {    

    var flyout = (function () {        

        function flyout(sltor, useropt) {                            
            
            var element = $(((sltor || "") + ".st-flyout") || ".st-flyout");
            
            if (element[0] == undefined || element.data("st-flyout") == true) {
                return false;
            } 
                                  
            this.element = element;
            
            this.container = this.element.find(".st-flyout-container"); 
            this.element.data("st-flyout", true);
            this.enabled = false;
            this.options = {     
                slideType : "push",
                closeOnClickOutside : true 
            };               
            $.extend(this.options || {}, useropt);
        }

        flyout.prototype.layout = function() {
            if (this.element ==  null) return;
            
            this.element.find(".st-flyout-toggle").on("click", function(event) {
                $(this).closest(".st-flyout-container").toggleClass("active-menu");
                event.stopPropagation();
                return false;
            });
            if (this.options.slideType == "reveal") {
                this.element.find(".st-flyout-container").addClass("st-reveal");
            }
            else {
                this.element.find(".st-flyout-container").addClass("st-push");
            }

            if (this.options.closeOnClickOutside) {
                var self = this;
                this.element.on("click", function() {
                    self.close();                    
                });
            }

            this.enabled = true;
            return this;
        }

        flyout.prototype.open = function() {
            if (this.element ==  null) return;
            this.container.addClass("active-menu");
        }

        flyout.prototype.close = function() {
            if (this.element ==  null) return;
            this.container.removeClass("active-menu");
        }
        
        return flyout;

    })();

    Stashy.Flyout = function(sltor, options) {
	    return new flyout(sltor, options);
	}

})(window.Stashy || (window.Stashy = {}), jQuery)