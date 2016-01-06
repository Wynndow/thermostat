$(document).ready(function() {
  var thermostat = new Thermostat();
  $("#temperature").html(thermostat.getCurrentTemperature());
});

