function setup() {
  createCanvas(400, 400);
}

function draw() {
 
  background(0);
  stroke(255);
  let x=10;
  
  //line(x,0,x,height);
  
  for (let x = 0; x <= height; x = x+10){
      
  //x=x+10;
  line(x,0,200,height);
  
  }
 
  
}