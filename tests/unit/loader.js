$(function() {
	module("Loader")

    test("when page is loaded", function () {        		
        ok(Stashy.Loader != null || undefined, 'module is defined');
    });
    
    test("when module is defined", function () {        		
        ok(typeof(Stashy.Loader) == "function" , 'module is a function');
    });       
    
    test("when we get an instance", function () {        		
        var instance = Stashy.Loader();
        ok(typeof(instance) == "object" , 'the instance is an object');
    });       
});