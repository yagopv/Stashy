describe("Loader", function() {
        
    var loader;

    beforeEach(function() {
        loader = Stashy.Loader("body");  
    });

    it("when creating new instance, should return an object", function() {
        expect(typeof(loader)).toBe("object");            
    });

    it("when activating should append loader to body", function() {
        loader.on("fixed","20px","#000","append");
        expect($(".st-loader")).toBe("div");
    });       
        
    it("when deactivating should remove from body", function() {
        loader.on("fixed","20px","#000","append");
        loader.off();
        expect($(".st-loader").length).toEqual(0);
    });              
});