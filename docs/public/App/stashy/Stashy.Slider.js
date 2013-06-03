(function (Stashy, $, undefined) {

    function setPaneDimensions(slider) {
        slider.pane_width = slider.element.width();
        slider.panes.each(function() {
            $(this).width(slider.pane_width);
        });
        slider.container.width(slider.pane_width*slider.pane_count);
    }
        
    function setContainerOffset(slider, percent, animate) {
        slider.container.removeClass("animate");
        
        if(animate) {
            slider.container.addClass("animate");
        }
        
        if(Modernizr.csstransforms3d) {            
            slider.container.css("transform", "translate3d("+ percent +"%,0,0) scale3d(1,1,1)");
            
        } else if(Modernizr.csstransforms) {
            slider.container.css("transform", "translate("+ percent +"%,0)");
            
        } else {
            var px = ((slider.pane_width*slider.pane_count) / 100) * percent;
            slider.container.css("left", px+"px");
        }
    }
          
    function showActiveIndicator(indicators, index) {
		indicators.children().each(function() {
			$(this).removeClass("active");
		});
		indicators.find("[data-pane='" + index + "']").addClass("active");
	}
	
	function bindControls(slider) {
		slider.element.find("[data-pane]").on("click", function(event) {
			var pane = event.target.attributes["data-pane"].value;
			if ( pane == "next") {
				slider.next();
			} else if (pane == "prev") {
				slider.prev();
			} else {
				slider.showPane(parseInt(pane));
			}
			slider.options.autoSlide = false;
		});
	}
	
    function handleHammer(ev) {
        var slider = ev.data.slider;
        // disable browser scrolling
        ev.gesture.preventDefault();

        switch(ev.type) {
            case 'dragright':
            case 'dragleft':
                // stick to the finger
                var pane_offset = -(100/slider.pane_count)*slider.current_pane;
                var drag_offset = ((100/slider.pane_width)*ev.gesture.deltaX) / slider.pane_count;

                // slow down at the first and last pane
                if((slider.current_pane == 0 && ev.gesture.direction == Hammer.DIRECTION_RIGHT) ||
                    (slider.current_pane == slider.pane_count-1 && ev.gesture.direction == Hammer.DIRECTION_LEFT)) {
                    drag_offset *= .4;
                }

                setContainerOffset(slider,drag_offset + pane_offset);
                break;

            case 'swipeleft':
                slider.next();
                ev.gesture.stopDetect();
                break;

            case 'swiperight':
                slider.prev();
                ev.gesture.stopDetect();
                break;
                
            case 'release':
                // more then 50% moved, navigate
                if(Math.abs(ev.gesture.deltaX) > slider.pane_width/2) {
                    if(ev.gesture.direction == 'right') {
                        slider.prev();
                    } else {
                        slider.next();
                    }
                }
                else {
                    slider.showPane(slider.current_pane, true);
                }
                break;
            }
        }
                              
    var slider = (function () {        

        function slider(sltor, useropt) {                            
            var self = this;
            
            var element = $(((sltor || "") + ".st-slider") || ".st-slider");
            
            if (element[0] == undefined) {
                return false;
            } 
            
            this.element = element;
            this.container = $(">.st-slider-panes", element);
            this.panes = $(">.st-slider-panes>li", element);
            this.pane_width = 0;
            this.pane_count = this.panes.length;
            this.current_pane = 0;
            this.options = {
                showControls : true,
                showIndicators : true,
                autoSlide : false,
                enableTouch : false,
                duration: 5000
            }
            $.extend(this.options,useropt);	
        }
        
        return slider;

    })();

    slider.prototype.on = function() {
        var self = this;
        
        if (this.element == undefined) {
            return false;
        }
        
        setPaneDimensions(this);

        $(window).on("load resize orientationchange", function() {
            setPaneDimensions(self);
        });        
				
		if (this.options.showIndicators) {
            this.indicators = $("<ul class='st-slider-indicators'></ul>");
            for(var i=0; i < this.panes.length; i++) {
                this.indicators.append("<li data-pane='" + i + "'></li>");
            }	        
            this.element.append(this.indicators);
            showActiveIndicator(this.indicators, this.current_pane);
        }
        
		if (this.options.showControls) {
            this.controlleft = $("<a class='st-slider-control' data-pane='prev'></a>");
            this.element.append(this.controlleft);
            this.controlright = $("<a class='st-slider-control right' data-pane='next'></a>");
            this.element.append(this.controlright);            
        }
		
		if (this.options.autoSlide) {
            var interval = setInterval(function() {                
                if (self.options.autoSlide) {
                    self.next();
                } else {
                    clearInterval(interval)
                }                
            }, this.options.duration);
        }
        
		bindControls(this);
		
		if (this.options.enableTouch && typeof(Hammer) == 'function') {
			this.element.hammer({ drag_lock_to_axis: true });  
			this.element.on("release dragleft dragright swipeleft swiperight", { slider : this },handleHammer);
		}
		
		return this;
    }
        
    slider.prototype.showPane = function(index) {   
        // between the bounds
        index = Math.max(0, Math.min(index, this.pane_count-1));
        this.current_pane = index;
        if (this.options.showIndicators) {
		  showActiveIndicator(this.indicators, this.current_pane);		
        }
        var offset = -((100/this.pane_count)*this.current_pane);
        setContainerOffset(this,offset, true);
    };    
    
    slider.prototype.next = function() {
        var panetoshow;
        if (this.current_pane + 1 == this.pane_count) {
            panetoshow = 0;       
        } else {
            panetoshow = this.current_pane + 1;
        }
        return this.showPane(panetoshow, true); 
    };
    
    slider.prototype.prev = function() {
        var panetoshow;
        if (this.current_pane - 1 < 0) {
            panetoshow = this.pane_count;       
        } else {
            panetoshow = this.current_pane - 1;
        }        
        return this.showPane(panetoshow, true); 
    };
        
    Stashy.Slider = function(sltor, options) {
	    return new slider(sltor, options);
	}

})(window.Stashy || (window.Stashy = {}), jQuery)
