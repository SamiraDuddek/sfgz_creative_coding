var gui;

var drehen = 0;
var strichdicke = 3; 
let c = 100;



function setup() {
  createCanvas(windowWidth, windowHeight);
   background(220);
   angleMode(DEGREES);


  sliderRange(3, 315, 1);
  gui = createGui('p5.gui');
  gui.addGlobals('strichdicke', 'drehen');

  noLoop();

  c = 100;

}


function draw(){

   background(255);

var stepx = 353; 
var stepy = 350; 

for (var x = 0; x<=width+stepx; x+= stepx) {
    for (var y = 0; y<=height+stepy; y+= stepy) {

      //triangle(0+x, 0+y, 100+x, 200+y, 200+x, 0+y);

      //MusterGedreht(0+x, 0+y);

      MusterGedreht(3+x, 178+y);
      MusterGedreht(-175+x, 2+y);

      MusterGedreht( 3+x, 178+y);
      MusterGedreht( -175+x, 2+y);


      //MusterGedreht( 0+x, 0+y);
      //quadratGedreht(0+x, 0+y);

      //QuadratGedreht(0+x, 0+y);



    }
  }

      fill(c);
    rect(200, 200, 50, 50);

}

function mouseClicked() {
  if (c === 100) {
    c = 255;
  } else {
    c = 100;
  }
}


function MusterGedreht(x,y) {

   push();
  translate(x ,y);

  rotate(-45);

  meinMuster(0, 0);
  pop();



}

 
function meinMuster(){

  push();
    translate(250/2,250/2);
    rotate(drehen);
    translate(-250/2,-250/2);


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

    pop();

}





 //Kleine Vierecke Farbig machen, Bei Hover und dan bei Klick 
 //Drehpunkt in der Mitte 
 //Grösse skalieren bei Mouse

 //Strichdicke animieren und kein regler mehr  


/*
 function mousePressed(){
  go = !go;
}

*/







