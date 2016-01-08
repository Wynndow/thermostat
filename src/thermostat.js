var Thermostat = (function() {

  function Thermostat() {
    this.temperature = DEFAULT_TEMP;
    this.isPowerSaving = true;
  }

  const DEFAULT_TEMP = 20;
  const MIN_TEMP = 10;
  const MAX_TEMP = 32;
  const POWER_SAVE_MAX_TEMP = 25;
  const YELLOW_TEMP = 18;
  const RED_TEMP = 25;

  Thermostat.prototype.increaseTemperature = function() {
    var maxTemp = this.isPowerSaving ? POWER_SAVE_MAX_TEMP : MAX_TEMP;

    if (this.temperature < maxTemp) {
      this.temperature += 1;
    }
  };

  Thermostat.prototype.decreaseTemperature = function() {
    if (this.temperature > MIN_TEMP) {
      this.temperature -= 1;
    }
  };

  Thermostat.prototype.togglePowerSaving = function() {
    this.isPowerSaving = !this.isPowerSaving;
  };

  Thermostat.prototype.reset = function() {
    this.temperature = DEFAULT_TEMP;
  };

  Thermostat.prototype.getEnergyUsage = function() {
    if (this.temperature < YELLOW_TEMP) {
      return "low-power";
    } else if (this.temperature < RED_TEMP) {
      return "medium-power";
    } else {
      return "high-power";
    }
  };

  Thermostat.prototype.getCurrentTemperature = function() {
    return this.temperature;
  };

  return Thermostat;

}());
