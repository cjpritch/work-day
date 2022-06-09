// Display current date 
var currentDate = moment().format("MMMM Do, YYYY");
var displayDay = document.getElementById("currentDay");
displayDay.innerHTML = currentDate;
var currentHour = moment().format("HH");

// Refresh task descriptions button 
$("#refreshBtn").click(function (event){
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
});


