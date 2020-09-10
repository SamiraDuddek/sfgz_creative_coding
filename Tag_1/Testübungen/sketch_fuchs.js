function setup() {
  createCanvas(700, 600);
}

function draw() {
  background(220);

  /**let c = color(104, 193, 209);**/
  /**(250, 150, 350,150, 300, 300)**/

  /**Kopf**/
  fill(255, 255,255 );
  /*kopf mitte*/
  quad(250, 100, 350, 100, 305, 200, 295, 200 );
  /*rechts vom auge*/
  triangle(350, 100, 400, 140, 390, 180);
  /*rechts, unter Ohr*/
  triangle(340, 80, 390, 90, 350, 100);
  /*rechts, unter unter Ohr*/
  triangle( 350, 100, 390, 90, 400, 140);
  /*Ohr*/
  triangle(340, 80, 370, 50, 390, 90);
  /*rechts, auge*/
  quad(350, 100, 390, 180, 310, 208, 305, 200);
  /*oben mitte*/
  triangle( 300, 70, 250, 100, 350, 100);
  /*oben rechts*/
  triangle(300, 70, 340, 80, 350, 100);
  
  

/*links, auge*/
  quad(250, 100, 295, 200, 300, 213, 210, 180);
  /*links vom auge*/
  triangle(250, 100, 210, 180, 200, 140);
  /*oben links*/
  triangle(300, 70, 260, 80, 250, 100);
  /*links, unter Ohr*/
  triangle(260, 80, 250, 100, 220, 90);
  /*Ohr*/
  triangle(260, 80, 220, 90, 230, 50);
  /*links, unter unter Ohr*/
  triangle(220, 90, 250, 100, 200, 140);


/*Ohr schwarz rechts*/
  fill(0, 0, 0); 
  triangle( 370, 50, 390, 35, 390, 90);
/*Ohr schwarz links*/
  fill(0, 0, 0); 
  triangle( 230, 50, 220, 90, 210, 35);


  

  /*Augen*/
  fill(0, 0, 0);
  /*rechts*/
  triangle(350,170, 340, 150, 360, 150);
  /*links*/
  triangle(250,170, 240, 150, 260, 150);


  /**quad(295, 200, 305, 200, 310, 205, 300, 210, 290, 205 );**/

  /**Nase**/
  fill(0, 0, 0); 
  /*mitte*/
  triangle(295, 200, 300, 213, 290, 208);
  /*Links*/
  triangle(295, 200, 305, 200, 300, 213);
  /*rechts*/
  triangle(305, 200, 310, 208, 300, 213);


  /*Körper*/
  fill(255, 255,255 );

  /*rechts*/
  triangle(300, 213, 350, 350, 300, 530);
  
  /*klein oben rechts*/
  triangle(300, 213, 390, 180, 350, 350);

  /*unten rechts*/
  triangle(300, 530, 350, 350, 350, 565);

  /*schmales rechts*/
  triangle( 350, 350, 390, 180, 350, 565);

  /*rechts Gross*/
  triangle( 390, 180, 470, 340, 350, 565);

  /*rechts körper*/
  triangle( 470, 340, 470, 530, 350, 565 );


  /*links*/
  triangle(300, 213, 250, 350,300, 530);

  /*klein oben links*/
  triangle(210, 180, 300, 213, 250, 350);

  /*unten links*/
  triangle(250, 350, 300, 530, 250, 565);

  /*schmales links*/
  triangle( 210, 180, 250, 350, 250, 565);



  /*Fuss*/
   fill(0, 0, 0); 
  triangle(300, 530, 350, 565, 250, 565);
}












