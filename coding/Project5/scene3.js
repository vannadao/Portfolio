
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes

var hell = "hi";
var click2;
var click4;
var click5;
var click6;
var click7;

var affection = 0;
var MAX_AFFECTION = 100;
var rectWidth = 200;
// sprite1.collide(sprite2);
// sprite1.overlap(sprite2);
// sprite1.displace(sprite2);


////////////////////////////// 1 /////////////////
function scene3()  {
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
      click2 = new Clickable();
      click2.locate(150, 550);
      click2.resize(500, 200);

      click2.onOutside = function(){
      textSize(30);
      this.color = "#FEC8D8";
      this.textColor = "#957DAD";
      }

      // click1.onOutside = function(){
      //   this.color = "#FFFFFF";
      // }
      click2.onPress = function(){
        hi.play();
        textSize(30);
        this.text = random(quotes);
        affection += 10;
        if (affection == 100)
        {

          mgr.showScene( scene4 );
        }

      }


      click4 = new Clickable();
      click4.locate(50, 200);
      click4.resize(100, 100);

      click4.onOutside = function(){
      textSize(30);
      }

      // click1.onOutside = function(){
      //   this.color = "#FFFFFF";
      // }
      click4.onPress = function(){
        pika.play();
        textSize(30);
        click2.text = ("I want my ketchup");
        affection += 10;
        if (affection == 100)
        {

          mgr.showScene( scene4 );
        }

      }


      click5 = new Clickable();
      click5.locate(650, 200);
      click5.resize(100, 100);

      click5.onOutside = function(){
      textSize(30);
      }

      // click1.onOutside = function(){
      //   this.color = "#FFFFFF";
      // }
      click5.onPress = function(){
        falcon.play();
        textSize(30);
        click2.text = ("Falcon Punch!");
        affection += 10;
        if (affection == 100)
        {

          mgr.showScene( scene4 );
        }

      }

      click6 = new Clickable();
      click6.locate(650, 400);
      click6.resize(100, 100);

      click6.onOutside = function(){
      textSize(30);
      }

      // click1.onOutside = function(){
      //   this.color = "#FFFFFF";
      // }
      click6.onPress = function(){
        yup.play();
        textSize(30);
        click2.text = ("GIMME!GIMME!GIMME! GIMME!GIMME!GIMME! GIMME!GIMME!GIMME!");
        affection += 10;
        if (affection == 100)
        {

          mgr.showScene( scene4 );
        }

      }

      click7 = new Clickable();
      click7.locate(50, 400);
      click7.resize(100, 100);

      click7.onOutside = function(){
      textSize(30);
      }

      // click1.onOutside = function(){
      //   this.color = "#FFFFFF";
      // }
      click7.onPress = function(){
        puto.play();
        textSize(30);
        click2.text = ("bleeeeeeh");
        affection -= 10;
        if (affection == 100)
        {

          mgr.showScene( scene4 );
        }

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

              click2.draw();
              click4.draw();
              click5.draw();
              click6.draw();
              click7.draw();

              image(pika1, -80, -20);
              image(falcon1, 100, -20);
              image(apple1, -80, -80);
              image(cupcake1, 100,-80);

              chatbox();
              // Change color
              if (affection < 25)
              {
              fill(255, 153, 153);
              }
              else if (affection < 50)
              {
              fill(255, 102, 153);
              }
              else
              {
              fill(204, 51, 102);
              }

 // Draw bar
              noStroke();
 // Get fraction 0->1 and multiply it by width of bar
              var drawWidth = (affection / MAX_AFFECTION) * rectWidth;
              rect(550, 30, drawWidth, 50);

 // Outline
             stroke(0);
             scribble.scribbleRect(650,50, rectWidth, 50);



          }




          this.mousePressed = function()
          {


          }


    this.keyPressed = function()
    {
        this.sceneManager.showNextScene();
    }


}
