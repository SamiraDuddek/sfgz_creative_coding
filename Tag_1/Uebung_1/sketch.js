function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  /**let c = color(104, 193, 209);**/
   fill(104, 193, 209);
  triangle(0, 400, 200,200, 0, 0)

   fill(202, 232, 145);
  triangle(400, 0, 200,200, 0, 0)

  fill(241, 149, 199); 
  triangle(0, 400, 100,300, 200, 400)


  fill(167, 151, 193); 
  quad(200, 400, 300, 300, 200, 200, 100, 300);

  fill(247, 200, 43); 
  triangle(200, 400, 400,400, 400, 200)

  fill(240, 241, 36); 
  triangle(300, 300, 300,100, 200, 200)


  fill(239, 61, 97); 
  quad(300, 300, 400, 200, 400, 0, 300, 100);

}