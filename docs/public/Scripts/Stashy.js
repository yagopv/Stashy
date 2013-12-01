/**
 * Defines Events used in this library
 * @class Stashy.Events
*/
(function(window,$,undefined) {

var $event = $.event,
	$special,
	resizeTimeout;

/**
 * Triggered when the window finish the resive.
 * @event deboundedresize
 */    
$special = $event.special.debouncedresize = {
	setup: function() {
		$( this ).on( "resize", $special.handler );
	},
	teardown: function() {
		$( this ).off( "resize", $special.handler );
	},
	handler: function( event, execAsap ) {
		// Save the context
		var context = this,
			args = arguments,
			dispatch = function() {
				// set correct event type
				event.type = "debouncedresize";
				$event.dispatch.apply( context, args );
			};

		if ( resizeTimeout ) {
			clearTimeout( resizeTimeout );
		}

		execAsap ?
			dispatch() :
			resizeTimeout = setTimeout( dispatch, $special.threshold );
	},
	threshold: 150
};

})(window,jQuery);
/**
 * Utilities for being used in this library
 * @class Stashy.Utils
*/

/**
 * Request Animation Frame
 */
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

(function (Stashy, $, undefined) {    
    
    Stashy.Utils = {     
        /**
         * Scroll to position using animation
         * @param {string} goTo - CSS Selector
         * @param {int} duration - Animation duration
         * @param {easing} easing - Easing function to apply
         * @param {function} oncomplete - callback function
        */
        ScrollTo : function(goTo, duration, easing, oncomplete) {
            
            if ($(goTo).length == 0) return;
            
            var options = { };
            
            if (duration && duration > 0) {
                options.duration = duration;
            }
            
            if (easing) {
                options.easing = easing;
            }
                        
            if (oncomplete) {
                options.complete = oncomplete; 
            }
            
            $('html,body').animate({ scrollTop: $(goTo).offset().top },  options);   
            
        }        
    }
    
})(window.Stashy || (window.Stashy = {}), jQuery);
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms-csstransforms3d-teststyles-testprop-testallprops-prefixes-domprefixes
 */
;

