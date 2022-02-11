var map = L.map("map").setView([-29.746352, -52.3562802], 15);
L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18,
  minZoom: 3,
}).addTo(map);
var marker = L.marker([-29.746352, -52.3562802]).addTo(map);

const countDown = setInterval(() => {
  var now = new Date();
  var eventDate = new Date(now.getFullYear(), 9, 24, 18, 0, 0);
  var diff = eventDate - now;
  var months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  // var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  // calculate the days left to the end of the month
  var days = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  if (hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(countDown);
  }

  document.getElementById("months").innerHTML = months;
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  document.getElementById("h-months").innerHTML = months;
  document.getElementById("h-days").innerHTML = days;
  document.getElementById("h-hours").innerHTML = hours;
  document.getElementById("h-minutes").innerHTML = minutes;
  document.getElementById("h-seconds").innerHTML = seconds;
}, 1000);

// var header = document.querySelector("header");
// console.log(header);
// document.body.removeChild(header);
// header.classList.remove("d-none");

document.addEventListener("scroll", () => {
  try {
    var scrollTop = document.documentElement.scrollTop;
    // console.log(scrollTop);
    var header = document.querySelector("header");
    if (scrollTop < 100) {
      header.classList.add("d-none");
      // document.body.removeChild(header);
    } else {
      header.classList.remove("d-none");
      // document.body.appendChild(header);
    }
  } catch (error) {
    console.log(error.message);
  }
});
