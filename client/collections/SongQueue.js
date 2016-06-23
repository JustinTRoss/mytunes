// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function(song) {
      if (this.length <= 1) {
        this.at(0).play();
      }
    });

    this.on('remove', function() {
      if (this.length > 0) {
        this.at(0).play();
      }
    });

    this.on('ended', function() {
      this.remove(this.at(0));
    });


  }



});