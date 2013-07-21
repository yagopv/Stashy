(function (Stashy, $, undefined) {    

    var text = (function () {        

        function text(sltor) {

            var elements = $(sltor);

            if (elements[0] == undefined) {
                return false;
            } 
			
            this.elements = elements;
        }

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

    Stashy.ElasticText = function(sltor, options) {
	    return new text(sltor);
	}

})(window.Stashy || (window.Stashy = {}), jQuery);
