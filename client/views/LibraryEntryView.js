// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({
  initialize: function() {
    this.model.on('change:counter', this.render, this);
  },

  tagName: 'tr',

  template: _.template('<img class="peanut" src=<%= artwork_url %>></img> <td class="artist"><%= artist %></td> <td class="songColumn"><%= title %></td><td class="counter"><%= counter %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
      // this.model.play();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
