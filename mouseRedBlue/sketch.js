// change background color by moving mouse
//https://editor.p5js.org/bbdemos/sketches/wVXIRvgN2

function setup() {
  createCanvas(400, 400);
}

// blue is mapped by mouseX position
// red is mapped by mouseY
// green is constant at 128 

function draw() {
  let bluex = map(mouseX,0,width,0,255);
  let redy = map(mouseY,0,width,0,255);
  background(redy,128,bluex);
}

