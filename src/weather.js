function getWeather(theSelectedArray){

  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=' + queryPreperation(theSelectedArray),
    type: 'GET',
    data: null,
    success: doAThing,
    dataType: 'json',
  })

  function doAThing(data) {
    $('#city_name').text(data.name);
    $('#city_temp').text(((data.main.temp).toFixed(0)) + ' degrees');
    $('#city_weather_desc').text(data.weather[0].description);
  }
}

function queryPreperation(selectedArray){
  this.API = '424ec95efbcca8f160c02550ec521a03';
  var countryCode = isoCountries[(selectedArray[2].trim().replace(/ /g,"_"))] ;
  var queryString = selectedArray[0] + ',' + countryCode + '&appid='+ this.API + '&units=metric';
  return queryString;
}
