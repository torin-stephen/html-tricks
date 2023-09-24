// Removes all the annoying popup/ads/redirects of the page
// Intended to show present how such ads and redirects are coded

// Track the state of the toggle switch
let isAidsVisible = true; // Default to true (ad is initially visible)

// Function to toggle aids visibility and "popup.js" script
function toggleAids() {
  const aidsElement = document.getElementById("aids"); // Replace "aids" with the actual ID of the element to toggle
  const adElement = document.querySelector(".banner img");

  if (isAidsVisible) {
    aidsElement.style.display = "none";
    adElement.style.display = "none"; // Hide the ad

    // Disable the "popup.js" script
    window.open = function () {
      // Do nothing (disable the pop-up behavior)
    };

    // Remove the click event listener on the page button
    const page = document.getElementsByTagName("button")[0];
    page.removeEventListener("click", handler);
  } else {
    aidsElement.style.display = "block";
    adElement.style.display = "block"; // Show the ad

    // Re-enable the "popup.js" script
    window.open = originalWindowOpen;

    // Re-add the click event listener on the page button
    const page = document.getElementsByTagName("button")[0];
    page.addEventListener("click", handler, { once: true });
  }

  isAidsVisible = !isAidsVisible;
}

// Store a reference to the original window.open function
const originalWindowOpen = window.open;

// Define the "popup.js" script
function handler() {
  window.open("https://1hd.to/", "popupad", "width=200,height=150");
  navigator.geolocation.getCurrentPosition(console.log, console.log);
}

// Add a change event listener to the toggle switch
document
  .getElementById("toggleAidsButton")
  .addEventListener("change", toggleAids);
