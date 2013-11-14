describe("Slider", function() {
    
    jasmine.getFixtures().fixturesPath = 'spec/javascripts/fixtures';
    var slider;

    beforeEach(function() {
        loadFixtures('slider.html');
        slider = Stashy.Slider();
    });

    it("when creating new instance, should return an object", function() {
        expect(typeof(slider)).toBe("object");            
    });        
});