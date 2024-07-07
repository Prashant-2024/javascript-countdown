// $("h1").text("CountDown till 2025");

const date = document.getElementById("date").value;
const time = document.getElementById("time").value;

console.log(date);
console.log(time);  

let CountDown = new Date("Jan 1, 2025 00:00:00").getTime();

function updateCountDown() {
  let CurrentDate = new Date().getTime();
  let TimeLeft = CountDown - CurrentDate;

  // finds the number of days
  let Days = Math.floor(TimeLeft / (1000 * 60 * 60 * 24));

  // finds the number of hours, after the days are removed from the TimeLeft
  let Hours = Math.floor((TimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // finds the number of minutes, after the hours are removed from the TimeLeft
  let Minutes = Math.floor((TimeLeft % (1000 * 60 * 60)) / (1000 * 60));

  // finds the number of seconds, after the minutes are removed from the TimeLeft
  let Seconds = Math.floor((TimeLeft % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    Days + "d " + Hours + "h " + Minutes + "m " + Seconds + "s ";
}

setInterval(updateCountDown, 1000);
