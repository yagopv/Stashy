describe("Flyout", function() {
    
    jasmine.getFixtures().fixturesPath = 'spec/javascripts/fixtures';
    var flyout;

    beforeEach(function() {
        loadFixtures('flyout.html');
        flyout = Stashy.Flyout(".st-flyout", { });
    });

    it("when creating new instance, should return an object", function() {
        expect(typeof(flyout)).toBe("object");            
    });   

    it("when click on toggle menu, should open flyout menu", function() {
        flyout.layout();
        var spyEvent = spyOnEvent('.st-flyout-toggle', 'click');
        $(".st-flyout-toggle").click();
        expect('click').toHaveBeenTriggeredOn('.st-flyout-toggle');
        expect(flyout.container).toHaveClass('active-menu');
    }); 

    it("when opening menu with prototype method, should open flyout menu", function() {
        flyout.layout();
        flyout.open();
        expect(flyout.container).toHaveClass('active-menu');
    });   

    it("when closing menu with prototype method, should close flyout menu", function() {
        flyout.layout();
        flyout.open();
        flyout.close();
        expect(flyout.container).not.toHaveClass('active-menu');
    });          
});