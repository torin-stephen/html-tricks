// Opens a popup of a page if allowed by webbrowser, usually automatically turned off
window.open(
  "http://www.yourdomain.com/yourad.html",
  "popupad",
  "width=200,height=150"
);

// Will open the popup when the user clicks on the encrypt/decrypt button for the first time
// proof of how such popups work
var page = document.getElementsByTagName("button")[0];
var handler = function () {
  // example shady website
  window.open("http://shadywebsite.com", "popupad", "width=200,height=150");
  // request the location of the user to prove how this is requested by such shady sites like above ^
  // It doesnt do anything but log the position (if allowed by user)
  navigator.geolocation.getCurrentPosition(console.log, console.log);
};

// once: true means it will not happen the second time
page.addEventListener("click", handler, { once: true });
