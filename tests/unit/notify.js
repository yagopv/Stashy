$(function() {
	module("Notify")

    test("when page is loaded", function () {        		
        ok(Stashy.Notify != null || undefined, 'module is defined');
    });
    
    test("when module is defined", function () {        		
        ok(typeof(Stashy.Notify) == "function" , 'module is a function');
    });                
});