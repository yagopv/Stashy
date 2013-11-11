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