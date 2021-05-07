const App = {
  $calendar: null,
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
    self.$calendar = $('.selector').flatpickr(config);
  },

  onChangeCalendar: function(selectedDates, dateStr, instance) {
    const targetDate = new Date(dateStr);
    App.displayDate = `${targetDate.getFullYear()}年${targetDate.getMonth() + 1}月${targetDate.getDate()}日 (${App.WeekChars[targetDate.getDay()]})`;
    console.log(App.displayDate);

    $('#labelTime').text(App.displayDate);
    $('.displayNone').removeClass('displayNone');
  },

  onSubmit: function() {
    const $submitEl = $('.submitBtn');
    const preferredDate1 = `${$('#selectedate-h-1').val()}:${$('#selectedate-m-1').val()}`;
    const preferredDate2 = `${$('#selectedate-h-2').val()}:${$('#selectedate-m-2').val()}`;
    const preferredDate3 = `${$('#selectedate-h-3').val()}:${$('#selectedate-m-3').val()}`;
    $('.result').text(`第一希望日時: ${preferredDate1} \n第二希望日時: ${preferredDate2} \n第三希望日時: ${preferredDate3}`)

  },

  onChangeRadio: function() {
    const value = $('input:radio[name="target-time"]:checked').val();
    if (value === '1') {
      $('.displayNone2').removeClass('displayNone2');
    } else {
      $('.timepicker').addClass('displayNone2');
    }
  },

  eventLoader: function() {
    const self = this;
    $('.submitBtn').on('click', self.onSubmit);
    $('.selectedRadio').on('change', self.onChangeRadio);
  },
}

$(function(){
  App.initialize().eventLoader();
});
