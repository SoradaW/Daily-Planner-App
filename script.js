//create varibles
const currentDay = moment().format('dddd Do MMM, YYYY [at] hh:mm');
$("#currentDay").text(currentDay); //add todays date to page to display 
//or $("#currentDay").text(moment().format("dddd Do MMM YYYY, HH:mm"));
var submitBtn = $(".saveBtn");
var time = $(".time-block");
var currentHours = moment().hour(); //military standard

setInterval(currentDay, 1000);
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


