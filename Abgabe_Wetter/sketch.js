var gui;

var Wind = 0;
var WindMax = 3;
let angle = 0;
var Bewoelkung = 3; 
var Sonnenaufgang = 0;
var SonnenaufgangMax = 40; 
let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;
let c5 = 0;



//Bewoelkung = Strichstärke 
//Wind = Drehung


function setup() {
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);


  sliderRange(3, 60);
  gui = createGui('p5.gui');
  gui.addGlobals('Bewoelkung','Wind', 'Sonnenaufgang');

  //noLoop();


}


function draw(){

  c1 = lerpColor(color('#05011A'), color('#5279C3'), map(Sonnenaufgang, 0, 40, 0, 1));
  c2 = lerpColor(color('#FAF3DF'), color('#F6BBF4'), map(Sonnenaufgang, 0, 40, 0, 1));
  c3 = lerpColor(color('#FFF4D3'), color('#E0FED7'), map(Sonnenaufgang, 0, 40, 0, 1));
  c4 = lerpColor(color('#352E53'), color('#FFFEE6'), map(Sonnenaufgang, 0, 40, 0, 1));
  c5 = lerpColor(color('#2D2A3A'), color('#FFFEE6'), map(Sonnenaufgang, 0, 40, 0, 1));

 background(c5);

 var stepx = 353; 
 var stepy = 350; 

 for (var x = 0; x<=width+stepx; x+= stepx) {
  for (var y = 0; y<=height+stepy; y+= stepy) {

    MusterGedreht(3+x, 178+y);
    MusterGedreht(-175+x, 2+y);

  }
}

angle = angle + Wind;

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
  rotate(angle);
  translate(-250/2,-250/2);


strokeWeight(Bewoelkung);
stroke(0,0,0);

fill(c1);
//Dreieck Oben
triangle(0,0, 250, 0, 0, 250); 

fill(c3);
//Dreieck uten
triangle(250, 0, 250, 250, 0, 250);

fill(c4);
//Grosses Rechteck
quad(50, 50, 200, 50, 200, 200, 50, 200);

fill(c2);
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







