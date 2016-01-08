function getWeather(theSelectedArray){

  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=' + queryPreperation(theSelectedArray),
    type: 'GET',
    data: null,
    success: success,
    dataType: 'json',
  })

  function success(data) {
    var cityName = data.name;
    var cityTemp = (data.main.temp- 273.15).toFixed(0);
    var cityWeatherDesc = data.weather[0].description;
    $('#city_name').text(cityName);
    $('#city_temp').text(cityTemp + ' degrees');
    $('#city_weather_desc').text(cityWeatherDesc);
  }
}

function queryPreperation(selectedArray){
  this.API = '424ec95efbcca8f160c02550ec521a03';
  var properCountries = invert(isoCountries);
  var countryCode = properCountries[(selectedArray[2].trim().replace(/ /g,"_"))] ;
  var queryString = selectedArray[0] + ',' + countryCode + '&appid='+ this.API;
  return queryString;
}
