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