function getWeatherData(lang, fnOK, fnError) {
    navigator.geolocation.getCurrentPosition(locSuccess, locError);

    function locSuccess(position) {
        // Check cache
        var cache = localStorage.weatherCache && JSON.parse(localStorage.weatherCache);
        var currDate = new Date();
        // If the cache is newer than 30 minutes, use the cache
        if(cache && cache.timestamp && cache.timestamp > currDate.getTime() - 30*60*1000){
            fnOK.call(this, cache.data);
        } else {
            $.getJSON(
                'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + position.coords.latitude + '&lon=' +
                position.coords.longitude + '&units=metric' + '&cnt=7' + '&lang=' + lang + '&callback=?',
                function (response) {
                    // Store the cache
                    localStorage.weatherCache = JSON.stringify({
                        timestamp: (new Date()).getTime(),	// getTime() returns milliseconds
                        data: response
                    });
                    // Call the function again
                    locSuccess(position);
                }
            );
        }
    }

    function locError(error) {
        var message = 'Location error. ';
        switch(error.code) {
            case error.TIMEOUT:
                message += 'A timeout occured! Please try again!';
                break;
            case error.POSITION_UNAVAILABLE:
                message += 'We can\'t detect your location. Sorry!';
                break;
            case error.PERMISSION_DENIED:
                message += 'Please allow geolocation access for this to work.';
                break;
            case error.UNKNOWN_ERROR:
                message += 'An unknown error occured!';
                break;
        }
        fnError.call(this, message);
    }
}

 $(function() {
   
    getWeatherData('uk', fnOK, fnErr);    
    
    function fnOK(data) {
	   
		var offset = (new Date()).getTimezoneOffset()*60*1000;
			//Today
		for (var i=1; i<=7; i++) {
			var localTime = new Date(data.list[i-1].dt*1000 - offset);
			$('#day'+i+'_img').html('<img src="assets/img/background/' + (data.list[i-1].weather[0].icon) +'.jpg">'); 
			$('.city').text(data.city.name);
			$('#day'+i+'_time').text(moment(localTime).format('dddd') +', '+ moment(localTime).format("MMMM Do"));
			$('#day'+i+'_temp').text(Math.round(data.list[i-1].temp.day) + '\xB0C');
			$('#day'+i+'_descr').text(data.list[i-1].weather[0].description);
			$('#day'+i+'_icon').html('<img src="assets/img/icons/' + (data.list[i-1].weather[0].icon) +'.png">');			
		}	
		console.dir(data);
    }
    
    function fnErr(msg) {
      console.error(msg);   
    }
});