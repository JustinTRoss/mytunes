// SongQueueView.js - Defines a backbone view class for the song queue. LIST OF SONGS IN THE QUEUE
var SongQueueView = Backbone.View.extend({

  tagName: 'table class="container songQueue"',

  initialize: function() {
    this.collection.on('add remove', function() {
      this.render();
    }, this);
    
    this.render();

  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<div class="songth">Song Queue</div>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }




  // initialize: function() {
  // },

  // render: function() {
  // initialize: function() {
  // },
  // }

});
