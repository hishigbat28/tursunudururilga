// Select the song element and the audio element
const songElement = document.getElementById('play-song');
const audio = document.getElementById('background-music');

// Add click event listener to the song element
songElement.addEventListener('click', () => {
  // Check if the music is playing, if not, play it
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
