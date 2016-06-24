// SongQueueEntryView.js - Defines a backbone view class for the song queue entries. INDIVIDUAL SONGS
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr',

  template: _.template('<td class = "songQueue artist2"><%= artist %></td> <td class="songColumn songQueue"><%= title %></td>'),

  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
