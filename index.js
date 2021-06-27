

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`div[data-key="${e.code}"]`);
  if (!audio) return; // stops function from running
  key.classList.add("playing");

  audio.currentTime = 0; // rewind to the start
  audio.play();
}

const removeTransition = (e) => {
  if (e.propertyName !== "transform") return; // skip if it's not a transform
  e.target.classList.remove("playing"); // remove playing from current key, remove transition
};

function main() {
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  ); // for each key
  window.addEventListener("keydown", playSound);
}

main();