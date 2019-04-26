
    $(function(){
    	console.log('hello');

    	var url = 'http://api.openweathermap.org/data/2.5/weather?q=New+York&appid=8acf24582eceedc9a5d2965f7b48f544'



    $.get(url, function(data) {
      // The get request fires a callback function when the API request finishes
      console.log(data);
      // The data object contains all the information returned in the API
      var weather = data.weather[0];
      // In this case, the most interesting bit of data is in the weather key
      // Now do something interesting with the data!
      $('body').html('The weather is ' + weather.description);
    });
});

$.get 