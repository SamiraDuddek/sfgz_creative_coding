var gui;

var drehen = -45;
var strichdicke = 3; 
let c = color(255, 204, 0);



function setup() {
  createCanvas(windowWidth, windowHeight);
   background(220);
   angleMode(DEGREES);


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

      MusterGedreht(3+x, 178+y);
      MusterGedreht(-175+x, 2+y);

      //MusterGedreht( 0+x, 0+y);
      //quadratGedreht(0+x, 0+y);

    }
  }

}


function MusterGedreht(x,y) {

  push();
  translate(x,y);
  rotate(drehen);
  meinMuster(0, 0);
  pop();


}

/*
function quadratGedreht(x,y){//hier nimmst du die Angaben von oben in Empfang-- d.h. um wieviel in der x und y Koordinate das Muster verschoben wird
    //rectMode(CENTER);
    push();
    translate(x,y);
    rotate(-45);
    rect(0,0,250,50);
    pop();
}
}

*/
 
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

//fill(c);

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
function mouseMoved() {
  c = c + 5;
  if (c > 255) {
    c = 0;
  }
}

*/

 //Kleine Vierecke Farbig machen, Bei Hover und dan bei Klick 
 //Drehpunkt in der Mitte 
 //Grösse skalieren bei Mouse 


/*
 function mousePressed(){
  go = !go;
}

*/







