var n = 0;
var c = 2;

let clr;
let cr;
let col;

function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);
  // background(255, 238, 210);
  background(255);
  clr = color(133, 103, 232);
  cr = color(232, 103, 232);
  col = color( 255,0, 240);
}


function draw() {
  translate (width/2, height/2);
  rotate(-90);

 let hr = hour();
 let min = minute();
 let sec = second();
 let session = "AM";

//  if(hr > 0){
//   hr = hr - 12;
//   session = "PM";
//   background(211, 238, 255, 200);
// }

 // var a = n * 137.5;
 // var r = c * sqrt(n);
 // var x = r * cos(a) + width/2;
 // var y = r * sin(a) + height/2;
 // noFill();
 // stroke(255,0,0);
 // translate(0);
 // ellipse(x - 400, y - 400, 5,5);
 // n++;

 stroke(133, 103, 232);
 noFill();
 let sc = map(sec, 0, 60, 0, 360);
 //arc(0,0,600,600,0,sc);

  stroke(232, 103, 138);
  noFill();
  let mn = map(min, 0 , 60, 0, 360);
  //arc(0, 0, 540, 540, 0, mn);

  stroke(202, 153, 102);
  noFill();
  let hu = map(hr % 12, 0 , 12, 0, 360);
  let wh = map(hr, 0, 24, 0, 360);
  arc(0, 0, 670, 670, 0, wh);

  push();
  translate(100);
  stroke(254, 188, 200);
  rotate(mn);
  Flower2();
  pop();

  push();
  translate(100);
  stroke(col);
  rotate(wh);
  Flower3();
  pop();

  if(hr < 12){
    session = "MORNING";
    col = color(119, 195, 236);
  } else if(hr > 12 & hr < 17){
    session = "AFTERNOON";
    col = color(232, 103, 138);
  } else if (hr > 17 & hr < 24){
    session = "NIGHT";
    col = color(93,155,155);
  }

  push();
  translate(10);
  stroke(cr);
  rotate(hu);
  Flower1();
  pop();

  if(hr > 0){
    hr = hr - 12;
    session = "PM";
    cr = color( 194, 180, 226);
  }

  push();
  translate(0);
  stroke(clr);
  rotate(sc);
  Flower();

  if (frameCount < 3600) {
    clr = color(133, 103, 232);
  } else if ( frameCount < 7200) {
    clr = color(234, 235, 255);
  } else if ( frameCount < 10800) {
    clr = color(224, 254, 254);
  } else if (frameCount > 10800) {
    frameCount = frameCount - 10800;
    clr = color(133, 103, 232);
  }

  pop();


 }


function Flower(){
  beginShape();
  for (var a = 0; a < TWO_PI; a += 0.4) {
    var r = 200 * cos( (6/2) * (5*a));
    var x = r * (cos(a));
    var y = (10*r) * (sin(a));
    vertex(x,y);
    strokeWeight(1);
    noFill();

  }
  endShape(CLOSE);
}
