(function (Stashy, $, undefined) {    
    
    Stashy.Utils = {        
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
    
})(window.Stashy || (window.Stashy = {}), jQuery)