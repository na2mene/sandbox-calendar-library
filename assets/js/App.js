const App = {
  calendar: null,
  WeekChars: [ '日', '月', '火', '水', '木', '金', '土' ],
  displayDate: null,

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
      altInput: true,
      altFormat: "",
      dateFormat: 'Y-m-d',
      onChange: self.onChangeCalendar,
    };
    self.calendar = $('.selector').flatpickr(config);
  },

  onChangeCalendar: function(selectedDates, dateStr, instance) {
    const targetDate = new Date(dateStr);
    App.displayDate = `${targetDate.getFullYear()}年${targetDate.getMonth() + 1}月${targetDate.getDate()}日 (${App.WeekChars[targetDate.getDay()]})`;
    console.log(App.displayDate);

    // DOM動的生成
    $('#labelTime').text(App.displayDate);
  },

  eventLoader: function() {
    const self = this;
    console.log('eventLoader');
  },
}

jQuery(function(){
  App.initialize().eventLoader();
});
