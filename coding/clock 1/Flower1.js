function Flower1(){
  beginShape();
// line becomes dots if 0.1 changed to higher number
  for (var a = 0; a < TWO_PI; a += 0.4) {
    var r = 300 * cos( (15*a));
    var x = r * (cos(a));
    var y = (9*r) * (sin(a));
    vertex(x,y);
    strokeWeight(1.5);

  }
  endShape(CLOSE);
}

function Flower2(){
  beginShape();
// line becomes dots if 0.1 changed to higher number
  for (var a = 0; a < TWO_PI; a += 0.4) {
    var r = 250 * cos( (15*a));
    var x = r * (cos(a));
    var y = (9*r) * (sin(a));
    vertex(x,y);
    strokeWeight(1.5);

  }
  endShape(CLOSE);
}

function Flower3(){
  beginShape();
// line becomes dots if 0.1 changed to higher number
  for (var a = 0; a < TWO_PI; a += 0.4) {
    var r = 360 * cos( (15*a));
    var x = r * (cos(a));
    var y = r * (sin(a));
    vertex(x,y);
    strokeWeight(1.5);

  }
  endShape(CLOSE);
}
