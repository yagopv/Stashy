define(['durandal/app','lib/pagelayout','lib/prettify'], function (app, pagelayout, prettify) {
    var activePage = ko.observable(),
    hash = "",
    oc; 
                
    var options = {
        title : ko.observable(),
        titleSize : ko.observable(),
        contentType : ko.observable(),
        content : ko.observable(),
        style : ko.observable(),
        animDuration : ko.observable(),
        closeArea : ko.observable(),
        radius : ko.observable(true),
        positionX : ko.observable(),
        positionY : ko.observable(),
        component : ko.observable("toast"),
        activeDuration : ko.observable()
    }
    
    return {
        compositionComplete : function() {
            var that = this;
            oc = Stashy.OffCanvas("#notify", { enableTouch : true });
            pagelayout.offcanvasLayout(oc);
            prettyPrint();        
            Stashy.Utils.ScrollTo('#' + that.hash);
        },                 
        activePage : activePage,
        activate: function (page) {
            var that = this;
            
            if (page != undefined) {                
                that.hash = page;            
                Stashy.Utils.ScrollTo('#notify #' + that.hash);                
            }
            ga('send', 'pageview');
        },
        options : options,
        showNotification : function(formElement) {
           try {
           if (this.options.component() == "toast") {                
                Stashy.Notify({
                    title : this.options.title(),
                    content : this.options.content(),
                    titleSize : parseInt(this.options.titleSize()),
                    style : this.options.style(),
                    contentType : this.options.contentType(),
                    animDuration : this.options.animDuration(),
                    closeArea : this.options.closeArea(),
                    activeDuration : this.options.activeDuration()
                }).toast(this.options.positionX(), this.options.positionY(), this.options.radius() ? true : false);
            } else {
                if (this.options.component() == "bar")   {
                    Stashy.Notify({
                        title : this.options.title(),
                        content : this.options.content(),
                        titleSize : parseInt(this.options.titleSize()),
                        style : this.options.style(),
                        contentType : this.options.contentType(),
                        animDuration : this.options.animDuration(),
                        closeArea : this.options.closeArea(),
                        activeDuration : this.options.activeDuration()                        
                    }).bar(this.options.positionY());
                } else {
                    Stashy.Notify({
                        title : this.options.title(),
                        content : this.options.content(),
                        titleSize : parseInt(this.options.titleSize()),
                        style : this.options.style(),
                        contentType : this.options.contentType(),
                        animDuration : this.options.animDuration(),
                        closeArea : this.options.closeArea(),
                        activeDuration : this.options.activeDuration()
                    }).panel(this.options.positionX());
                }
            }
           } catch (exception) {
               Stashy.Notify({
                   title : "You have errors!!",
                   titleSize : 4,
                   content : exception.message,
                   style : "error"
               }).toast("right", "top", true);
           }
        }
    };
});