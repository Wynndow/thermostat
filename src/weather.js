  function Weather(city, country) {
    this.API = '424ec95efbcca8f160c02550ec521a03';
    this.city = city + ',' + country;


    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ','+ country + '&appid=' + this.API,
      type: 'GET',
      data: null,
      success: success,
      dataType: 'json',
    });

  }

  function success(data) {
    $('#city_weather').text(data.name)
  }
