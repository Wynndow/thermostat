function Thermostat() {
  this.currentTemperature = 20;
}

Thermostat.prototype.increaseTemperature = function() {
  this.currentTemperature += 1;
};

Thermostat.prototype.decreaseTemperature = function() {
  this.currentTemperature -= 1;
};
