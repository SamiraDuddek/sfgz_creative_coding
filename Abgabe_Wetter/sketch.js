

function setup() {
  createCanvas(windowWidth, windowHeight);
   background(220);
   angleMode(DEGREES);
}


function draw(){

var stepx = 250; 
var stepy = 250; 

for (var x = 0; x<width; x+= stepx) {
    for (var y = 0; y<height; y+= stepy) {

      triangle(0+x, 0+y, 100+x, 200+y, 200+x, 0+y);

      //MusterGedreht(0+x, 0+y);
      MusterGedreht( 0+x, 0+y);
    }
  }


}



function MusterGedreht() {

  translate(0, 175);
  rotate(-45);
  meinMuster(0, 0);

}

function meinMuster(){

strokeWeight(3);
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





