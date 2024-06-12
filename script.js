console.log("Hello there");

/**
 * Generates the array of hexagons in the title
 */
function titleHex() {
  const title = document.getElementById("title-hex-container");
  //Get the height and width of the window
  const width = title.offsetWidth;
  const height = title.offsetHeight;
  //Get the defined size of the hexagon from CSS variables
  const hexS = getComputedStyle(document.documentElement)
    .getPropertyValue("--title-hex-width")
    .replace(/\D+/g, "");
  //Calculate the amount of hexes to fill the title card
  //Add 2 to each to make sure there is more than the screen needs
  const hexWidth = Math.floor(width / hexS) + 2;
  const hexHeight = Math.floor(height / hexS) + 1;

  let hexDiv = "";
  for (let h = 1; h <= hexHeight; h++) {
    let evenOdd = h % 2 === 0 ? "even" : "odd";
    hexDiv +=
      `<div class="${evenOdd}row hexrow">` +
      '<div class="title-hexagon"></div>'.repeat(hexWidth) +
      "</div>";
  }
  title.innerHTML = hexDiv;
}

function navStayTop() {
  let doc = document.getElementsByTagName("body")[0];
  const titlecard = document.getElementsByClassName("title-card")[0];
  let nav = document.getElementById("navbar");

  if (doc.scrollTop > titlecard.getBoundingClientRect().bottom) {
    nav.className = "fixednav";
  } else {
    nav.className = "freenav";
  }
}

//Code to run on initial load completionb
window.onload = function () {
  titleHex();
};
window.onresize = function () {
  titleHex();
};
window.addEventListener("scroll", navStayTop);
//document.getElementById('title-hex-container').addEventListener("load", function(){
//    console.log("Helld World");
//});

//Listen for window adjustments
//Get the width and height of the internal window.
