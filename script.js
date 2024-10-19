// Select the song element and the audio element
const songElement = document.getElementById("play-song");
const audio = document.getElementById("background-music");

// Add click event listener to the song element
songElement.addEventListener("click", () => {
  // Check if the music is playing, if not, play it
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

/////////////////////////

// Set the date we're counting down to
var countDownDate = new Date("Oct 23, 2024 20:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in the elements with id
  document.getElementById("days").innerHTML = days + "<br>Days";
  document.getElementById("hours").innerHTML = hours + "<br>Hours";
  document.getElementById("minutes").innerHTML = minutes + "<br>Minutes";
  document.getElementById("seconds").innerHTML = seconds + "<br>Seconds";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00<br>Days";
    document.getElementById("hours").innerHTML = "00<br>Hours";
    document.getElementById("minutes").innerHTML = "00<br>Minutes";
    document.getElementById("seconds").innerHTML = "00<br>Seconds";
  }
}, 1000);
