/**
 * Notification toasts, bars and panels
 * @class Stashy.Notify
*/
(function (Stashy, $, undefined) {

    var notify = (function () {

		/**
		 * Build the Notify object
		 * @constructor
		 * @param {object} useropt - The user options
		*/
        function notify(useropt) {

            this.options = {
                target : "body",
                title : "",               // tile of the notify
                titleSize : 3,            // h* Size
                contentType : "inline",   // 'inline' or 'selector'
                content : "",             // if contentType is text then a string, else the CSS selector of the content to be showed
				style : "default",        // the notification style 'default', 'error', 'success', 'info'
				animDuration : "fast",    // 'fast' or 'slow'
				closeArea : "button", 	  // 'button' or 'element'
                activeDuration : 0 // how long to show notification
            };

            $.extend(this.options || {}, useropt);			
            
            if (this.options.content == "") {
                throw new Error("content cannot be empty");    
            }
            
            this.element = $("<div class='st-notify animated'></div>");  
            
			if (this.options.closeArea == "button") {
				this.element.append("<button type='button' class='st-notify-close'>x</button>");
				this.closeElement = this.element.find(".st-notify-close");
			} else {
				this.closeElement = this.element;
			}			
			
			if (this.options.animDuration == "slow") {
				this.element.addClass("hinge");
			}
			
            if (this.options.title && this.options.titleSize) {
                this.element.append("<h" + this.options.titleSize + ">" 
                                        + this.options.title +
                                    "</h" + this.options.titleSize + ">");
            }

            if (this.options.content) {
                if (this.options.contentType == "inline") {
				    this.element.append(this.options.content);
                } else {                    
                    this.element.append($(this.options.content).html());
                }
            }     

			this.element.addClass(this.options.style)
			
            return this;
        }

		/**
		 * Create a toast container box
		 * @private
         * @function
		 * @param {string} target - CSS selector
         * @param {string} posX - top,bottom
         * @param {string} posY - left,right
		*/        
		function toastContainer(target,posX,posY) {
			var toastC = $(".st-toast-container" + "." + posX + "." + posY);
			if (toastC.length == 0) {
				toastC = $("<div class='st-toast-container " + posX + " " + posY + "'>" + "</div>");				
				$(target).append(toastC);				
			}
			return toastC;
		}
		
		/**
		 * Create a bar container box
		 * @private
         * @function
		 * @param {string} target - CSS selector
         * @param {string} posY - left,right
		*/           
		function barContainer(target,posY) {
			var barC = $(".st-bar-container" + "." + posY);
			if (barC.length == 0) {
				barC = $("<div class='st-bar-container " + posY + "'>" + "</div>");							
				$(target).append(barC);				
			}
			return barC;
		}
		
        /**
         * Create a new toast style Notify element and show it
         * @public
         * @method
         * @param {string} positionX - 'right' or 'left'
		 * @param {string} positionX - 'top' or 'bottom'
		 * @param {string} radius - true => apply radius to toast
        */
        notify.prototype.toast = function(positionX, positionY, radius) {
			var self = this,
			    toastC = toastContainer(this.options.target,positionX, positionY),
                hide = function() {
                    self.element.addClass("fadeOut");
                    setTimeout(function() {
                        //Check for self because activeDurantion can be enabled
                        if (self) {
                            self.element.remove();
                            self = null;
                        }
                        if (toastC.children().length == 0) {
                            toastC.remove();					
                        }				
                        
                    }, self.options.animDuration == "fast" ? 1000 : 2000);
                };
			this.element.addClass((radius ? "radius" : " ") + " " + "fadeIn");
			toastC.append(this.element);
            
            if (self.options.activeDuration > 0) {
                setTimeout(hide, self.options.activeDuration);
            }
            
			this.closeElement.on("click", hide);
        }

		/**
         * Create a new bar style Notify element and show it
         * @public
         * @method
		 * @param {string} positionX - 'top' or 'bottom'
        */
        notify.prototype.bar = function(positionY) {
			var self = this,
			    barC = barContainer(this.options.target,positionY),
                hide = function() {
                    self.element.addClass(positionY == "top" ? "fadeOutUp" : "fadeOutDown");
                    setTimeout(function() {
                        //Check for self because activeDurantion can be enabled
                        if (self) {
                            self.element.remove();
                            self = null;
                        }
                        if (barC.children().length == 0) {
                            barC.remove();					
                        }				
                    }, self.options.animDuration == "fast" ? 1000 : 2000);
                };
			this.element.addClass(positionY == "top" ? "fadeInDown" : "fadeInUp");
			barC.append(this.element);
            
            if (self.options.activeDuration > 0) {
                setTimeout(hide, self.options.activeDuration);
            }
            
			this.closeElement.on("click", hide);			
        }
		
		/**
         * Create a new panel style Notify element and show it
         * @public
         * @method
         * @param {string} positionX - 'right' or 'left'
        */
        notify.prototype.panel = function(positionX) {
			var self = this,
                hide = function() {
                    self.element.addClass(positionX == "left" ? "fadeOutLeft" : "fadeOutRight");
                    setTimeout(function() {
                        //Check for self because activeDurantion can be enabled
                        if (self) {
                            self.element.remove();
                            self = null;
                        }
                    }, self.options.animDuration == "fast" ? 1000 : 2000);
                };
			this.element.addClass("panel " + positionX)
			this.element.addClass(positionX == "left" ? "fadeInLeft" : "fadeInRight");
			$(this.options.target).append(this.element);
            
            if (self.options.activeDuration > 0) {
                setTimeout(hide, self.options.activeDuration);
            }
            
			this.closeElement.on("click", hide);				
        }
				
        return notify;

    })();

    /**
     * Build a new Notify instance
     * @param {string} sltor - CSS selector for choosing target elements
     * @param {object} options - User options for the new instance
    */     
	Stashy.Notify = function(sltor, options) {
	    return new notify(sltor, options);
	}

})(window.Stashy || (window.Stashy = {}), jQuery);