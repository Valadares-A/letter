function openGoogleMaps() {
  window
    .open(
      "https://www.google.com.br/maps/place/Manns%C3%A3o/@-29.746352,-52.3584689,17z/data=!3m1!4b1!4m5!3m4!1s0x951c99acea3a16ed:0x5c3305bbbe3475c9!8m2!3d-29.746352!4d-52.3562802",
      "_blank"
    )
    .focus();
}

var map = L.map("map").setView([-29.746352, -52.3562802], 15);
L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18,
  minZoom: 3,
}).addTo(map);

var heartMarker = L.icon({
  iconUrl: "./src/assets/bi_chat-square-heart-fill-normal.svg",
  iconSize: [48, 48], // size of the icon
  iconAnchor: [48, 48], // point of the icon which will correspond to marker's location
  popupAnchor: [-24, -46], // point from which the popup should open relative to the iconAnchor
});
var marker = L.marker([-29.746352, -52.3562802], { icon: heartMarker })
  .addTo(map)
  .bindPopup(
    `<span>
    <strong>Mannsão.</strong><br />
    <span class="c-marsala">Cerro Alegre Alto,Santa Cruz do Sul - RS.</span>
    <br />
    <button class="btn btn-primary btn-sm mt-2" onclick="openGoogleMaps()">Ver rotas</button>
  </span>`
  )
  .openPopup();

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

  if (months <= 0 && days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
    clearInterval(countDown);
  } else {
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
  }
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
