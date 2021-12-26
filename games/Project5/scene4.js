


////////////////////////////// 3 /////////////////

var click3;

function scene4() {


    var oAnim = null;
    let bg3;


    this.setup = function()  {
      melody.stop();
      calm.loop();
        console.log("chat2");
        // access a different scene using the SceneManager

        end = loadImage('images/end.jpg');

        click3 = new Clickable();
        click3.locate(50, 650);
        click3.resize(200, 100);

        click3.onOutside = function(){
          this.text = ("You win!");
          textSize(30);
          this.color = "#FEC8D8";
          this.textColor = "#957DAD";
        }


        click3.onMouseOver = function() {

          this.text = ("Home Screen");

            }

        // click1.onOutside = function(){
        //   this.color = "#FFFFFF";
        // }
        click3.onPress = function(){

            mgr.showScene( scene1 );

        }

    }






    this.enter = function()
    {

     //ghosty.visible = false;
     ship.position.x = 550;
     ship.position.y = 550;
     ship.scale = 2;


     ship.onMouseOver = function() {

       zz.loop();
       console.log("zzz");
       this.changeAnimation("stand");
       // this.position.x-=15 ;
     }


     ship.onMouseOut = function() {

        zz.stop();
        console.log("no zzz");
        this.changeAnimation("normal");
        // this.position.x++ ;

    }

    }




    this.draw = function() {
      background(10);
      image(end, 0, 0);

      click3.draw();

      stroke(0);
      strokeWeight(5);
      scribble.scribbleRect(150, 700, 200, 100);


          }

    this.keyPressed = function()  {

       this.sceneManager.showNextScene();
    }

}
