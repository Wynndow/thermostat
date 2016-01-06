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

    it("has a minimum temperature of 10", function() {
      for (count = 0; count < 11; count ++) {
        thermostat.decreaseTemperature();
      }
      expect(thermostat.currentTemperature).toEqual(10);
    });
  });

  describe('#powerSavingMode', function() {
    it('has a default of off', function() {
      expect(thermostat.isPowerSaving).toBe(false)
    });

    it('has a max temp of 32 when off', function() {
      for (count = 0; count < 20; count ++) {
        thermostat.increaseTemperature()
      }
      expect(thermostat.currentTemperature).toEqual(32);
    });
  });


});
