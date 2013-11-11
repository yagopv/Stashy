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
