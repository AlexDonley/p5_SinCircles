// Alex Donley

let phase = 0;
let zoff = 0;
let r = 150;
let slider;
let completeness;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, 360, 90);
  completeness = createSlider(0, 100, 50)
  angleMode(DEGREES)
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  stroke(255);
  strokeWeight(2);
  noFill();
  beginShape();
  percentage = completeness.value();
  cordHeight = percentage * r/50
  dia = 2*r
  
  rotation = (completeness.value() * -1.8) + slider.value();
  for (let a = 0; a <= 3.60 * (completeness.value()); a += 1) {
    let x = r * cos(a + rotation);
    let y = r * sin(a + rotation);
    vertex(x, y);
  }
  endShape(CLOSE);
  
  textSize(20)
  text(cordHeight, 0, 0)
  text(dia**2, 0, 20)
  text(sqrt(((dia**2 - (4 * cordHeight**2)/4))), 0, 40)
  phase += 0.003;
  zoff += 0.01;
  
  // sqrt(((dia**2 - (4 * cordHeight**2)/4))
}