window.Modernizr = (function( window, document, undefined ) {

    var version = '2.6.2',

    Modernizr = {},


    docElement = document.documentElement,

    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    inputElem  ,


    toString = {}.toString,

    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),



    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),


    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, 


    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node, docOverflow,
          div = document.createElement('div'),
                body = document.body,
                fakeBody = body || document.createElement('body');

      if ( parseInt(nodes, 10) ) {
                      while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

                style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
          (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
                fakeBody.style.background = '';
                fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
        if ( !body ) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
      } else {
          div.parentNode.removeChild(div);
      }

      return !!ret;

    },
    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) { 
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }


    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    function setCss( str ) {
        mStyle.cssText = str;
    }

    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    function is( obj, type ) {
        return typeof obj === type;
    }

    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }

    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                            if (elem === false) return props[i];

                            if (is(item, 'function')){
                                return item.bind(elem || obj);
                }

                            return item;
            }
        }
        return false;
    }

    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

            if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

            } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }


    tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
    };


    tests['csstransforms3d'] = function() {

        var ret = !!testPropsAll('perspective');

                        if ( ret && 'webkitPerspective' in docElement.style ) {

                      injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
            ret = node.offsetLeft === 9 && node.offsetHeight === 3;
          });
        }
        return ret;
    };
    
   tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
            bool = node.offsetTop === 9;
          });
        }

        return bool;
    };
    
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
                                    featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }



     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
                                              return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr; 
     };


    setCss('');
    modElem = inputElem = null;


    Modernizr._version      = version;

    Modernizr._prefixes     = prefixes;
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;



    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };

    Modernizr.testAllProps  = testPropsAll;


    Modernizr.testStyles    = injectElementWithStyles;
    return Modernizr;

})(this, this.document);
;
/**
 * OffCanvas layout with menu, additional and main
 * @class Stashy.OffCanvas
*/
(function (Stashy, $, undefined) {
    "use strict";    
    var offcanvas = (function () {

        /**
         * OffCanvas constructor
         * @constructor
         * param {string} sltor - CSS selector for choosing target elements
         * param {object} useropt - User defined options
         */          
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

        /**
         * What to do when mobile size reached
         * @function
         * @private
         * param {object} self - The target element
         */
        var onmobilelayout = function(self) {
            self.showadditionalselector.css("visibility","visible");
            self.showmenuselector.css("visibility","visible");
        }

        /**
         * What to do when tablet size reached
         * @function
         * @private
         * param {object} self - The target element
         */        
        var ontabletlayout = function(self) {
            self.showadditionalselector.css("visibility","visible");
            self.showmenuselector.css("visibility","hidden");
        }            

        /**
         * What to do when desktop size reached
         * @function
         * @private
         * param {object} self - The target element
         */        
        var ondesktoplayout = function(self) {
            self.showadditionalselector.css("visibility","hidden");
            self.showmenuselector.css("visibility","hidden");
        }    
                   
        /**
         * Bind sizes to resize functions
         * @function
         * @private
         * param {object} self - The target element
         */        
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

        /**
         * Handle touch events
         * @function
         * @private
         * param {EventObject} ev - The event object
         */        
        var handleHammer = function(ev) {
            var offcanvas = ev.data.offcanvas;

            // only horizontal swipe
            if (Hammer.utils.isVertical(ev.gesture.direction)) {
                   return;
            }
            
            // disable browser scrolling
            ev.gesture.preventDefault();
            ev.stopPropagation();
            
            switch(ev.type) {
                case 'swipeleft':  
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
              
        /**
         * Start OffCanvas layout
         * Call always after creating new instance
         * @method
         * @public 
         */        
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
                this.element.on("swipeleft swiperight", { offcanvas : this },handleHammer);
		    }
            
            this.enabled = true;
            return this;
        }

        /**
         * Close open menu or additional
         * @method
         * @public 
         */          
        offcanvas.prototype.close = function() {
            if (this.element ==  null) return;
            
            this.element.removeClass("active-menu active-additional");
        }
        
        return offcanvas;

    })();
    
    /**
     * Build a new OffCanvas instance
     * @param {string} sltor - CSS selector for choosing target elements
     * @param {object} options - User options for the new instance
    */     
	Stashy.OffCanvas = function(sltor, options) {
	    return new offcanvas(sltor, options);
	}
    
})(window.Stashy || (window.Stashy = {}), jQuery);

