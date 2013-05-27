define(['durandal/app'], function (app) {
    
    return {
        activate: function () {
            ga('send', 'pageview');
        }
    };
});