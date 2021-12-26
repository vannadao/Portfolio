
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes

var hell = "hi";
var click9;


var affection = 0;
var MAX_AFFECTION = 100;
var rectWidth = 200;
// sprite1.collide(sprite2);
// sprite1.overlap(sprite2);
// sprite1.displace(sprite2);


////////////////////////////// 1 /////////////////
function scene2()  {
    var textX;
    var textY;
    var lox= 0;
    let bg2;
    let pika1;
    let falcon1;
    let apple1;
    let cupcake1;

var quotes = ["Poyo!", "Hai!", "This grass feels funny, it feels like... pants."];


// scene1.setup
    this.setup = function() {
      // melody.loop();
      bg2 = loadImage('images/bg3.jpg');
      pika1 = loadImage('images/pikaicon.png');
      falcon1 = loadImage('images/falconicon.png');
      apple1 = loadImage('images/appleicon.png');
      cupcake1 = loadImage('images/cupcakeicon.png');

      console.log("chat1");
          hi.playMode('sustain');


      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      click9 = new Clickable();
      click9.locate(100, 100);
      click9.resize(600, 600);

      click9.onOutside = function(){
      textSize(30);
      this.color = "#FEC8D8";
      this.textColor = "#957DAD";
      }

      // click1.onOutside = function(){
      //   this.color = "#FFFFFF";
      // }
      click9.onPress = function(){

        textSize(30);


          mgr.showScene( scene3 );


      }


    }

    // enter() will be called each time SceneManager switches
    // to this scene

    this.enter = function()  {
        console.log("chat1");
        textX = 10;
        textY = 0;
        background("grey");
        textAlign(CENTER);


        console.log("home");
          console.log(hell);
      ship.position.x = 300;
      ship.position.y = 500;
      ship.changeAnimation("normal");

    //   ship.onMouseOver = function() {
    //
    //     hi.play();
    //     console.log("over");
    //     this.changeAnimation("stand");
    //     // this.position.x++;
    //     text("Poyo!", 400, 500);
    //
    // }


  }


    this.draw = function()
    {
      // background(100);
       image(bg2, 0, 0);




              push();
              shoes();
              pop();

              push();
              leftArm();
              pop();

              push();
              rightArm();
              pop();

              push();
              body();
              pop();

              push();
               let x1 = map(mouseX, 0, width, -30, 40);
               let x2 = map(mouseY, 0, height, -30, 40);
              translate(x1, x2);
              eyes();
              pop();


               // text("Poyo", 100,100);

             //   leftArm.mousePressed = function() {
             //     aa.play();
             //     // text("This grass feels funny, it feels like... pants.", 100, 300);
             //  }
             //
             //   rightArm.mousePressed = function() {
             //    puto.play();
             //    // text("This grass feels funny, it feels like... pants.", 100, 300);
             // }
                 // this.position.x++;

               //   ship.onMouseOver = function() {
               //
               //     hi.play();
               //     console.log("over");
               //     this.changeAnimation("stand");
               //     // this.position.x++;
               //     // textSize(29);
               //     // click1.locate(300,500);
               //     // this.text="Poyo";
               //
               // }

              click9.draw();


              image(pika1, -80, -20);
              image(falcon1, 100, -20);
              image(apple1, -80, -80);
              image(cupcake1, 100,-80);




             stroke(0);
             strokeWeight(5);
             scribble.scribbleRect(650,50, rectWidth, 50);


           fill(255,200)
           rect(100,100, 600, 600);
           fill(0);
           noStroke();
           text("Click on all boxes to interact with", 400, 300);
            text("Kirby and raise the affection", 400, 350);
            text("bar to the end to win. And on last scene,", 400, 400);
            text("put your mouse over Kirby.", 400, 450);
          }




          this.mousePressed = function()
          {


          }


    this.keyPressed = function()
    {
        this.sceneManager.showNextScene();
    }


}
