var count = 25;
var posX = new Array(count);
var posY = new Array(count);
var speedX = new Array(count);
var speedY = new Array(count);
var sizeW = new Array(count);
var sizeH = new Array(count);
var xpos;
var ypos;
var colors = new Array(count);
var img, img2, img3, img4, img5;

let girl1;
let girl2;
let girl3;
let x = 0;
let y = 0;

function preload()  {

     img = loadImage('images/gudako.png');
     img2 = loadImage('images/gudako1.jpg');
     img3 = loadImage('images/saintquartz.png');
     img4 = loadImage('images/gudako2.png')
     img5 = loadImage('images/mash.png')
}

function setup() {
  createCanvas(800,800);
  background(20);
  fill(255);
  girl1 = new Girl(300,200);
  girl2 = new Girl(400,200, 100);

  for (var i=10; i < posX.length; i ++) {
   posX[i] = width/2;
   posY[i] = height/2;
   speedX[i] = random(-15, 25);
   speedY[i] = random(-15, 25);
   sizeW[i] = random(25, 65);
   sizeH[i] = random(30, 40);
   colors[i] = random(0,255);
 }
}

function mousePressed() {
  image(img3, mouseX, mouseY);
}


function draw() {
  background(10);

  image(img2,0,0,width,height);

  fill(255);

  let d = dist(girl1.x, girl1.y, girl2.x, girl2.y);
  if (d < girl1.r + girl2.r) {
    filter(THRESHOLD);
  }
  girl1.show();
  girl2.show();
  girl1.move();
  girl2.move();

  for (var i = 5; i < posX.length; i++) {
  //image(img3,posX[i], posY[i],60, 60);
  image(img5,posX[i], posY[i],60, 80);
  if (posX[i] < 10+sizeW[i]/2 || posX[i] > (width)-sizeW[i]/3 ) {
    speedX[i] = -speedX[i];
  }
  if (posY[i] < 10+sizeH[i]/2 || posY[i] > (height)-sizeH[i]/3) {
    speedY[i] = -speedY[i];
  }

  posX[i] += speedX[i];
  posY[i] += speedY[i];

}
  // image(img3, x, 0, mouseX, mouseY);
  // x++;
  // image(img3, 0, y, mouseX, mouseY);
  // y++;
}

class Girl {
  constructor(x, y, r = 80) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d< this.r) {
      return true;
    } else {
      return false;
    }
  }
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    image(img, this.x, this.y);
  }
}
