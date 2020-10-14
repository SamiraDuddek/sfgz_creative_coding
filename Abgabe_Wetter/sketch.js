var gui;

var drehen = -45;
var strichdicke = 3; 


var c1, c2, c3;

function setup() {
  createCanvas(windowWidth, windowHeight);
   background(220);
   angleMode(DEGREES);

   c1 = color(255, 255, 255);
   c2 = color(242, 242, 242);
   c3 = color(217, 217, 217);
   setGradient(c1, c2, c3);

    sliderRange(3, 315, 1);
  gui = createGui('p5.gui');
  gui.addGlobals('strichdicke', 'drehen');



  noLoop();
}


function draw(){

var stepx = 353; 
var stepy = 350; 

for (var x = 0; x<=width; x+= stepx) {
    for (var y = 0; y<=height; y+= stepy) {

      //triangle(0+x, 0+y, 100+x, 200+y, 200+x, 0+y);

      //MusterGedreht(0+x, 0+y);
      MusterGedreht( 3+x, 178+y);
      MusterGedreht( -175+x, 2+y);
    }
  }

}

function setGradient(c1, c2, c3) {
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, c3, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function MusterGedreht(x,y) {

  push();
  translate(x,y);
  rotate(drehen);
  meinMuster(0, 0);
  pop();


}

function meinMuster(){



strokeWeight(strichdicke);
stroke(0,0,0);

fill(0,0,0);
//Dreieck Oben
triangle(0,0, 250, 0, 0, 250);

fill(255, 255,255);
//Dreieck uten
triangle(250, 0, 250, 250, 0, 250);

//Grosses Rechteck
quad(50, 50, 200, 50, 200, 200, 50, 200);

//kleines Rechteck oben links
quad(75, 75, 112.5, 75, 112.5, 112.5, 75, 112.5);
//kleines Rechteck oben rechts
quad(137.5, 75, 175, 75, 175, 112.5, 137.5, 112.5);
//kleines Rechteck unten links
quad(75, 137.5, 112.5, 137.5, 112.5, 175, 75, 175);
//kleines Rechteck unten rechts
quad(137.5, 137.5, 175, 137.5, 175, 175, 137.5, 175);

}


/*
 function mousePressed(){
  go = !go;
}

*/




