$(document).ready(function() {
  var thermostat = new Thermostat();
  $("#temperature").html(thermostat.getCurrentTemperature());

  function setColor() {
    if (thermostat.getEnergyUsage() === 'low-power') {
      var backgroundColor = '#00853f';
    } else if (thermostat.getEnergyUsage() === "medium-power") {
      var backgroundColor = '#f3ec19';
    } else {
      var backgroundColor = '#cc0000'
    }
    $('body').css('background-color', backgroundColor);
  };

  setColor();

  $('#temp_up').click(function() {
    thermostat.increaseTemperature();
    $("#temperature").html(thermostat.getCurrentTemperature());
    setColor();

  });

  $('#temp_down').click(function() {
    thermostat.decreaseTemperature();
    $("#temperature").html(thermostat.getCurrentTemperature());
    setColor();
  });

  $('#temp_reset').click(function() {
    thermostat.reset();
    $("#temperature").html(thermostat.getCurrentTemperature());
    setColor();
  });

  $('#powersave').change(function() {
    thermostat.togglePowerSaving();
    $("#temperature").html(thermostat.getCurrentTemperature());
    setColor();
  });


});
