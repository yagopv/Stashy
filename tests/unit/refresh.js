$(function() {
	module("Refresh")

    test("when page is loaded", function () {        		
        ok(Stashy.Refresh != null || undefined, 'module is defined');
    });
    
    test("when module is defined", function () {        		
        ok(typeof(Stashy.Refresh) == "function" , 'module is a function');
    });       
    
    test("when get an instance and no element is defined", function () {        		
        var instance = Stashy.Refresh();
        ok(instance.element == null , 'there is no element in the page');
    });    
});