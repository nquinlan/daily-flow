// Code from Dsolver http://www.dsolver.ca/time
// Needs to be updated to cycle minutes more smoothly

function Clock(mode){
	this.mode = mode;
	this.clockElem = $("#thetime");
	this.display = "time";
	this.darkColor = "rgba(50, 50, 50, 0.7)";
	this.lightColor = "rgba(255, 255, 255, 0.8)";
	
	this.interactions();
	this.update();
	
	window.setInterval(function(){clock.update()}, 1000);
	
};

Clock.prototype.update = function(){
	
	var hexcol = this.convertTime();
	
	if(this.display === "time"){
		var dispHour = this.hour;
		if(this.mode === "12h" && this.hour > 12) {
			dispHour = this.hour - 12;
		}
		this.clockElem.html((dispHour < 10 ? "0"+dispHour : dispHour)
			+":"+(this.minute < 10 ? "0"+this.minute : this.minute)
			+":"+(this.second < 10 ? "0"+this.second : this.second)
			+" "+(this.mode === "12h" ? (this.hour < 12 ? "AM" : "PM") : ""));
	} else if(this.display === "hex") {
		this.clockElem.html("#"+hexcol);
	}
	
	this.clockElem.css({
		"text-shadow":"1px 4px 6px #"+hexcol+", 0 0 0 #000, 1px 4px 6px #"+hexcol
	});
	
	document.body.style.background = "#"+hexcol;
	var r = parseInt(hexcol.substr(0, 2), 16);
	var g = parseInt(hexcol.substr(2, 2), 16);
	var b = parseInt(hexcol.substr(4, 2), 16);
	
	if(r > 210 && g > 210 && b > 210){
		$("#thetime").css("color", this.darkColor);
	} else {
		$("#thetime").css("color", this.lightColor);
	}
}

Clock.prototype.convertTime = function(time){
	
	time = time ? time : new Date();
	this.hour = time.getHours();
	this.minute = time.getMinutes();
	this.second = time.getSeconds();
	var hexcol = (Math.round(time.getTime() / 1000) % 16581375).toString(16);
	
	while(hexcol.length < 6){
		hexcol = "0"+hexcol;
	}
	return hexcol;
}

Clock.prototype.interactions = function(){
	$(document).click(function(){
		clock.toggle();
		clock.update();
	});
	
	$("#switchTime").click(function(event){
		event.stopPropagation();
		if(clock.mode === "24h"){
			clock.mode = "12h";
			$("#switchTime").html("Switch to 24 hour clock");
		} else if(clock.mode === "12h"){
			clock.mode = "24h";
			$("#switchTime").html("Switch to 12 hour clock");
		}
		clock.update();
	});
}

Clock.prototype.toggle = function(){
	this.display = (this.display === "hex" ? "time" : "hex");
}

$(document).ready(function(){
	if(window.location.hash && window.location.hash=="24h"){
		mode = "24h";
	} else {
		mode = "12h";
	}
	clock = new Clock(mode);

});