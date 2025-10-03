'use strict';


const sounds = {
  a: "crash.mp3",
  s: "snare.mp3",
  d: "kick-bass.mp3",
  f: "tom-1.mp3",
  g: "tom-2.mp3",
  h: "tom-3.mp3",
  j: "tom-4.mp3"
};


function playSound(key) {
  if (sounds[key]) {
    const audio = new Audio(sounds[key]);
    audio.currentTime = 0;
    audio.play();

    const drum = document.querySelector(`.drum[data-key="${key}"]`);
    if (drum) {
      drum.classList.add("active");
      setTimeout(() => drum.classList.remove("active"), 200);
    }
  }
}


document.addEventListener("keydown", (e) => {
  playSound(e.key.toLowerCase());
});


document.querySelectorAll(".drum").forEach(drum => {
  drum.addEventListener("click", () => {
    const key = drum.getAttribute("data-key");
    playSound(key);
  });
});
