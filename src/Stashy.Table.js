(function (Stashy, $, undefined) {
    "use strict";    
    var table = (function () {

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
    
	Stashy.Table = function(sltor, options) {
	    return new table(sltor, options);
	}
    
})(window.Stashy || (window.Stashy = {}), jQuery)