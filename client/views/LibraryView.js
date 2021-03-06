// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'table class="container"',


  initialize: function() {
    this.render();

    this.collection.on('sync', function() {
      this.render();
    }, this);

  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Album</th><th>Artist</th><th>Song</th><th>Play Count</th>').append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
