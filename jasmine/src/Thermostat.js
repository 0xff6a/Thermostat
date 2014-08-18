function Thermostat() {
	this.temperature = 20;
	this.powerSaving = true;
};

Thermostat.prototype.increaseTemperature = function() {
	this.temperature = Math.min(this.maximumTemperature(), this.temperature + 1);
};

Thermostat.prototype.decreaseTemperature = function() {
	this.temperature = Math.max(this.minimumTemperature(), this.temperature - 1);
};

Thermostat.prototype.maximumTemperature = function() {
	return (this.powerSaving ? 25 : 32);
};

Thermostat.prototype.minimumTemperature = function() {
	return 10;
};

Thermostat.prototype.efficiency = function() {
	if( this.temperature < 18 ) { return 'good'; };
	if( this.temperature > 25 ) { return 'poor'; };
	return 'average';
};
