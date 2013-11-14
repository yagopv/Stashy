describe("FocalPoint", function() {
    
    jasmine.getFixtures().fixturesPath = 'spec/javascripts/fixtures';
    var focalpoint;

    beforeEach(function() {
        loadFixtures('focalpoint.html');
        focalpoint = Stashy.FocalPoint("#image");
    });

    it("when creating new instance, should return an object", function() {
        expect(typeof(focalpoint)).toBe("object");            
    });  
    
    it("when activating image should have container", function() {
        focalpoint.on();
        expect($("#image").parent()).toHaveClass("st-image-container");            
    });  

    it("when activating image should have main wrapper", function() {
        focalpoint.on();
        expect($("#image").parent().parent()).toHaveClass("st-image");            
    });   
    
    it("when activating image with options should apply classes", function() {
        focalpoint.on("up-1", "right-1");
        expect($("#image").parent().parent()).toHaveClass("up-1"); 
        expect($("#image").parent().parent()).toHaveClass("right-1");
    });   
    
    it("when updating image options should update classes", function() {
        focalpoint.on("up-1", "right-1");
        focalpoint.update("down-2", "right-3");
        expect($("#image").parent().parent()).toHaveClass("down-2"); 
        expect($("#image").parent().parent()).toHaveClass("right-3");
    });  
    
    it("when deactivating image should remove parents", function() {
        focalpoint.on();
        focalpoint.off();
        expect($("#image").parent(".st-image-container").length).toEqual(0);        
    });       
});