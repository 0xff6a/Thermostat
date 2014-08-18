describe('Thermostat:', function() {
  
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('default settings', function() {
  
    it('should have a default temperature of 20', function() {
      expect(thermostat.temperature).toEqual(20);
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

  });

  

  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     player.play(song);
  //     player.pause();
  //   });

  //   it("should indicate that the song is currently paused", function() {
  //     expect(player.isPlaying).toBeFalsy();

  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });

  //   it("should be possible to resume", function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });

  // // demonstrates use of spies to intercept and test method calls
  // it("tells the current song if the user has made it a favorite", function() {
  //   spyOn(song, 'persistFavoriteStatus');

  //   player.play(song);
  //   player.makeFavorite();

  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });

  // //demonstrates use of expected exceptions
  // describe("#resume", function() {
  //   it("should throw an exception if song is already playing", function() {
  //     player.play(song);

  //     expect(function() {
  //       player.resume();
  //     }).toThrowError("song is already playing");
  //   });
  // });
});
