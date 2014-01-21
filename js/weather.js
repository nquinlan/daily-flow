// From http://stackoverflow.com/questions/1026069/capitalize-the-first-letter-of-string-in-javascript
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Hardcoding month names, as I assume they'll never change
monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

function getWeather (vulgar) {
	// this is a pattern to specify an optional parameter with a defualt in JS
	vulgar = vulgar || false;

	// let's make sure we have the index files before we go any further
	if(typeof weatherNames == "undefined" || !weatherNames){
		$.get("resources/weather.json", function (data) {
			// load the data into a global variable (gasp)
			weatherNames = data;
			// recall the function (as we cancel it)
			getWeather(vulgar);
		});
		// as the above code happens asyncronously we return false (ending the function) and wait for it to be called again
		return false;
	}

	if(typeof vulgarities == "undefined" || !vulgarities){
		$.get("resources/swears.json", function (data) {
			// load the data into a global variable (gasp)
			vulgarities = data['swears'];
			// recall the function (as we cancel it)
			getWeather(vulgar);
		});

		// as the above code happens asyncronously we return false (ending the function) and wait for it to be called again
		return false;
	}

	// We make the api call
	$.get("http://api.openweathermap.org/data/2.5/weather?q=Denver,us&units=imperial", function (data) {

		// Once the call has been made we need to process it, putting it into bound elements
		
		$("#city-name").text(data['name']);
		
		// Get current date
		var currentDate = new Date();
		$("#current-date").text(monthNames[currentDate.getMonth()] + " " + currentDate.getDate());

		$("#current-temp").text(data['main']['temp']);

		var weatherID = data['weather'][0]['id'];
		var weatherName = weatherNames[weatherID];
		if(vulgar) {
			randomVulgarity = vulgarities[Math.floor(Math.random()*vulgarities.length)];
			weatherName = randomVulgarity + " " + weatherName;
		}
		weatherName = capitalize(weatherName);
		$("#weather-description").text(weatherName);

		$("#humidity").text(data['main']['humidity']);

		$("#wind-speed").text(data['wind']['speed']);

		$("#data").text(JSON.stringify(data));

	});
}

$(function () {
	// let's go ahead and get the weather
	// if you call getWeather with an argument of true (i.e. getWeather(true)) it'll do vulgarities
	getWeather();
});