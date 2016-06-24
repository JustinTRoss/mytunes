var SearchView = Backbone.View.extend({
  initialize: function() {
    // something,
    this.render();
  },

  // template: _.template(),
  events: {
    'click .searchBtn': function(e) {
      this.collection.target = this.$el.find('input').val();
      this.collection.fetch();
    }
  },

  render: function() {
    this.$el.html('<div class="gapper"><input type="text" placeholder="Enter Search Here"><button class="searchBtn">Search</button></div>');
  }

});