/*
Can click into a block and enter an event
When clicking the save button for the time block should save text to local storage
Saved data should stay saved
*/

// A $( document ).ready() block.
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

});



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