/**
 * Layout with left hidden menu
 * @class Stashy.Flyout
*/
(function (Stashy, $, undefined) {   

    var flyout = (function () {      

        /**
         * Flyout constructor
         * @constructor
         * param {string} sltor - CSS selector for choosing target elements
         * param {object} useropt - User defined options
         */        
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
                closeOnClickOutside : true,
                enableTouch : false
            };               
            $.extend(this.options || {}, useropt);
        }

        /**
         * Handle touch events
         * @private
         * param {EventObject} ev - event object
         */         
        var handleHammer = function(ev) {
            var flyout = ev.data.flyout;
    
            // only horizontal swipe
            if (Hammer.utils.isVertical(ev.gesture.direction)) {
                   return;
            }

            // disable browser scrolling
            ev.gesture.preventDefault();
            ev.stopPropagation();
            switch(ev.type) {
                case 'swipeleft':
                    flyout.close();
                    ev.gesture.stopDetect();
                    break;
    
                case 'swiperight':
                    flyout.open();
                    ev.gesture.stopDetect();
                    break;
            }
        }
                
        /**
         * Checks if the browser is the Android stock one
         * @private
         */           
        var isAndroidStockBrowser = function() {
            var nua = navigator.userAgent;
            return ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1) && !(nua.indexOf('Chrome') > -1));
        }

        /**
         * Start the Flyout layout
         * Call always after creating a new instance
         * @public
         */           
        flyout.prototype.layout = function() {
            if (this.element ==  null) return;
            
            $("html").addClass("js");
            
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
            if (Modernizr && Modernizr.csstransforms3d && !isAndroidStockBrowser()) {
                this.element.find(".st-flyout-container").addClass("active-transforms");
            }            

            if (this.options.closeOnClickOutside) {
                var self = this;
                this.element.on("click", function() {
                    self.close();                    
                });
            }

            if (this.options.enableTouch && typeof(Hammer) == 'function' && Modernizr.touch) {
                this.element.hammer({ drag_lock_to_axis: true });  
                this.element.on("swipeleft swiperight", { flyout : this },handleHammer);
		    }
            
            this.enabled = true;
            return this;
        }

        /**
         * Open Flyout menu
         * @public
         */         
        flyout.prototype.open = function() {
            if (this.element ==  null) return;
            this.container.addClass("active-menu");
        }

        /**
         * Close Flyout menu
         * @public
         */         
        flyout.prototype.close = function() {
            if (this.element ==  null) return;
            this.container.removeClass("active-menu");
        }
        
        return flyout;

    })();

    /**
     * Build a new Flyout instance
     * @param {string} sltor - CSS selector for choosing target elements
     * @param {object} options - User options for the new instance
    */      
    Stashy.Flyout = function(sltor, options) {
	    return new flyout(sltor, options);
	}

})(window.Stashy || (window.Stashy = {}), jQuery);
/**
 * Main menu that can be fixed to top
 * @class Stashy.Toggle
*/
(function (Stashy, $, undefined) {
    'use strict';
    var toggle = (function () {

        /**
        * Toggle constructor
        * @constructor
        * param {string} sltor - CSS selector for choosing target elements
        * param {object} useropt - User defined options
        */            
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

        /**
         * Start the Toggle layout
         * Call always after creating a new instance
         * @public
         */            
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

        /**
         * Close Toggle menu
         * @public
         * @method
         */            
        toggle.prototype.close = function() {
            this.menu.removeClass('active');
        }
        
        return toggle;

    })();

    /**
     * Build a new Toggle instance
     * @param {string} sltor - CSS selector for choosing target elements
     * @param {object} options - User options for the new instance
    */     
    Stashy.Toggle = function(sltor, options) {
	    return new toggle(sltor, options);
	}

})(window.Stashy || (window.Stashy = {}), jQuery);
/**
 * Responsive images based in the focal point technique
 * @class Stashy.FocalPoint
*/
(function (Stashy, $, undefined) {    

    var focalpoint = (function () {        

        /**
         * FocalPoint constructor
         * @constructor
         * param {string} sltor - CSS selector for choosing target elements
         */          
        function focalpoint(sltor) {
            this.selector = sltor || "img";
        }

        /**
         * Find selected images and apply necessary HTML and CSS
         * @public
         * @param {string} pointA - X axis
         * @param {string} pointB - Y axis
         */           
        focalpoint.prototype.on = function(pointA, pointB) {			
			pointA = pointA || "";
			pointB = pointB || "";            		
			$(this.selector).each(function() {	
				if (!$(this).parent().hasClass("st-image-container")) {
					$image  = $(this).wrap("<div class='st-image " + pointA + " " + pointB + "" + ($(this).height() > $(this).width()  ? " portrait" : "") + "'>");             
					$image.wrap("<div class='st-image-container' />");
				}
			});
        }
        
        /**
         * Update selected iamges
         * @public
         * @param {string} pointA - X axis
         * @param {string} pointB - Y axis
         */          
        focalpoint.prototype.update = function(pointA, pointB) {			
			pointA = pointA || "";
			pointB = pointB || "";
			$(this.selector).each(function() {
				$(this).closest(".st-image").removeAttr("class").addClass("st-image " + pointA + " " + pointB + ($(this).height() > $(this).width()  ? " portrait" : ""));
			});			
        }
		
        /**
         * Return image to the original state
         * @public
         */          
        focalpoint.prototype.off = function() {
			$(this.selector).each(function() {		
				if ($(this).parent().hasClass("st-image-container")) {
					$(this).unwrap();				
					if ($(this).parent().hasClass("st-image")) {
						$(this).unwrap();				
					}					
				}								
			});
        }

        return focalpoint;

    })();

    /**
     * Build a new FocalPoint instance
     * @param {string} sltor - CSS selector for choosing target elements
     * @param {object} options - User options for the new instance
    */         
    Stashy.FocalPoint = function(sltor, options) {
	    return new focalpoint(sltor, options);
	}

})(window.Stashy || (window.Stashy = {}), jQuery);
/**
 * Ajax Loader based to de windows Modern UI one
 * @class Stashy.Loader
*/
(function (Stashy, $, undefined) {    

    var loader = (function () {        

        /**
         * Loader constructor
         * @constructor
         * param {string} target - CSS selector for choosing target elements
         */          
        function loader(target) {                                 
           var self = this;
           this.target = target;
        }

        /**
         * Create and show the Loader         
         * @public
         * @param {string} position - CSS position
         * @param {string} offset - Offset from position
         * @param {string} color - Hexa color
         * @param {string} insertiontype - append or prepend
         */              
        loader.prototype.on = function(position, offset, color, insertiontype) {
            var self = this;            
            if (!self.target) { return; }
			var loadercontainer = $('<div class="st-loader" />');
            if (position) {
                $(loadercontainer).css("position", position);
            }
            if (offset) {
                $(loadercontainer).css("top", offset);
            }
            if (!color) {
                color = "#000";
            }
            $(loadercontainer).append(
                    $('<span class="l-1" style="background:' + color + ';"></span>' + 
                      '<span class="l-2" style="background:' + color + ';"></span>' + 
                      '<span class="l-3" style="background:' + color + ';"></span>' + 
                      '<span class="l-4" style="background:' + color + ';"></span>' + 
                      '<span class="l-5" style="background:' + color + ';"></span>' + 
                      '<span class="l-6" style="background:' + color + ';"></span>'
                     )
            );
            
            if (!insertiontype || insertiontype != "prepend") {
                $(self.target).append($(loadercontainer)[0]);
            }
            else {
                $(self.target).prepend($(loadercontainer)[0]);
            }
			
        }        
        
        /**
         * Destroy loader
         * @public
         */                
        loader.prototype.off = function() {
            $(".st-loader").remove();
        }

        return loader;

    })();

    /**
     * Build a new Loader instance
     * @param {string} sltor - CSS selector for choosing target elements
     * @param {object} options - User options for the new instance
    */         
    Stashy.Loader = function(sltor, options) {
	    return new loader(sltor, options);
	}

})(window.Stashy || (window.Stashy = {}), jQuery);

