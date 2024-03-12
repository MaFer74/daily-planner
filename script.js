$("#currentDay") .text(dayjs().format("ddd MMM D, YYYY"))

// $(".time-block") .each(function(){
//     console.log($(this).attr("id"));
//     var currentHour dayjs().hour(24)
// })

$(".time-block").each(function() {
    console.log($(this).attr("id"));
    // Extract the hour from the id, assuming the format is "hour-X"
    var hour = parseInt($(this).attr("id").split("-")[1]);
    var currentHour = dayjs().hour(); // Get the current hour

    // Compare the hour of the .time-block with the current hour
    if (hour === currentHour) {
        // If the hour matches the current hour, add a class or perform other actions
        $(this).addClass("current-hour");
    } else if (hour < currentHour) {
        // If the hour is in the past, add a class or perform other actions
        $(this).addClass("past-hour");
    } else {
        // If the hour is in the future, add a class or perform other actions
        $(this).addClass("future-hour");
    }
});
