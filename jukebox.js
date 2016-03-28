function Jukebox(){
 this.song = 0;
 this.songList = ["audio/Lupe_Deliver.mp3", "audio/BigJa_Oldthingback.mp3", "audio/Killing_Me_Softly.mp3"]

 
	 this.playSong = function(){
	 	var audio = $("audio")
	  audio[this.song].play();
	 };

	this.pauseSong = function(){
  	$("audio")[this.song].pause();
 	};

	this.nextSong = function(){
		this.pauseSong();
			(this.song)++;
	  	 if(this.song > (this.songList.length - 1)){
     		this.song = 0
  };

  this.playSong();
 };

};

new_Jukebox = new Jukebox();

$(document).ready(function(){

 $("#play").click(function(){
 	new_Jukebox.playSong();
 });

 $("#pause").click(function(){
 	new_Jukebox.pauseSong();
 });

 $("#next").click(function(){
 	new_Jukebox.nextSong();
 });

});
