$(function() {
	module("Flyout")

    test("when page is loaded", function () {        		
        ok(Stashy.Flyout != null || undefined, 'module is defined');
    });
    
    test("when module is defined", function () {        		
        ok(typeof(Stashy.Flyout) == "function" , 'module is a function');
    });       
    
    test("when get an instance and no element is defined", function () {        		
        var instance = Stashy.Flyout();
        ok(instance.element == null , 'there is no element in the page');
    });      

    test("when get an instance and element is defined", function () {        		
        var html = "<div class='st-flyout'><div class='st-flyout-container'><div class='st-flyout-menu'></div><div class='st-flyout-main'></div></div></div>";
        $("body").append(html);        
        var instance = Stashy.Flyout();        
        ok(instance.element !== null , 'the instance is an object');
    });       
});