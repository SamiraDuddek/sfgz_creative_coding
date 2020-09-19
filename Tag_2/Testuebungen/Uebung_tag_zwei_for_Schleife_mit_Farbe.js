
let kreis = 100;

let rot = 25;




function setup() {
  createCanvas(600, 600);
  frameRate(60);
  


}

function draw() {
  background(242, 242, 240);

  noFill();

  strokeWeight(4);
  //stroke(random(255), random(255), random(255));
  
  
  
  for ( let groesse= 0; groesse < width; groesse = groesse + 30){

  stroke(groesse/3, kreis, 40);
  ellipse(300, 300, kreis + groesse, kreis + groesse);

  }
  
  
  

  //Test ob die Mitte stimmt
  //rect(300, 300, 100, 100);
  //fill(255, 255, 255);
  //ellipse(300, 300, 15, 15);

  if (mouseIsPressed) {
    	kreis = kreis + 1;
	} else{
		kreis = kreis -1;
	}





}