/**
 * Show list items on click
 * @class Stashy.ShowMeMore
*/
(function (Stashy, $, undefined) {    

    var showmemore = (function () {        

        /**
         * ShowMeMore constructor
         * @constructor
         * param {string} sltor - CSS selector for choosing target elements
         * param {object} useropt - User defined options
         */          
        function showmemore(sltor, useropt) {  
                  
            if (!sltor) return false;
      
            this.element = sltor;
            
            this.options = {     
                linkClass : "",
                linkText : "Show more",
                howMany : 1
            };
            
            $.extend(this.options || {}, useropt);
            
            if (this.options.howMany == 0 || null || undefined) {
              this.options.howMany = 1;  
            }             
        }

        /**
         * Start ShowMeMore
         * @method
         * @public
         */           
        showmemore.prototype.on = function() {
            
            var self = this;
            
            $(self.element + ":gt(" + (self.options.howMany - 1) + ")").hide().last().after(
                
                $('<a class="showmemore-btn ' + self.options.linkClass +'" />')                    
                    .attr('href', '#')                    
                    .text(self.options.linkText)                                            
                    .on("click",function () {
                        
                        var a = this;
                        
                        $(self.element + ':not(:visible):lt(' + self.options.howMany + ')')
                            .fadeIn(function () {
                                if ($(self.element + ':not(:visible)').length == 0) $(a).remove();
                        
                            }
                        ); 
                        return false;
                    })
                );            
                return this;
        }
		
        /**
         * Remove ShowMeMore layout
         * @method
         * @public
         */           
        showmemore.prototype.off = function() {
            var self = this;
			$(self.element + ":gt(" + (self.options.howMany - 1) + ")")
				.show()
				.last()
				.next()				
				.remove();			
            return this;
        }		

        return showmemore;

    })();

    /**
     * Build a new ShowMeMore instance
     * @param {string} sltor - CSS selector for choosing target elements
     * @param {object} options - User options for the new instance
    */     
    Stashy.ShowMeMore= function(sltor, options) {
	    return new showmemore(sltor, options);
	}

})(window.Stashy || (window.Stashy = {}), jQuery);
/**
 * Slider control for carousels and more
 * @class Stashy.Slider
*/
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
        ev.stopPropagation();
        slider.options.autoSlide = false;
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

        /**
         * Slider constructor
         * @constructor
         * param {string} sltor - CSS selector for choosing target elements
         * param {object} useropt - User defined options
         */            
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
                enableControls : true,
                enableIndicators : true,
                showOnHover : true,
                autoSlide : true,
                enableTouch : false,
                duration: 5000
            }
            $.extend(this.options,useropt);	
        }
        
        return slider;

    })();

    /**
     * Start Slider layout
     * Call always after creating a new instance
     * @public
    */      
    slider.prototype.on = function() {
        var self = this;
        
        if (this.element == undefined) {
            return false;
        }
        
        setPaneDimensions(this);

        $(window).on("load debouncedresize orientationchange", function() {
            setPaneDimensions(self);
        });        
				
		if (this.options.enableIndicators) {
            this.indicators = $("<ul class='st-slider-indicators'></ul>");            
            for(var i=0; i < this.panes.length; i++) {
                this.indicators.append("<li data-pane='" + i + "'></li>");
            }	        
            this.element.append(this.indicators);
            showActiveIndicator(this.indicators, this.current_pane);
        }
        
		if (this.options.enableControls) {
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
        
        if (this.options.showOnHover) {
            this.element.addClass("controlsonhover");
            this.element.hover(function() {
                self.element.removeClass("controlsonhover");
            }, function() {
                self.element.addClass("controlsonhover");
            });
        }
        
		bindControls(this);
		
		if (this.options.enableTouch && typeof(Hammer) == 'function') {
			this.element.hammer({ drag_lock_to_axis: true });  
			this.element.on("release dragleft dragright swipeleft swiperight", { slider : this },handleHammer);
			if (this.options.showOnHover) {
                this.element.on("tap", function() {
                    self.element.toggleClass("controlsonhover");
                });            
            }
		}
		
		return this;
    }
        
    /**
     * Show  selected pane
     * @method     
     * @public
     * @param {int} index - The selected pane
    */     
    slider.prototype.showPane = function(index) {   
        // between the bounds
        index = Math.max(0, Math.min(index, this.pane_count-1));
        this.current_pane = index;
        if (this.options.enableIndicators) {
		  showActiveIndicator(this.indicators, this.current_pane);		
        }
        var offset = -((100/this.pane_count)*this.current_pane);
        setContainerOffset(this,offset, true);
    };    
    
    /**
     * Go to the next pane
     * @method     
     * @public
    */       
     slider.prototype.next = function() {
        var panetoshow;
        if (this.current_pane + 1 == this.pane_count) {
            if (this.options.autoSlide) {
                panetoshow = 0;
            } else {
                panetoshow = this.current_pane;       
            }
            
        } else {
            panetoshow = this.current_pane + 1;
        }
        return this.showPane(panetoshow, true); 
    }
    
    /**
     * Go to the previous pane
     * @method
     * @public
    */      
    slider.prototype.prev = function() {
        var panetoshow;
        if (this.current_pane - 1 < 0) {
            if (this.options.autoSlide) {
                panetoshow = this.pane_count - 1;       
            } else {
                panetoshow = this.current_pane;       
            }            
        } else {
            panetoshow = this.current_pane - 1;
        }        
        return this.showPane(panetoshow, true); 
    }
        
    /**
     * Build a new Slider instance
     * @param {string} sltor - CSS selector for choosing target elements
     * @param {object} options - User options for the new instance
    */     
    Stashy.Slider = function(sltor, options) {
	    return new slider(sltor, options);
	}

})(window.Stashy || (window.Stashy = {}), jQuery);

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
/**
 * Responsive videos
 * @class Stashy.Video
*/
(function (Stashy, $, undefined) {    

    var video = (function () {        

        /**
         * ElasticVideo constructor
         * @constructor
         * param {string} sltor - CSS selector for choosing target elements
         */        
        function video(sltor) {

            var videos = $(sltor);

            if (videos[0] == undefined) {
                return false;
            } 
			
            this.videos = videos;
        }

              
        /**
         * Activate ElasticVideo
         * @method
         * @public
         */        
        video.prototype.on = function() {
			 this.videos.each(function(){
			 
				var video = $(this);
				
				if (this.tagName.toLowerCase() === 'embed' && video.parent('object').length || video.parent('.st-video').length) { 
					return; 
				}
				
				var height = (this.tagName.toLowerCase() === 'object' || (video.attr('height') && !isNaN(parseInt(video.attr('height'), 10))) ) ? parseInt(video.attr('height'), 10) : video.height(),
					width = !isNaN(parseInt(video.attr('width'), 10)) ? parseInt(video.attr('width'), 10) : video.width(),
					aspectRatio = height / width;
					
				if(!video.attr('id')){
				  var videoID = 'fitvid' + Math.floor(Math.random()*999999);
				  video.attr('id', videoID);
				}
				
				video.wrap('<div class="st-video"></div>').parent('.st-video').css('padding-top', (aspectRatio * 100)+"%");
				
				video.removeAttr('height').removeAttr('width');			 
			});
			
			return this;
        }
        
        return video;

    })();

    /**
     * Build a new ElasticVideo instance
     * @param {string} sltor - CSS selector for choosing target elements
    */    
    Stashy.ElasticVideo = function(sltor) {
	    return new video(sltor);
	}

})(window.Stashy || (window.Stashy = {}), jQuery);
/**
 * Responsive text blocks
 * @class Stashy.ElasticText
*/
(function (Stashy, $, undefined) {    

    var text = (function () {        

        /**
         * ElasticText constructor
         * @constructor
         * param {string} sltor - CSS selector for choosing target elements
         */
        function text(sltor) {

            var elements = $(sltor);

            if (elements[0] == undefined) {
                return false;
            } 
			
            this.elements = elements;
        }

        /**
         * Recalculate size of the element
         * @method
         * @private
         * param {float} ratio - The ratio multiplier between 0 - 2
         * param {float} min - Min. font size
         * param {float} max - Max font size
         */        
        var recalculateSize = function(ratio,min,max) {
			this.elements.each(function() {
				var element = $(this);
				element.css('font-size', 
						  Math.max( Math.min(element.width() / (ratio*10), parseFloat(max)), 
									parseFloat(min)
								  )
						);					
			});
		}
		
        /**
         * Activate ElasticText
         * @method
         * @public
         * param {float} ratio - The ratio multiplier between 0 - 2
         * param {float} min - Min. font size
         * param {float} max - Max font size
         */
        text.prototype.on = function(ratio, minfontsize, maxfontsize) {
			var ratio = ratio || 1,
			    min = minfontsize || Number.NEGATIVE_INFINITY,
				max = maxfontsize || Number.POSITIVE_INFINITY,
				elements = this;
				
			recalculateSize.apply(this,[ratio,min, max]);
						
			$(window).on('debouncedresize.ElasticText orientationchange.ElasticText', 
				function()  {
					recalculateSize.apply(elements,[ratio,min, max]) 
				}
			);
			
			return this;
        }
        
        return text;

    })();

    /**
     * Build a new ElasticText instance
     * @param {string} sltor - CSS selector for choosing target elements
    */
    Stashy.ElasticText = function(sltor) {
	    return new text(sltor);
	}

})(window.Stashy || (window.Stashy = {}), jQuery);

