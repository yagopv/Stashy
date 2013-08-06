(function (Stashy, $, undefined) {

    var notify = (function () {

		/**
		 * Construct the Notify object
		 * @constructor
		 * @param {object} useropt - The user options
		*/
        function notify(useropt) {

            this.options = {
                title : "",             // tile of the notify
                titleSize : 3,            // h* Size
                contentType : "text",     // text or html
                content : "",           // if contentType is text then a string, else the CSS selector of the content to be showed
				style : "default",        // the notification style 'default', 'error', 'success', 'info'
				animDuration : "fast",    // 'fast' or 'slow'
				closeArea : "button" 	  // 'button' or 'element'
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
                if (this.options.contentType == "html") {
					if (this.options.content.indexOf("<") != -1) {
						// is content
						this.element.append($(this.options.content));
					} else {
						// is CSS selector
						this.element.append($(this.options.content).html());
					}                    
                } else {
                    this.element.append(this.options.content);
                }
            }     

			this.element.addClass(this.options.style)
			
            return this;
        }

		function toastContainer(posX,posY) {
			var toastC = $(".st-toast-container" + "." + posX + "." + posY);
			if (toastC.length == 0) {
				toastC = $("<div class='st-toast-container " + posX + " " + posY + "'>" + "</div>");				
				$("body").append(toastC);				
			}
			return toastC;
		}
		
		function barContainer(posY) {
			var barC = $(".st-bar-container" + "." + posY);
			if (barC.length == 0) {
				barC = $("<div class='st-bar-container " + posY + "'>" + "</div>");							
				$("body").append(barC);				
			}
			return barC;
		}
		
        /**
         * Create a new toast style Notify element and show it
         * @method
         * @param {string} positionX - 'right' or 'left'
		 * @param {string} positionX - 'top' or 'bottom'
		 * @param {string} radius - true => apply radius to toast
        */
        notify.prototype.toast = function(positionX, positionY, radius) {
			var self = this,
			    toastC = toastContainer(positionX, positionY);			
			this.element.addClass((radius ? "radius" : " ") + " " + "fadeIn");
			toastC.append(this.element);
			this.closeElement.on("click", function() {
				self.element.addClass("fadeOut");
				setTimeout(function() {
					self.element.remove();
					if (toastC.children().length == 0) {
						toastC.remove();					
					}				
					self = null;				
				}, self.options.animDuration == "fast" ? 1000 : 2000);
			});
        }

		/**
         * Create a new bar style Notify element and show it
         * @method
		 * @param {string} positionX - 'top' or 'bottom'
        */
        notify.prototype.bar = function(positionY) {
			var self = this,
			    barC = barContainer(positionY);
			this.element.addClass(positionY == "top" ? "fadeInDown" : "fadeInUp");
			barC.append(this.element);
			this.closeElement.on("click", function() {
				self.element.addClass(positionY == "top" ? "fadeOutUp" : "fadeOutDown");
				setTimeout(function() {
					self.element.remove();
					if (barC.children().length == 0) {
						barC.remove();					
					}				
					self = null;
				}, self.options.animDuration == "fast" ? 1000 : 2000);
			});			
        }
		
		/**
         * Create a new panel style Notify element and show it
         * @method
         * @param {string} positionX - 'right' or 'left'
        */
        notify.prototype.panel = function(positionX) {
			var self = this;
			this.element.addClass("panel " + positionX)
			this.element.addClass(positionX == "left" ? "fadeInLeft" : "fadeInRight");
			$("body").append(this.element);
			this.closeElement.on("click", function() {
				self.element.addClass(positionX == "left" ? "fadeOutLeft" : "fadeOutRight");
				setTimeout(function() {
					self.element.remove();
					self = null;
				}, self.options.animDuration == "fast" ? 1000 : 2000);
			});				
        }
				
        return notify;

    })();

	Stashy.Notify = function(sltor, options) {
	    return new notify(sltor, options);
	}

})(window.Stashy || (window.Stashy = {}), jQuery);