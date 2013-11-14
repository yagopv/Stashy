describe("Notify", function() {
    it("when creating new instance without content should throw exception", function() {
        expect(Stashy.Notify).toThrow();
    });       
        
    it("when creating toast should create a toast with a parent container", function() {
        var notify = Stashy.Notify({ content : "content"});
        notify.toast("top", "right", "5px");
        expect(notify.element.parent()).toHaveClass("st-toast-container");
        $(".st-toast-container").remove();
    });
    
    it("when creating bar should create a bar with a parent container", function() {
        var notify = Stashy.Notify({ content : "content"});
        notify.bar("top");
        expect(notify.element.parent()).toHaveClass("st-bar-container");
        $(".st-bar-container").remove();
    });  
    
    it("when creating panel should create a panel", function() {
        var notify = Stashy.Notify({ content : "content"});
        notify.panel("left");
        expect($(".st-notify").length).toEqual(1);
        $(".st-notify").remove();
    });    
});