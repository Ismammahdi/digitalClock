function displayTime() {
  //declaring current object of Date
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  //   converting  24 hours to 12 hours
  hours = hours > 12 ? hours - 12 : hours;
  let meridiem = hours > 12 ? "PM" : "AM";

  //for padding time
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  let Display = hours + ":" + minutes + ":" + seconds + " " + meridiem;

  //To update the HTML
  document.querySelector(".clock").innerHTML = Display;
}

// Call the displayTime function every second to update the clock
setInterval(displayTime, 1000);
