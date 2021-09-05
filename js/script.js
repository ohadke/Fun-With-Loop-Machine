/* Script for the Loop Machine */
/* Created by mike_ss at Fiverr.com. You can find me at https://www.fiverr.com/mike_ss */
$(document).ready(function(){
	var playing1 = false; var playing2 = false; var playing3 = false; var playing4 = false; var playing5 = false; var playing6 = false; var playing7 = false; var playing8 = false; var playing9 = false; var playing = false; //declaring playing variables
	var checkAudioInterval = ""; //declaring checkAudioInterval variable
	$("#loop_pad_1").click(function(){ if(playing1){ playing1 = false; $(this).css({"background-color": "#bf0000", "border": "none"}); document.getElementById("audio1").muted = true; checkAudioStop(); } else { playing1 = true; $(this).css({"background-color": "#ff0000", "border": "3px solid #000000"}); } }); //loop1 button
	$("#loop_pad_2").click(function(){ if(playing2){ playing2 = false; $(this).css({"background-color": "#00a6ff", "border": "none"}); document.getElementById("audio2").muted = true; checkAudioStop(); } else { playing2 = true; $(this).css({"background-color": "#6bdcff", "border": "3px solid #000000"}); } }); //loop2 button
	$("#loop_pad_3").click(function(){ if(playing3){ playing3 = false; $(this).css({"background-color": "#00c400", "border": "none"}); document.getElementById("audio3").muted = true; checkAudioStop(); } else { playing3 = true; $(this).css({"background-color": "#00ff49", "border": "3px solid #000000"}); } }); //loop3 button
	$("#loop_pad_4").click(function(){ if(playing4){ playing4 = false; $(this).css({"background-color": "#c2c400", "border": "none"}); document.getElementById("audio4").muted = true; checkAudioStop(); } else { playing4 = true; $(this).css({"background-color": "#f4f44c", "border": "3px solid #000000"}); } }); //loop4 button
	$("#loop_pad_5").click(function(){ if(playing5){ playing5 = false; $(this).css({"background-color": "#ba00c6", "border": "none"}); document.getElementById("audio5").muted = true; checkAudioStop(); } else { playing5 = true; $(this).css({"background-color": "#f600ff", "border": "3px solid #000000"}); } }); //loop5 button
	$("#loop_pad_6").click(function(){ if(playing6){ playing6 = false; $(this).css({"background-color": "#00c47d", "border": "none"}); document.getElementById("audio6").muted = true; checkAudioStop(); } else { playing6 = true; $(this).css({"background-color": "#00ffb3", "border": "3px solid #000000"}); } }); //loop6 button
	$("#loop_pad_7").click(function(){ if(playing7){ playing7 = false; $(this).css({"background-color": "#c38200", "border": "none"}); document.getElementById("audio7").muted = true; checkAudioStop(); } else { playing7 = true; $(this).css({"background-color": "#ffb700", "border": "3px solid #000000"}); } }); //loop7 button
	$("#loop_pad_8").click(function(){ if(playing8){ playing8 = false; $(this).css({"background-color": "#96a600", "border": "none"}); document.getElementById("audio8").muted = true; checkAudioStop(); } else { playing8 = true; $(this).css({"background-color": "#cddc39", "border": "3px solid #000000"}); } }); //loop8 button
	$("#loop_pad_9").click(function(){ if(playing9){ playing9 = false; $(this).css({"background-color": "#00c685", "border": "none"}); document.getElementById("audio9").muted = true; checkAudioStop(); } else { playing9 = true; $(this).css({"background-color": "#32ffb9", "border": "3px solid #000000"}); } }); //loop9 button
	//play/stop button
	$("#play_button").click(function(){
		if(playing){
			playing = false;
			$(this).css("background-color", "#4848f7").text("START");
			stopPlay();
		} else {
			if(playing1 || playing2 || playing3 || playing4 || playing5 || playing6 || playing7 || playing8 || playing9){
				playing = true;
				$(this).css("background-color", "#7575ff").text("STOP");
				startPlay();
			}
		}
	});
	//time update audio events
	document.getElementById("audio1").ontimeupdate = function(){ checkAudioPlaying(this); }
	document.getElementById("audio2").ontimeupdate = function(){ checkAudioPlaying(this); }
	document.getElementById("audio3").ontimeupdate = function(){ checkAudioPlaying(this); }
	document.getElementById("audio4").ontimeupdate = function(){ checkAudioPlaying(this); }
	document.getElementById("audio5").ontimeupdate = function(){ checkAudioPlaying(this); }
	document.getElementById("audio6").ontimeupdate = function(){ checkAudioPlaying(this); }
	document.getElementById("audio7").ontimeupdate = function(){ checkAudioPlaying(this); }
	document.getElementById("audio8").ontimeupdate = function(){ checkAudioPlaying(this); }
	document.getElementById("audio9").ontimeupdate = function(){ checkAudioPlaying(this); }
	//start play function
	function startPlay(){
		document.getElementById("audio1").play();
		document.getElementById("audio2").play();
		document.getElementById("audio3").play();
		document.getElementById("audio4").play();
		document.getElementById("audio5").play();
		document.getElementById("audio6").play();
		document.getElementById("audio7").play();
		document.getElementById("audio8").play();
		document.getElementById("audio9").play();
		//unmutting
		if(playing1) document.getElementById("audio1").muted = false;
		if(playing2) document.getElementById("audio2").muted = false;
		if(playing3) document.getElementById("audio3").muted = false;
		if(playing4) document.getElementById("audio4").muted = false;
		if(playing5) document.getElementById("audio5").muted = false;
		if(playing6) document.getElementById("audio6").muted = false;
		if(playing7) document.getElementById("audio7").muted = false;
		if(playing8) document.getElementById("audio8").muted = false;
		if(playing9) document.getElementById("audio9").muted = false;
	}
	//stop play function
	function stopPlay(){
		//stopping all audio
		document.getElementById("audio1").pause();
		document.getElementById("audio2").pause();
		document.getElementById("audio3").pause();
		document.getElementById("audio4").pause();
		document.getElementById("audio5").pause();
		document.getElementById("audio6").pause();
		document.getElementById("audio7").pause();
		document.getElementById("audio8").pause();
		document.getElementById("audio9").pause();
		//resetting all audio
		document.getElementById("audio1").currentTime = 0;
		document.getElementById("audio2").currentTime = 0;
		document.getElementById("audio3").currentTime = 0;
		document.getElementById("audio4").currentTime = 0;
		document.getElementById("audio5").currentTime = 0;
		document.getElementById("audio6").currentTime = 0;
		document.getElementById("audio7").currentTime = 0;
		document.getElementById("audio8").currentTime = 0;
		document.getElementById("audio9").currentTime = 0;
	}
	//check audio playing function
	function checkAudioPlaying(ele){
		if(ele.currentTime < 0.1){
			//unmutting
			if(playing1) document.getElementById("audio1").muted = false;
			if(playing2) document.getElementById("audio2").muted = false;
			if(playing3) document.getElementById("audio3").muted = false;
			if(playing4) document.getElementById("audio4").muted = false;
			if(playing5) document.getElementById("audio5").muted = false;
			if(playing6) document.getElementById("audio6").muted = false;
			if(playing7) document.getElementById("audio7").muted = false;
			if(playing8) document.getElementById("audio8").muted = false;
			if(playing9) document.getElementById("audio9").muted = false;
		}
	}
	function checkAudioStop(){
		if(!playing1 && !playing2 && !playing3 && !playing4 && !playing5 && !playing6 && !playing7 && !playing8 && !playing9){
			playing = false;
			$("#play_button").css("background-color", "#4848f7").text("START");
			stopPlay();
		}
	}
});