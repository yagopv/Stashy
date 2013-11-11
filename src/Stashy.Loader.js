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
