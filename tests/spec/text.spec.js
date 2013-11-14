describe("Text", function() {

    var text;

    beforeEach(function() {
        text = Stashy.ElasticText();
    });

    it("when creating new instance, should return an object", function() {
        expect(typeof(text)).toBe("object");            
    });        
});