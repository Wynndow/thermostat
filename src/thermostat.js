function Thermostat() {
  this.currentTemperature = 20;
  this.isPowerSaving = false;
}

Thermostat.prototype.increaseTemperature = function() {
  var maxTemp = this.isPowerSaving ? 25 : 32;

  if (this.currentTemperature < maxTemp) {
    this.currentTemperature += 1;
  }
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.currentTemperature > 10) {
    this.currentTemperature -= 1;
  }
};
