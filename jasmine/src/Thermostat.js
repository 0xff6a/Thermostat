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
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };

// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };

// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }

//   this.isPlaying = true;
// };

// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };