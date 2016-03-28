$(document).ready(function(){

	function Jukebox(){
		this.play = function(){
			$("#play").click(function(){
				$("#song1")[0].play();
			});
		};

		this.pause = function(){
			$("#pause").click(function(){
				$("#song1")[0].pause();
			});
		};

		// this.next = function(){
		// 	$("#next").click(function(){
		// 		$("song2")[0].next();
		// 	});
		// };

	}	

	var new_play = new Jukebox()
	new_play.play()
	new_play.pause() 

});

