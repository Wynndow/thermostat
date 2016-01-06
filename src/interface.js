$(document).ready(function() {
  var thermostat = new Thermostat();
  $("#temperature").html(thermostat.getCurrentTemperature());

  $('body').css('background-color', thermostat.getColour());


  $('#temp_up').click(function() {
    thermostat.increaseTemperature();
    $("#temperature").html(thermostat.getCurrentTemperature());
    $('body').css('background-color', thermostat.getColour());

  });

  $('#temp_down').click(function() {
    thermostat.decreaseTemperature();
    $("#temperature").html(thermostat.getCurrentTemperature());
    $('body').css('background-color', thermostat.getColour());

  });

  $('#temp_reset').click(function() {
    thermostat.reset();
    $("#temperature").html(thermostat.getCurrentTemperature());
    $('body').css('background-color', thermostat.getColour());

  });

  $('#powersave').change(function() {
    thermostat.togglePowerSaving();
    $("#temperature").html(thermostat.getCurrentTemperature());
    $('body').css('background-color', thermostat.getColour());

  });


});
