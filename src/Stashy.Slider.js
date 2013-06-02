(function (Stashy, $, undefined) {

    (function() {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame =
                    window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                        timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };

        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
    }());


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
          
    function handleHammer(ev) {
        var slider = ev.data.slider;
        console.log(ev);
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
            this.container = $(">ul", element);
            this.panes = $(">ul>li", element);
            this.pane_width = 0;
            this.pane_count = this.panes.length;
            this.current_pane = 0;
        }
        
        return slider;

    })();

    slider.prototype.on = function() {
        var self = this;
        setPaneDimensions(this);

        $(window).on("load resize orientationchange", function() {
            setPaneDimensions(self);
        });
        
        this.element.hammer({ drag_lock_to_axis: true });  
        this.element.on("release dragleft dragright swipeleft swiperight", { slider : this },handleHammer);
    }
        
    slider.prototype.showPane = function(index) {
        // between the bounds
        index = Math.max(0, Math.min(index, this.pane_count-1));
        this.current_pane = index;
        var offset = -((100/this.pane_count)*this.current_pane);
        setContainerOffset(this,offset, true);
    };    
    
    slider.prototype.next = function() { return this.showPane(this.current_pane+1, true); };
    slider.prototype.prev = function() { return this.showPane(this.current_pane-1, true); };
        
    Stashy.Slider = function(sltor, options) {
	    return new slider(sltor, options);
	}

})(window.Stashy || (window.Stashy = {}), jQuery)
