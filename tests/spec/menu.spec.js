describe("Menu", function() {
    
    jasmine.getFixtures().fixturesPath = 'spec/javascripts/fixtures';
    var menu;

    beforeEach(function() {
        loadFixtures('menu.html');
        menu = Stashy.Menu(".st-menu", { });
    });

    it("when creating new instance, should return an object", function() {
        expect(typeof(menu)).toBe("object");            
    });       
});