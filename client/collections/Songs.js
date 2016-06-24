// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  target: undefined,
  model: SongModel,

  url: 'https://api.parse.com/1/classes/songs/',

  parse: function(e) {
    if (this.target === undefined) {
      return e.results;
    } else {
      var target = this.target.toLowerCase();
      return _.filter(e.results, function(song) {
        return song.title.toLowerCase().indexOf(target) !== -1;
        console.log(target);
      });
    }
  },

  initialize: function() {
    this.fetch();
  }

});