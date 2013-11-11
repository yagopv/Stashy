$(function() {
	module("Slider")

    test("when page is loaded", function () {        		
        ok(Stashy.Slider != null || undefined, 'module is defined');
    });
    
    test("when module is defined", function () {        		
        ok(typeof(Stashy.Slider) == "function" , 'module is a function');
    });       
    
    test("when get an instance and no element is defined", function () {        		
        var instance = Stashy.Slider();
        ok(instance.element == null , 'there is no element in the page');
    });    
});