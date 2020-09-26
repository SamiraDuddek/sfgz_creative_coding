var gui;

var strichdicke = 10;
var grosse = 90;


function setup() {
  createCanvas(800, 800);


  sliderRange(0, 200, 1);
  gui = createGui('p5.gui');
  gui.addGlobals('strichdicke', 'grosse');



  noLoop();
  
}

function draw() {
  background(220);

  noFill();

  for (let kreis = 10; kreis < width /2; kreis = kreis + grosse *0.3) {

    strokeWeight(strichdicke);
    stroke(204, 190, 187);
    circle(400, 395, kreis);
    
    stroke(72, 88, 88);
    circle(405, 400, kreis);
    
    stroke(242, 164, 118);
    circle(400, 405, kreis);
    
    stroke(135, 107, 103);
    circle(395, 400, kreis);   

  }
}
