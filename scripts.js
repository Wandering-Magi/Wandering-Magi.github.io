const element = document.getElementById('title-hex-container');

console.log(element);

// Listen for the window to resize and grab the height and width
addEventListener('resize', (event) => {});
onresize = (event) => {
  const element = document.getElementById('title-hex-container');
  //Get the width and height from the titlecard box
  const w = element.offsetWidth;
  const h = element.offsetHeight;
  //Get the width of the hexagons from the CSS variable table and resolve as an int
  let bodyStyles = window.getComputedStyle(document.body);
  let hexS = bodyStyles
    .getPropertyValue('--title-hex-width')
    .replace(/\D/g, '');
  //Calculate the amount of hexagons wide and tall, add one for clean overflow
  let rows = Math.ceil(h / hexS) + 1;
  let cols = Math.ceil(h / hexS) + 1;
  //Iterate rows
  for (let r = 0; r > rows; r++) {
    //Iterate Columns
    for (let c = 0; c > cols; c++) {}
  }

  console.log(
    `${w}:${Math.ceil(w / hexS) + 1} ${h}:${Math.ceil(h / hexS) + 1}`
  );
};
