$(function() {
	module("Menu")

    test("when page is loaded", function () {        		
        ok(Stashy.Menu != null || undefined, 'module is defined');
    });
    
    test("when module is defined", function () {        		
        ok(typeof(Stashy.Menu) == "function" , 'module is a function');
    });    
});