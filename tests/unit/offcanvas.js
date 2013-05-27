$(function() {
	module("OffCanvas")

    test("when page is loaded", function () {        		
        ok(Stashy.OffCanvas != null || undefined, 'module is defined');
    });
    
    test("when module is defined", function () {        		
        ok(typeof(Stashy.OffCanvas) == "function" , 'module is a function');
    });       
    
    test("when get an instance and no element is defined", function () {        		
        var instance = Stashy.OffCanvas();
        ok(instance.element == null , 'there is no element in the page');
    });    
    
    test("when get an instance and element is defined", function () {        		
        var html = "<div class='st-offcanvas'><div class='st-menu'></div><div class='st-main'><a href='#' class='showmenubutton'></a><a href='#' class='showadditionalbutton'></a></div><div class='st-additional'></div></div>";
        $("body").append(html);        
        var instance = Stashy.OffCanvas();        
        ok(instance.element !== null , 'the instance is an object');
    });       
    
});