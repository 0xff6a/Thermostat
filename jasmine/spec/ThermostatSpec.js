describe('Thermostat:', function() {
  
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('default settings', function() {
  
    it('should have a default temperature of 20', function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it('should have a minimum temperature of 10', function() {
      expect(thermostat.minimumTemperature()).toEqual(10);
    });

    it('should have a maximum temperature of 25', function() {
      expect(thermostat.maximumTemperature()).toEqual(25);
    });

    it('should have power saving mode enabled', function() {
      expect(thermostat.powerSaving).toBe(true);
    });

  });

  describe('changing temperature', function() {

    it('should be able to increase the temperature', function () {
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(21);
    });

    it('should be able to decrease the temperature', function () {
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(19);
    });

    it('should not be able to increase temperature above the maximum', function() {
      thermostat.temperature = thermostat.maximumTemperature();
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(25);
    });

    it('should not be able to decrease the temperature below the minimum', function () {
      thermostat.temperature = thermostat.minimumTemperature();
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(10);
    });

  });

  describe('power saving mode', function() {

    it('should have a maximum temperature of 25 with power saving on', function() {
      thermostat.powerSaving = true;
      expect(thermostat.maximumTemperature()).toEqual(25);
    });

    it('should have a maximum temperature of 32 with power saving off', function() {
      thermostat.powerSaving = false;
      expect(thermostat.maximumTemperature()).toEqual(32);
    });

  });

 });
