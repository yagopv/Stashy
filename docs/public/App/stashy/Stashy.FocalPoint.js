(function (Stashy, $, undefined) {    

    var focalpoint = (function () {        

        function focalpoint(sltor) {
            this.selector = sltor || "img";
        }

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
        
        focalpoint.prototype.update = function(pointA, pointB) {			
			pointA = pointA || "";
			pointB = pointB || "";
			$(this.selector).each(function() {
				$(this).closest(".st-image").removeAttr("class").addClass("st-image " + pointA + " " + pointB + ($(this).height() > $(this).width()  ? " portrait" : ""));
			});			
        }
		
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

    Stashy.FocalPoint = function(sltor, options) {
	    return new focalpoint(sltor, options);
	}

})(window.Stashy || (window.Stashy = {}), jQuery)