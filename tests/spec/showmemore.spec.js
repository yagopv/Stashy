describe("ShowMeMore", function() {
    
    jasmine.getFixtures().fixturesPath = 'spec/javascripts/fixtures';
    var showmemore;

    beforeEach(function() {
        loadFixtures('showmemore.html');
        showmemore = Stashy.ShowMeMore("ul li", { howMany : 5 });
    });

    it("when creating new instance, should return an object", function() {
        expect(typeof(showmemore)).toBe("object");            
    });    
    
    it("when activating showmemore, should show only 5 items", function() {
        showmemore.on();
        expect($("ul li:visible").length).toBe(5);
    });       
});