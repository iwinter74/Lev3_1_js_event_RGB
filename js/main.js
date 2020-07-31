// Schreibe eine kleine App die die Hintergrundfarbe ändert.
// Schreibe 3 Funktionen:
// 1. Ändere die Hintergrundfarbe, wenn auf einen Button 
// geklickt wird.
// 2. Ändere die Hintergrundfarbe wenn die Regler verschoben werden in den jeweiligen Farbwert.
// 3. konvertiere Dezimal zu Hex.
// Nutze:
// var count = 0; // global variable

let red = document.getElementById("rot")
let green = document.getElementById("grun")
let blue = document.getElementById("blau")
let r
let g
let b



let body = document.getElementsByTagName("body")

const andernHintergrund = (color) => {
    body[0].style.background = color
}



function andernRegler() {
    // console.log("red is " + document.getElementById("rot").value)
    // console.log("green is " + document.getElementById("grun").value)
    // console.log("blue is " + document.getElementById("blau").value)
    r = red.value
    r = Number(r)
    console.log(r)
    g = green.value
    g= Number(g)
    console.log(g)
    b=Number(b)
    b = blue.value
    b=Number(b)
    console.log(b)
    // RGBToHex(r,g,b)
  r = r.toString(16);
  console.log("rHex" + r)
  g = g.toString(16);
  console.log("gHex" + g)
    b = b.toString(16);
  console.log("bHex" + b)
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
  color = `#${r}${g}${b}`;
  console.log(color)
  body[0].style.background = color
  console.log(color)
}



function RGBToHex(r,g,b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  color = "#" + r + g + b;
  console.log(color)
}

RGBToHex(211,121,159)