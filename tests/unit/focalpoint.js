$(function() {
	module("FocalPoint")

    test("when page is loaded", function () {        		
        ok(Stashy.FocalPoint != null || undefined, 'module is defined');
    });
    
    test("when module is defined", function () {        		
        ok(typeof(Stashy.FocalPoint) == "function" , 'module is a function');
    });       
    
    test("when we get an instance", function () {        		
        var instance = Stashy.FocalPoint();
        ok(typeof(instance) == "object" , 'the instance is an object');
    });       
});