describe("OffCanvas", function() {

	jasmine.getFixtures().fixturesPath = 'spec/javascripts/fixtures';

    describe("OffCanvas-Full", function() {    
        var offcanvas;
        
        beforeEach(function() {
            loadFixtures('offcanvas-full.html');
            offcanvas = Stashy.OffCanvas(".st-offcanvas", { }).layout();
        });

        it("when creating new instance, should return an object", function() {
            expect(typeof(offcanvas)).toBe("object");            
        });  
        
        it("when creating new instance should not have no-additional and no-menu classes", function() {
            expect(offcanvas.element).not.toHaveClass("no-additional");
            expect(offcanvas.element).not.toHaveClass("no-menu");
        });  
        
        it("when click on show menu/additional button, should trigger click event", function() {
            var spyMenuBtn = spyOnEvent('.showmenubutton', 'click');
            var spyAddBtn = spyOnEvent('.showadditionalbutton', 'click');
            $('.showmenubutton').click();
            $('.showadditionalbutton').click();
            expect('click').toHaveBeenTriggeredOn('.showmenubutton');
            expect('click').toHaveBeenTriggeredOn('.showadditionalbutton');
        });        
    });
    
    describe("OffCanvas-No Additional", function() {
        beforeEach(function() {
            loadFixtures('offcanvas-noadd.html');
            offcanvas = Stashy.OffCanvas(".st-offcanvas", { }).layout();
        });   
        
        it("when creating new instance without additional section, should have class no-additional", function() {                 
            expect(offcanvas.element).toHaveClass("no-additional");
        });        
    });

    describe("OffCanvas-No Menu", function() {
        beforeEach(function() {
            loadFixtures('offcanvas-nomenu.html');
            offcanvas = Stashy.OffCanvas(".st-offcanvas", { }).layout();
        });   
        
        it("when creating new instance without menu section, should have class no-additional", function() {                 
            expect(offcanvas.element).toHaveClass("no-menu");
        });          
    });        
});
