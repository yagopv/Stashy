/**
 * Responsive videos
 * @class Stashy.Video
*/
(function (Stashy, $, undefined) {    

    var video = (function () {        

        /**
         * ElasticVideo constructor
         * @constructor
         * param {string} sltor - CSS selector for choosing target elements
         */        
        function video(sltor) {

            var videos = $(sltor);

            if (videos[0] == undefined) {
                return false;
            } 
			
            this.videos = videos;
        }

              
        /**
         * Activate ElasticVideo
         * @method
         * @public
         */        
        video.prototype.on = function() {
			 this.videos.each(function(){
			 
				var video = $(this);
				
				if (this.tagName.toLowerCase() === 'embed' && video.parent('object').length || video.parent('.st-video').length) { 
					return; 
				}
				
				var height = (this.tagName.toLowerCase() === 'object' || (video.attr('height') && !isNaN(parseInt(video.attr('height'), 10))) ) ? parseInt(video.attr('height'), 10) : video.height(),
					width = !isNaN(parseInt(video.attr('width'), 10)) ? parseInt(video.attr('width'), 10) : video.width(),
					aspectRatio = height / width;
					
				if(!video.attr('id')){
				  var videoID = 'fitvid' + Math.floor(Math.random()*999999);
				  video.attr('id', videoID);
				}
				
				video.wrap('<div class="st-video"></div>').parent('.st-video').css('padding-top', (aspectRatio * 100)+"%");
				
				video.removeAttr('height').removeAttr('width');			 
			});
			
			return this;
        }
        
        return video;

    })();

    /**
     * Build a new ElasticVideo instance
     * @param {string} sltor - CSS selector for choosing target elements
    */    
    Stashy.ElasticVideo = function(sltor) {
	    return new video(sltor);
	}

})(window.Stashy || (window.Stashy = {}), jQuery);