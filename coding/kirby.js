
        // var yCoords = [ ytop, ytop, ybottom, ybottom ];
        var xCoords1 = [ 290, 300, 330, 360, 385, 387, 330, 290, 250, 230, 200, 190, 200, 210, 220, 230];
        // the y coordinates of the border points of the hachure
        var yCoords1 = [ 478, 480, 480, 500, 520, 580, 621, 625, 615, 610, 587, 550, 530, 510, 496, 490];

        var xCoords2 = [ 510, 520, 560, 590, 605, 606, 560, 510, 470, 450, 420, 410, 420, 430, 440, 450];
        var yCoords2 = [ 478, 480, 480, 500, 520, 580, 621, 625, 615, 610, 587, 550, 530, 510, 496, 490];

        var xCoords3 = [ 200, 225, 250, 275, 300, 400, 500, 525, 550, 575, 600, 575, 550, 525, 500, 450, 400, 300, 275, 250, 225];
        var yCoords3 = [ 350, 250, 220, 200, 180, 150, 180, 200, 220, 250, 350, 450, 490, 500, 520, 535, 550, 525, 500, 480, 450];

        var xCoords4 = [ 350, 365, 375, 380, 365, 350, 335, 320];
        var yCoords4 = [ 240, 285, 295, 300, 350, 360, 350, 300];

        var xCoords5 = [ 350, 365, 375, 365, 350, 335, 330, 325];
        var yCoords5 = [ 240, 250, 280, 290, 300, 290, 280, 270];

        var xCoords6 = [ 325, 335, 350, 365, 375, 365, 350, 335];
        var yCoords6 = [ 300, 320, 325, 320, 300, 340, 355, 340];

        var xCoords7 = [ 155, 155, 645, 645];
        var yCoords7 = [ 555, 745, 745, 555];

        var gap = 3.5;
        // the angle of the hachure in degrees
        var angle = 15;

function shoes(){
      beginShape();

        stroke( 255, 0, 0 );
        strokeWeight(10);
        scribble.scribbleEllipse( 290, 550, 200, 150 );
        scribble.scribbleEllipse( 510, 550, 200, 150 );
        scribble.scribbleFilling( 100, 200, 3.5, 315 );
        strokeWeight( 3 );
        // fill the rect with a hachure
        scribble.scribbleFilling( xCoords1, yCoords1 , gap, angle );
        scribble.scribbleFilling( xCoords2, yCoords2 , gap, angle );

      endShape(CLOSE);
    }

function rightArm(){
      beginShape();
        stroke( 255, 166, 201 );
        strokeWeight(10);
        scribble.scribbleEllipse( 550, 380, 200, 150 );
        translate(40,-170);
        strokeWeight(3);
        scribble.scribbleFilling( xCoords2, yCoords2 , gap, angle );
      endShape(CLOSE);
    }

function leftArm(){
      beginShape();
        stroke( 255, 166, 201 );
        strokeWeight(10);
        scribble.scribbleEllipse( 250, 380, 200, 150 );
        translate(-42,-170);
        strokeWeight(3);
        scribble.scribbleFilling( xCoords1, yCoords1 , gap, angle );
     endShape(CLOSE);
     }

function body(){
      beginShape();
        stroke( 255, 166, 201 );
        strokeWeight(10);
        scribble.scribbleEllipse( 400, 350, 400, 400 );

        strokeWeight(3);
        scribble.scribbleFilling( xCoords3, yCoords3 , gap, angle );
     endShape(CLOSE);
     }


function eyes(){
     beginShape();
        stroke(0);
        strokeWeight(10);
        scribble.scribbleEllipse( 350, 300, 50, 120 );
        // scribble.scribbleEllipse( 450, 300, 50, 120 );

        strokeWeight(3);
        scribble.scribbleFilling( xCoords4, yCoords4 , gap, angle );

        stroke(255);
        scribble.scribbleFilling( xCoords5, yCoords5 , gap, angle );

        stroke(22, 155, 215);
        scribble.scribbleFilling( xCoords6, yCoords6 , gap, angle );


        stroke(0);
        strokeWeight(8);
        scribble.scribbleEllipse( 400, 400, 5, 10 );
        scribble.scribbleEllipse( 400, 400, 10, 30 );


        translate(100,0);
        stroke(0);
        strokeWeight(10);
        scribble.scribbleEllipse( 350, 300, 50, 120 );

        strokeWeight(3);
        scribble.scribbleFilling( xCoords4, yCoords4 , gap, angle );

        stroke(255);
        scribble.scribbleFilling( xCoords5, yCoords5 , gap, angle );

        stroke(22, 155, 215);
        scribble.scribbleFilling( xCoords6, yCoords6 , gap, angle );
     endShape(CLOSE);
         }

function chatbox(){
      beginShape();
      // stroke(255);
      // strokeWeight(3);
      // scribble.scribbleFilling( xCoords7, yCoords7 , gap, angle );

      stroke(0);
      strokeWeight(10);
      noFill();
      scribble.scribbleRect(400,650,500,200);

      endShape(CLOSE);
  }
