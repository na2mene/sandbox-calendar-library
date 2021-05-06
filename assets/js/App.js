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
      locale: 'ja',
    };
    self.calendar = $('.selector').flatpickr(config);
  },

  eventLoader: function() {
    const self = this;
    console.log('eventLoader');
  },
}

jQuery(function(){
  App.initialize().eventLoader();
});
