

$(document).ready(function() {
  var now = dayjs()
  const currentDate = $('#currentDay');
 
  // This sets the dayjs hour
  const currentHour = dayjs().hour();
  

      
    // Loop through all div elements with a 'data-time' attribute
    $('div[data-time]').each(function() {
      // Get the 'data-time' attribute and convert it to an integer
      const dataTime = parseInt($(this).attr('data-time'), 10); 
      
      // Add the class 'present' if the data-time attribute is equal to the current hour
      if (dataTime == currentHour) {
        $(this).addClass('present');
      }
      
      else if (dataTime > currentHour) {
        // Add the class 'future' if the data-time attribute is greater than the current hour
        $(this).addClass('future'); 
      }
    });


    // lil somthin extra
  $(function() {
  
    if (currentHour < 12) {
      $('#currentDay').text('Good morning!');
    } else if (currentHour < 18) {
      $('#currentDay').text('Good afternoon!');
    } else {
      $('#currentDay').text('Good evening!');
    }
  });
  

  currentDate.text(now);
  currentDate.text(currentHour);

// Adding an event listenr to the class of saveBtn to store the Key Value pair into local storage.
  $('.saveBtn').click(function() {
    $('textarea').each(function() {
      let textValueKey = $(this).data('text');
      let currentText = $(this).val();
      localStorage.setItem(textValueKey, currentText);
    })
  })
  
  // Loop through each text area
  $('textarea').each(function() {
    let textValueKey = $(this).data('text'); 
    let savedText = localStorage.getItem(textValueKey);
    if (savedText) {
      $(this).val(savedText);
  }
  // console.log('Test');
})
});



