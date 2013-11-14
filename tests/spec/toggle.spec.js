describe("Toggle", function() {
    
    jasmine.getFixtures().fixturesPath = 'spec/javascripts/fixtures';
    var toggle;

    beforeEach(function() {
        loadFixtures('toggle.html');
        toggle = Stashy.Toggle();
    });

    it("when creating new instance, should return an object", function() {
        expect(typeof(toggle)).toBe("object");            
    });        
});