
(function () {
			
	var walk,
		walkImage,
		canvas;					

	function gameLoop () {
		

	  window.requestAnimationFrame(gameLoop);

	  walk.update();
	  walk.render();
	}
	
	function sprite (options) {
	
		var that = {},
			frameIndex = 0,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1;
		
		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;
		
		that.update = function () {

            tickCount += 0.5;

            if (tickCount > ticksPerFrame) {

				tickCount = 0;
				
                // If the current frame index is in range
                if (frameIndex < numberOfFrames) {	
                    // Go to the next frame
                    frameIndex += 1;
                } else {
                    frameIndex = 1;
                }
            }
        };
		
		that.render = function () {
		
		  // Clear the canvas
		  that.context.clearRect(0, 0, that.width, that.height);
		  
		  // Draw the animation
		  that.context.drawImage(
		    that.image,
		    frameIndex * that.width / numberOfFrames,
		    0,
		    that.width / numberOfFrames,
		    that.height,
		    0,
		    0,

		    that.width / numberOfFrames,
		    that.height);

		};
		
		return that;
	}
	
	// Get canvas
	canvas = document.getElementById("walkAnimation");
	canvas.width = 1850;
	canvas.height = 320;
	
	// Create sprite sheet
	walkImage = new Image();	
	
	// Create sprite
	walk = sprite({
		context: canvas.getContext("2d"),
		width: 1850,
		height: 320,
		image: walkImage,
		numberOfFrames: 10,
		ticksPerFrame: 2,

	});
	
	//Keyrir sprite
	walkImage.addEventListener("load", gameLoop);
	walkImage.src = "walking.png";

} ());




//Mario parturinn

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();
var x = 0
function drawIt() {
    window.requestAnimFrame(drawIt);
    var c = document.getElementById('canvas');
    var ctx = c.getContext('2d');
    ctx.clearRect(0,0,c.width,c.height); 
    var img = new Image();
    img.src = "mario.jpg";
    img.onload = function () {
      var pattern = ctx.createPattern(img,"repeat");
      ctx.fillStyle = pattern;
      
    };
    ctx.fillRect(x,10,300,300);
    x+=10;
}
window.requestAnimFrame(drawIt);



