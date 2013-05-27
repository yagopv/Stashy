(function (Stashy, $, undefined) {    

    var loader = (function () {        

        function loader(target) {                                 
           var self = this;
           this.target = target;
        }

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
        
        loader.prototype.off = function() {
            $(".st-loader").remove();
        }

        return loader;

    })();

    Stashy.Loader = function(sltor, options) {
	    return new loader(sltor, options);
	}

})(window.Stashy || (window.Stashy = {}), jQuery)
