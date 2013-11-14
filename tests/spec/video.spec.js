describe("Video", function() {
    
    jasmine.getFixtures().fixturesPath = 'spec/javascripts/fixtures';
    var video;

    beforeEach(function() {
        loadFixtures('video.html');
        video = Stashy.ElasticVideo("iframe,object,embed");
    });

    it("when creating new instance, should return an object", function() {
        expect(typeof(video)).toBe("object");            
    });        
    
    it("when activating, components width should be equal to parent width", function() {
        video.on();
        expect($(".st-video").width()).toEqual($(".st-video").parent().width());
    });
    
});