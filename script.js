const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
  let date = new Date();

  let hours = date.getHours() * 30;
  let minutes = date.getMinutes() * 6;
  let seconds = date.getSeconds() * 6;

  hr.style.transform = `rotate(${hours + minutes / 12}deg)`;
  mn.style.transform = `rotate(${minutes}deg)`;
  sc.style.transform = `rotate(${seconds}deg)`;
});
