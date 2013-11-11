$(function() {
	module("ElasticVideo")

    test("when page is loaded", function () {        		
        ok(Stashy.ElasticVideo != null || undefined, 'module is defined');
    });
    
    test("when module is defined", function () {        		
        ok(typeof(Stashy.ElasticVideo) == "function" , 'module is a function');
    });       
    
    test("when get an instance and no element is defined", function () {        		
        var instance = Stashy.ElasticVideo();
        ok(instance.element == null , 'there is no element in the page');
    });    
});