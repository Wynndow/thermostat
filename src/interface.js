$(document).ready(function() {
  var thermostat = new Thermostat();
  $("#temperature").html(thermostat.getCurrentTemperature());

  $('#temp_up').click(function() {
    thermostat.increaseTemperature();
    $("#temperature").html(thermostat.getCurrentTemperature());
  });

  $('#temp_down').click(function() {
    thermostat.decreaseTemperature();
    $("#temperature").html(thermostat.getCurrentTemperature());
  });

  $('#temp_reset').click(function() {
    thermostat.reset();
    $("#temperature").html(thermostat.getCurrentTemperature());
  });

  $('#powersave').change(function() {
    thermostat.togglePowerSaving();
    $("#temperature").html(thermostat.getCurrentTemperature());
  });

});
