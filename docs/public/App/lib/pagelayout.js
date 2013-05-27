define(function(require) {
    
    var togglelayout = function(toggle) {
        toggle.layout();
    }
    
    var closeToggle = function(toggle) {
        toggle.close();
    }    
    
    var offcanvaslayout = function(offcanvas) {
        if (!offcanvas.enabled) {
            offcanvas.options.onMobileLayout = function() {
                $(".hero-unit").addClass("h-big-top-margin");            
            }            
            offcanvas.options.onTabletLayout = function() {
                $(".hero-unit").addClass("h-big-top-margin");            
            }            
            offcanvas.options.onDesktopLayout = function() {
                $(".hero-unit").removeClass("h-big-top-margin");          
            }
            offcanvas.layout();
        }
    }
    
    var closeOffcanvas = function(offcanvas) {
        offcanvas.close();
    }
    
    var flyoutlayout = function(flyout) {        
        if (!flyout.enabled) {         
            flyout.layout();
        }
    }
    
    var closeFlyout = function(flyout) {
        flyout.close();
    }
        
    return {
        offcanvasLayout : offcanvaslayout,
        flyoutLayout : flyoutlayout,
        closeOffcanvas : closeOffcanvas,
        closeFlyout : closeFlyout,
        togglelayout : togglelayout,
        closeToggle : closeToggle
    }
});