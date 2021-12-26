
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


var image1_up, image2_over;
var hi;
var puto;
var falcon;
var zz;
var calm;
var melody;
var weird;
var pika;
var yup;
// var duration;
// var  slideWidth = 500;

function preload() {

   pika = loadSound("sounds/pikachu.mp3");
   hi = loadSound("sounds/hai.mp3");
   puto = loadSound("sounds/puto.mp3");
   falcon = loadSound("sounds/falconpunch.mp3");
   zz = loadSound("sounds/sleep.mp3");
   calm = loadSound("sounds/snowland.mp3");
   melody = loadSound("sounds/melodytown.mp3");
   weird = loadSound("sounds/weirdwood.mp3");
   yup = loadSound("sounds/yip.mp3");


}


// define your p5.play sprites as global objects first.
var ship;


// global manager object
var mgr;


var scribble = new Scribble();

function setup() {
    createCanvas(800, 800);
  //  console.log(hell);
    // green.loop();
     mgr = new SceneManager();
     masterVolume(.05);

     ship = createSprite(0, 0);
     ship.addAnimation("normal", "assets/ship/Ship 1.png",  "assets/ship/Ship 4.png");
     ship.addAnimation("stand", "assets/explosion/Shipexp1.png",  "assets/explosion/Shipexp5.png");

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (scene1);
    mgr.addScene (scene2);
    mgr.addScene (scene3);
    mgr.addScene (scene4);
    mgr.showNextScene();

}

function draw()
{

    // passthe current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  // mgr.mousePressed();

}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case 'e':
            mgr.showScene( scene1 );
            break;
        case 's':
            mgr.showScene( scene2 );
            break;
        case 'd':
            mgr.showScene( scene3 );
            break;
        case 'f':
            mgr.showScene( scene4 );
            break;

    }

    // ... then dispatch via the SceneManager.
    // mgr.keyPressed();
}
