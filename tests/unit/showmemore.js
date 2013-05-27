$(function() {
	module("ShowMeMore")

    test("when page is loaded", function () {        		
        ok(Stashy.ShowMeMore != null || undefined, 'module is defined');
    });
    
    test("when module is defined", function () {        		
        ok(typeof(Stashy.ShowMeMore) == "function" , 'module is a function');
    });       
    
    test("when we get an instance", function () {        		
        var instance = Stashy.ShowMeMore();
        ok(typeof(instance) == "object" , 'the instance is an object');
    });   
});