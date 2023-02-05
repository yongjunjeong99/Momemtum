const clockTitle = document.querySelector(".js-clock");

const currentDate = () => {
  const date = new Date();
  const christmas = new Date("2023-12-25");

  const dDay = christmas - date;

  const dDate = Math.floor(dDay / (1000 * 60 * 60 * 24));
  const dHour = Math.floor((dDay / (1000 * 60 * 60)) % 24);
  const dMin = Math.floor((dDay / (1000 * 60)) % 60);
  const dSec = Math.floor((dDay / 1000) % 60);

  clockTitle.innerText = `${dDate}Days ${dHour}Hours ${dMin}Mins ${dSec}Secs`;
};

currentDate();
setInterval(currentDate, 1000);
