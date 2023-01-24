const submitBtn = $(".saveBtn");
const time = $(".time-block");
const currentHours = moment().hour(); //military standard

//timer function displaying at the header of the page
function timer() {
  //add todays date to page to display 
  let currentDay = moment().format('dddd Do MMM, YYYY [at] kk:mm:ss');
  $("#currentDay").text(currentDay); 
  //or $("#currentDay").text(moment().format("dddd Do MMM YYYY, HH:mm"));
}

setInterval(timer, 1000);
time.each(function (i, element){
  let elementTime = Number(element.id);

  if (elementTime === currentHours) {
    $(element).children(".description").addClass("present");
  } else if (elementTime > currentHours) {
    $(element).children(".description").addClass("future");
  } else {
    $(element).children(".description").addClass("past");
  }

  let hour = $(element).first().text().trim();
  let description = localStorage.getItem(hour);

  if(description) {
    $(element).children(".description").val(description);
  }
});

submitBtn.on("click", function(event) {
  let description = $(event.currentTarget)
  .parent()
  .children(".description")
  .val();

  let hour = $(event.currentTarget).parent().first().text().trim();
  localStorage.setItem(hour, description);
});
