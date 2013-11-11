/**
 * Drag down and release, refresh control
 * @class Stashy.Refresh
*/
(function (Stashy, $, undefined) {   

    var refresh = (function () {        

        /**
         * Handle touch events         
         * @function
         * @private
         * @param {EventObject} ev - The event object
         */          
        var handleHammer = function(ev) {
            var self = this;

            switch(ev.type) {

                case 'touch':
                    hide.apply(self);
                    break;

                case 'release':
                    if(!this.dragged_down) {
                        return;
                    }
                    
                    cancelAnimationFrame(this.anim);
                    
                    if(this.slidedown_height >= this.options.breakpoint) {
                        self.element.addClass('pullrefresh-loading');
                        self.icon.addClass('st-refresh-icon loading');
                        setHeight.apply(self,[60]);
                        this.options.onRelease.call(self);
                    }
                    else {
                        self.pullrefresh.addClass('slideup');
                        self.element.addClass('pullrefresh-slideup');
                        hide.apply(this);
                    }
                    break;

                case 'dragdown':
                    this.dragged_down = true;

                    var scrollY = window.scrollY;
                    if(scrollY > 5) {
                        return;
                    } else if(scrollY !== 0) {
                        window.scrollTo(0,0);
                    }

                    if(!this.anim) {
                        updateHeight.apply(self);
                    }
                    
                    ev.gesture.preventDefault();
                    
                    this.slidedown_height = ev.gesture.deltaY * 0.4;
                    break;
            }
        }
                
        /**
         * Hide refresh         
         * @function
         * @private
         */          
        var hide = function() {
            this.element[0].className = 'st-refresh';
            this.slidedown_height = 0;
            setHeight.apply(this, [0]);
            cancelAnimationFrame(this.anim);
            this.anim = null;
            this.dragged_down = false;
        }
		
        /**
         * Set refresh height 
         * @function
         * @private
         * @param {int} height - The height
         */           
		var setHeight = function(height) {
			if(Modernizr.csstransforms3d) {
				this.element[0].style.transform = 'translate3d(0,'+height+'px,0) ';
					this.element[0].style.oTransform = 'translate3d(0,'+height+'px,0)';
					this.element[0].style.msTransform = 'translate3d(0,'+height+'px,0)';
					this.element[0].style.mozTransform = 'translate3d(0,'+height+'px,0)';
					this.element[0].style.webkitTransform = 'translate3d(0,'+height+'px,0) scale3d(1,1,1)';
				}
				else if(Modernizr.csstransforms) {
					this.element[0].style.transform = 'translate(0,'+height+'px) ';
					this.element[0].style.oTransform = 'translate(0,'+height+'px)';
					this.element[0].style.msTransform = 'translate(0,'+height+'px)';
					this.element[0].style.mozTransform = 'translate(0,'+height+'px)';
					this.element[0].style.webkitTransform = 'translate(0,'+height+'px)';
				}
				else {
					this.element[0].style.top = height+"px";
				}
		}	
		
        /**
         * Update refresh height 
         * @function
         * @private
         */            
        var updateHeight = function() {
            var self = this;

            setHeight.apply(this,[this.slidedown_height]);

            if(this.slidedown_height >= this.options.breakpoint){
                this.element.addClass('pullrefresh-breakpoint');
                this.pullrefresh[0].className = 'st-refresh-pullrefresh breakpoint';
                this.icon[0].className = 'st-refresh-icon arrow arrow-up';
            }
            else {
                this.element.removeClass('pullrefresh-breakpoint');
                this.pullrefresh[0].className = 'st-refresh-pullrefresh';
                this.icon[0].className = 'st-refresh-icon arrow';
            }

            this.anim = requestAnimationFrame(function() {
                updateHeight.apply(self);
            });
        }
		
        /**
         * Refresh constructor
         * @constructor
         * param {string} sltor - CSS selector for choosing target elements
         * param {object} useropt - User defined options
         */          
        function refresh(sltor, useropt) {                            
            
            var element = $(((sltor || "") + ".st-refresh") || ".st-refresh");
            
            if (element[0] == undefined) {
                return false;
            } 

            this.element = element;            
            this.pullrefresh = this.element.find(".st-refresh-pullrefresh");
            this.icon = this.element.find(".st-refresh-icon");
			this.slidedown_height = 0;
			this.anim = null;
			this.dragged_down = false;

            this.options = {     
                onRelease : $.noop(),
                breakpoint : 100
            };               

            $.extend(this.options || {}, useropt);
        }

        /**
         * Start refresh layout
         * @method
         * @public
         */            
		refresh.prototype.on = function() {
			var self = this;
			$(this.element).hammer();
			$(this.element).on("touch dragdown release", function(ev) {
				handleHammer.apply(self, [ev]);
			});    
			return this;
		}	

        /**
         * Slide up the refresh control
         * @method
         * @public
         */           
        refresh.prototype.slideUp = function() {
            var self = this;
            cancelAnimationFrame(this.anim);

            this.pullrefresh[0].className = 'st-refresh-pullrefresh slideup';
            this.element[0].className = 'st-refresh pullrefresh-slideup';

            setHeight.apply(this,[0]);

            setTimeout(function() {
                hide.apply(self);
            }, 500);
        }

        return refresh;
		
    })();
    
    /**
     * Build a new Refresh instance
     * @param {string} sltor - CSS selector for choosing target elements
     * @param {object} options - User options for the new instance
    */     
    Stashy.Refresh = function(sltor, options) {
	    return new refresh(sltor, options);
	}

})(window.Stashy || (window.Stashy = {}), jQuery);