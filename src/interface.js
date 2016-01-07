$(document).ready(function() {
  var thermostat = new Thermostat();
  
  updateTemperature();



  function updateTemperature() {
    $("#temperature").html(thermostat.getCurrentTemperature());
    $("#thermostat").attr("class", thermostat.getEnergyUsage());
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

  $('#powersave').change(function() {
    thermostat.togglePowerSaving();
    updateTemperature();
  });


});
