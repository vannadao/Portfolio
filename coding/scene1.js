
///////////////////////  1  ////////////////////////



function scene1()  {

    let bg1;

  this.setup = function() {
    melody.loop();
      console.log("home");
      bg1 = loadImage('images/bg1.jpg');

      click1 = new Clickable();
      click1.locate(300, 350);
      click1.resize(200, 100);

      click1.onOutside = function(){
        this.text = ("Play!");
        textSize(30);
        this.color = "#FEC8D8";
        this.textColor = "#957DAD";
      }

      // click1.onOutside = function(){
      //   this.color = "#FFFFFF";
      // }
      click1.onPress = function(){

          mgr.showScene( scene2 );

      }

  }

  this.enter = function()
  {


  }




    this.draw = function()
    {


      angleMode(DEGREES);

         let min = minute();
        let mn = map(min, 0 , 60, 0, 360);

        // background(255);
        image(bg1, 0, 0);


        // push();
        // shoes();
        // pop();
        //
        // push();
        // leftArm();
        // pop();
        //
        // push();
        // rightArm();
        // pop();
        //
        // push();
        // body();
        // pop();
        //
        // push();
        //  let x1 = map(mouseX, 0, width, -30, 40);
        //  let x2 = map(mouseY, 0, height, -30, 40);
        // translate(x1, x2);
        // eyes();
        // pop();
        //
        // text("Poyo!", 100, 300);
        click1.draw();
        stroke(0);
        strokeWeight(5);
        scribble.scribbleRect(400, 400, 200, 100);
    }




  this.mousePressed = function()
  {



}

    this.keyPressed = function()
    {
      //console.log("woot");
      // ghost.changeAnimation("stand");
        this.sceneManager.showNextScene();
    }



}
