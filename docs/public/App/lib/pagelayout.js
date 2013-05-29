define(function(require) {
    
    var togglelayout = function(toggle) {
        toggle.layout();
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
    
    var flyoutlayout = function(flyout) {        
        if (!flyout.enabled) {         
            flyout.layout();
        }
    }
        
    return {
        offcanvasLayout : offcanvaslayout,
        flyoutLayout : flyoutlayout,
        togglelayout : togglelayout
    }
});