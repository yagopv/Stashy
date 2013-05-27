$(function() {
	module("Toggle")

    test("when page is loaded", function () {        		
        ok(Stashy.Toggle != null || undefined, 'module is defined');
    });
    
    test("when module is defined", function () {        		
        ok(typeof(Stashy.Toggle) == "function" , 'module is a function');
    });       
    
    test("when get an instance and no element is defined", function () {        		
        var instance = Stashy.Toggle();
        ok(instance.element == null , 'there is no element in the page');
    });     
    
    test("when get an instance and element is defined", function () {        		
        var html = "<div class='st-toggle'><nav class='st-toggle-navigation'></div>";
        $("body").append(html);        
        var instance = Stashy.Flyout();        
        ok(instance.element !== null , 'the instance is an object');
    });          
});