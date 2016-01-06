describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("#temperature", function() {
    it("has a default temperature of 20", function() {
      expect(thermostat.currentTemperature).toEqual(20);
    });
  });

  describe("#increaseTemperature", function() {
    it("increases temperature by 1", function() {
      var temp = thermostat.currentTemperature;
      thermostat.increaseTemperature();
      expect(thermostat.currentTemperature).toEqual(temp + 1);
    });
  });

  describe("#decreaseTemperature", function() {
    it("decreases temperature by 1", function() {
      var temp = thermostat.currentTemperature;
      thermostat.decreaseTemperature();
      expect(thermostat.currentTemperature).toEqual(temp - 1);
    });
  });
});

  
