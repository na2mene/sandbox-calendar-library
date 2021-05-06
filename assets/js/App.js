const App = {
  calendar: null,

  initialize: function() {
    const self = this;
    self.initFlatpickr();
    return self;
  },

  initFlatpickr: function() {
    const self = this;
    const config = {
      disableMobile: true,
      inline: true,
    };
    self.calendar = $('.selector').flatpickr(config);
    // calendar.open();
  },

  eventLoader: function() {
    const self = this;
    console.log('eventLoader');
  },
}

jQuery(function(){
  App.initialize().eventLoader();
});