/**
 * Responsive tables
 * @class Stashy.Refresh
*/
(function (Stashy, $, undefined) {
    "use strict";    
    var table = (function () {

       /**
        * Table constructor
        * @constructor
        * param {string} sltor - CSS selector for choosing target elements
        * param {object} useropt - User defined options
        */            
        function table(sltor, useropt) {     
            
            var element = $(((sltor || "") + ".st-table") || ".st-table");
            
            if (element[0] == undefined || element.data("st-table") == true) {
                return false;
            }
            
            this.element = element;
            this.thead = this.element.find("thead"),
            this.tbody = this.element.find("tbody"),
            this.hdrCols = this.element.find("th"),
            this.bodyRows = this.element.find("tr"),
            this.container = useropt.checkContainer ? $(useropt.checkContainer) : $('<div class="st-table-menu st-table-menu-hidden"><ul /></div>');             		
            this.element.data("st-table", true);			
            this.enabled = false;
            this.options = {     
				idprefix: null,   // specify a prefix for the id/headers values
				notSelectable: "not-selectable", // specify a class assigned to column headers (th) that should always be present; the script not create a checkbox for these columns
				checkContainer: null, // container element where the hide/show checkboxes will be inserted; if none specified, the script creates a menu     
                menuClass : null // Specify the menu classes you want to add
            };
            $.extend(this.options || {}, useropt);
        }
          
        /**
         * Start the Table layout
         * Call always after creating a new instance
         * @public
         */            
        table.prototype.on = function() {
            if (this.element ==  null) return;
            
            var self = this;

			$("html").addClass("js");
		  
		    this.hdrCols.each(function (i) {
				var th = $(this),
				    id = th.attr("id"), 
				    classes = th.attr("class");
			 				
				if (!id) {
					id = ( self.options.idprefix ? self.options.idprefix : "col-" ) + i;
					th.attr("id", id);
				};
                
				self.bodyRows.each(function(){
					var cell = $(this).find("th, td").eq(i);
					cell.attr("headers", id);
					if (classes) { cell.addClass(classes); };
				});     
			 
				
				if ( !th.is("." + self.options.notSelectable) ) {
					var toggle = $('<li><input type="checkbox" name="toggle-cols" id="toggle-col-'+i+'" value="'+id+'" /> <label for="toggle-col-'+i+'">'+th.text()+'</label></li>');
				 
					self.container.find("ul").append(toggle);         
				 
					toggle.find("input")
						.change(function(){
							var input = $(this), 
							val = input.val(), 
							cols = $("#" + val + ", [headers="+ val +"]");
					   
							if (input.is(":checked")) { cols.show(); }
							else { cols.hide(); };		
							})
						.bind("updateCheck", function(){
							if ( th.css("display") == "table-cell" || th.css("display") == "inline" ) {
								$(this).attr("checked", true);
							}
							else {
								$(this).attr("checked", false);
							}
						})
						.trigger("updateCheck");  
				};          
				   
		    });
		  
		    
		    $(window).bind("orientationchange resize", function(){
			     self.container.find("input").trigger("updateCheck");
		    });      
						  
		    if (!self.options.checkContainer) {
			    var menuContainer = $('<div class="st-table-menu-container" />'),
				    menuBtn = $('<a href="#" class="st-table-menu-btn">Display</a>');                    
				   
			    menuBtn.click(function(){
			        self.container.toggleClass("st-table-menu-hidden");            
			        return false;
			    });

                if (self.options.menuClass) {
                   menuBtn.addClass(self.options.menuClass); 
                }
                
			    menuContainer.append(menuBtn).append(self.container);
			    self.element.before(menuContainer);
			 
			    
			    $(document).click(function(e){								
				    if ( !$(e.target).is( self.container ) && !$(e.target).is( self.container.find("*") ) ) {			
					    self.container.addClass("st-table-menu-hidden");
				    }				
			    });
		    };   			
            
            this.enabled = true;
            return this;
        }
        
        return table;

    })();
    
    /**
     * Build a new Table instance
     * @param {string} sltor - CSS selector for choosing target elements
     * @param {object} options - User options for the new instance
    */     
	Stashy.Table = function(sltor, options) {
	    return new table(sltor, options);
	}
    
})(window.Stashy || (window.Stashy = {}), jQuery);
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
                        self.element.remove();
                        self = null;                        
                        if (toastC.children().length == 0) {
                            toastC.remove();					
                        }				
                        
                    }, self.options.animDuration == "fast" ? 1000 : 2000);
                };
			this.element.addClass((radius ? "radius" : " ") + " " + "fadeIn");
			toastC.append(this.element);
            
            if (self.options.activeDuration > 0) {
                setTimeout(function() { 
                    if (self) { 
                        hide();
                    } 
                }, self.options.activeDuration);
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
                        self.element.remove();
                        self = null;                        
                        if (barC.children().length == 0) {
                            barC.remove();					
                        }				
                    }, self.options.animDuration == "fast" ? 1000 : 2000);
                };
			this.element.addClass(positionY == "top" ? "fadeInDown" : "fadeInUp");
			barC.append(this.element);
            
            if (self.options.activeDuration > 0) {
                setTimeout(function() { 
                    if (self) { 
                        hide();
                    } 
                }, self.options.activeDuration);
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
                        self.element.remove();
                        self = null;                        
                    }, self.options.animDuration == "fast" ? 1000 : 2000);
                };
			this.element.addClass("panel " + positionX)
			this.element.addClass(positionX == "left" ? "fadeInLeft" : "fadeInRight");
			$(this.options.target).append(this.element);
            
            if (self.options.activeDuration > 0) {
                setTimeout(function() { 
                    if (self) { 
                        hide();
                    } 
                }, self.options.activeDuration);
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