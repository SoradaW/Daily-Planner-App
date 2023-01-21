var submitBtn = $(".saveBtn");
var time = $(".time-block");
var currentHours = moment().hour(); //military standard

//timer function displaying at the header of the page
function timer() {
  //add todays date to page to display 
  var currentDay = moment().format('dddd Do MMM, YYYY [at] kk:mm:ss');
  $("#currentDay").text(currentDay); 
  //or $("#currentDay").text(moment().format("dddd Do MMM YYYY, HH:mm"));
}

setInterval(timer, 1000);
time.each(function (i, element){
  var elementTime = Number(element.id);

  if (elementTime === currentHours) {
    $(element).children(".description").addClass("present");
  } else if (elementTime > currentHours) {
    $(element).children(".description").addClass("future");
  } else {
    $(element).children(".description").addClass("past");
  }

  var hour = $(element).first().text().trim();
  var description = localStorage.getItem(hour);

  if(description) {
    $(element).children(".description").val(description);
  }
});


submitBtn.on("click", function(event) {
  var description = $(event.currentTarget)
  .parent()
  .children(".description")
  .val();

  var hour = $(event.currentTarget).parent().first().text().trim();
  localStorage.setItem(hour, description);
});
