const MIN_DURATION = 10;
const body = document.querySelector("body");

function snowFall() {
  const snow = document.createElement("span");
  const delay = Math.random() * 10;
  const initialOpacity = Math.random();
  const duration = Math.random() * 20 + MIN_DURATION;

  snow.classList.add("material-symbols-outlined");
  snow.innerHTML = "ac_unit";
  snow.style.left = `${Math.random() * window.innerWidth - 25}px`;
  snow.style.animationDelay = `${delay}s`;
  snow.style.opacity = initialOpacity;
  snow.style.animation = `fall ${duration}s linear`;
  snow.style.zIndex = `-1`;
  body.append(snow);
  setTimeout(() => {
    body.removeChild(snowFall);
    snowFall();
  }, (duration + delay) * 100000);
}

for (let i = 0; i < 75; i++) {
  setTimeout(snowFall, 500 * i);
}
