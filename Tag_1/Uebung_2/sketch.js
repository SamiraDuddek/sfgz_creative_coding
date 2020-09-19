
let kreis = 100;
let groesse = 30;



function setup() {
  createCanvas(600, 600);
  frameRate(60);
  


}

function draw() {
  background(242, 242, 240);

  noFill();

  strokeWeight(4);
  //stroke(random(255), random(255), random(255));

  stroke(23, 49, 40);
  ellipse(300, 300, kreis, kreis);

  stroke(56, 93, 58);
  ellipse(300, 300, kreis + groesse, kreis + groesse);

  stroke(170, 200, 164);
  ellipse(300, 300, kreis + 2*groesse, kreis + 2*groesse );

  stroke(197, 215, 165);
  ellipse(300, 300, kreis + 3*groesse, kreis + 3*groesse );

  stroke(224, 230, 184);
  ellipse(300, 300, kreis + 4*groesse, kreis + 4*groesse );

  stroke(255, 255, 255);
  ellipse(300, 300, kreis + 5*groesse, kreis + 5*groesse );


  //Test ob die Mitte stimmt
  //rect(300, 300, 100, 100);
  fill(255, 255, 255);
  ellipse(300, 300, 15, 15);

  if (mouseIsPressed) {
    	kreis = kreis + 1;
	} else{
		kreis = kreis -1;
	}








}