// wenn man etwas verändern will brauch man eine letiable
let a;
let b;
let c;
let d;

let f;

function setup() {
  createCanvas(400, 400);
  a = height / 2;
  b = height / 5;
  c = height / 10;
  d = height / 50;
  
  f = 200

  //b = height / 5;
  //c = height / 10;
  //d = height / 50;

}

function draw() {
  background(191, 168, 163);
  //stroke(200);
  //line(0, a, width, a);

 //hellblau
  noStroke();
  fill(89, 55, 47);
  ellipse(a, a, 50, 50)
  
  //dunkelblau
  noStroke();
  fill(32, 38, 38);
  ellipse(b, b, 50, 50);
  
  //grün
  
  noStroke();
  fill(242, 164, 119);
  ellipse(a, b, 50, 50);
  
  //hellgrün
  noStroke();
  fill( 72, 88, 89);
  ellipse(b, a, 50, 50);
  
  a = a - 0.5;
  

  b = b - 1;
  

  c = c + 0.5;
  

  d = d + 2;
  


  noStroke();
  fill(250, 250, 250, 90);
  ellipse(c, c, 50, 50);

  noStroke();
  fill(250, 250, 250, 90);
  ellipse(c, a, 50, 50);

  noStroke();
  fill(250, 250, 250, 90);
  ellipse(a, c, 50, 50);

  noStroke();
  fill(250, 250, 250, 90);
  ellipse(b, c, 50, 50);

  noStroke();
  fill(250, 250, 250, 90);
  ellipse(c, b, 50, 50);

  noStroke();
  fill(250, 250, 250, 90);
  ellipse(d, d, 50, 50);

  noStroke();
  fill(250, 250, 250, 90);
  ellipse(d, a, 50, 50);

  noStroke();
  fill(250, 250, 250, 90);
  ellipse(a, d, 50, 50);

  noStroke();
  fill(250, 250, 250, 90);
  ellipse(d, b, 50, 50);

  noStroke();
  fill(250, 250, 250, 90);
  ellipse(b, d, 50, 50);

  noStroke();
  fill(250, 250, 250, 90);
  ellipse(c, d, 50, 50);

  noStroke();
  fill(250, 250, 250, 90);
  ellipse(d, c, 50, 50);
  
  noStroke();
  fill(250, 250, 250, 90);
  ellipse(a, f, 50, 50);
  
  noStroke();
  fill(250, 250, 250, 90);
  ellipse(b, f, 50, 50);
  
   noStroke();
  fill(250, 250, 250, 90);
  ellipse(f, a, 50, 50);
  
  noStroke();
  fill(250, 250, 250, 90);
  ellipse(f, b, 50, 50);
  
  noStroke();
  fill(32, 38, 38);
  ellipse(f, f, 50, 50);


}