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

// Save task description button 
$(".saveBtn").click(function (event) {
    var hr9 = document.getElementById("hr-9").value;
        localStorage.setItem("task9" , hr9);
    var hr10 = document.getElementById("hr-10").value;
        localStorage.setItem("task10" , hr10);
    var hr11 = document.getElementById("hr-11").value;
        localStorage.setItem("task11" , hr11);
    var hr12 = document.getElementById("hr-12").value;
        localStorage.setItem("task12" , hr12);
    var hr1 = document.getElementById("hr-1").value;
        localStorage.setItem("task1" , hr1);
    var hr2 = document.getElementById("hr-2").value;
        localStorage.setItem("task2" , hr2);
    var hr3 = document.getElementById("hr-3").value;
        localStorage.setItem("task3" , hr3);
    var hr4 = document.getElementById("hr-4").value;
        localStorage.setItem("task4" , hr4);
    var hr5 = document.getElementById("hr-5").value;
        localStorage.setItem("task5" , hr5);
})

// Place task descriptions from local storage back onto page
var saved9 = localStorage.getItem('task9');
    document.getElementById("hr-9").value = saved9;
var saved10 = localStorage.getItem('task10');
    document.getElementById("hr-10").value = saved10;
var saved11 = localStorage.getItem('task11');
    document.getElementById("hr-11").value = saved11;
var saved12 = localStorage.getItem('task12');
    document.getElementById("hr-12").value = saved12;
var saved1 = localStorage.getItem('task1');
    document.getElementById("hr-1").value = saved1;
var saved2 = localStorage.getItem('task2');
    document.getElementById("hr-2").value = saved2;
var saved3 = localStorage.getItem('task3');
    document.getElementById("hr-3").value = saved3;
var saved4 = localStorage.getItem('task4');
    document.getElementById("hr-4").value = saved4;
var saved5 = localStorage.getItem('task5');
    document.getElementById("hr-5").value = saved5;

// Comparing time slot to current time 
