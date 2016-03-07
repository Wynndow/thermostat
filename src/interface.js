$(document).ready(function() {

  var thermostat = new Thermostat();
  updateTemperature();

  function updateTemperature() {
    $("#temperature").html(thermostat.getCurrentTemperature() + '&degc');
    $("body").attr("class", thermostat.getEnergyUsage());
  }

  $('#temp_up').click(function() {
    thermostat.increaseTemperature();
    updateTemperature();

  });

  $('#temp_down').click(function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('#temp_reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersave').click(function() {
    thermostat.togglePowerSaving;
    updateTemperature();
    if (thermostat.isPowerSaving) {
      $('#powersave').attr('background-color', '#00f000')
    } else{
      $('#powersave').attr('background-color', '#e80033')
    }
  });


});
