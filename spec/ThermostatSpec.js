describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("#temperature", function() {
    it("has a default temperature of 20", function() {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe("#increaseTemperature", function() {
    it("increases temperature by 1", function() {
      var temp = thermostat.getCurrentTemperature();
      thermostat.increaseTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(temp + 1);
    });
  });

  describe("#decreaseTemperature", function() {
    it("decreases temperature by 1", function() {
      var temp = thermostat.getCurrentTemperature();
      thermostat.decreaseTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(temp - 1);
    });

    it("has a minimum temperature of 10", function() {
      for (count = 0; count < 11; count ++) {
        thermostat.decreaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
  });

  describe('#powerSavingMode', function() {
    it('has a default of true', function() {
      expect(thermostat.isPowerSaving).toBe(true);
    });

    it('has a max temp of 25 when on', function() {
      for (count = 0; count < 20; count ++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });

    it('has a max temp of 32 when off', function() {
      thermostat.togglePowerSaving();
      for (count = 0; count < 20; count ++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  describe("#reset", function() {
    it("resets the temperature to the default", function() {
      thermostat.increaseTemperature();
      thermostat.reset();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe("#getEnergyUsage", function() {
    it("returns green if temperature less than 18", function() {
      for (count = 0; count < 3; count ++) {
        thermostat.decreaseTemperature();
      }
      expect(thermostat.getEnergyUsage()).toEqual("low-power");
    });

    it("returns yellow if 18 <= temperature < 25", function() {
      for (count = 0; count < 2; count ++) {
        thermostat.decreaseTemperature();
      }
      expect(thermostat.getEnergyUsage()).toEqual("medium-power");
    });

    it("returns yellow if 18 <= temperature < 25", function() {
      for (count = 0; count < 4; count ++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.getEnergyUsage()).toEqual("medium-power");
    });

    it("returns red if temperature less than 18", function() {
      for (count = 0; count < 5; count ++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.getEnergyUsage()).toEqual("high-power");
    });
  });
});
