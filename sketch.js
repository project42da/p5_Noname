
function setup(){
  createCanvas(600, 400);
  smooth();
}

function draw(){
  background(0);
  for(i = 0; i<400; i++){
    noFill();
    if (i<10) {
      stroke(200, 255, i/2, i)
      bezier(0, 200+i, 100+i, 100+i, i, i, width, i);  
    } else {
      stroke(100, i/2, i/2, i)
      bezier(0, 200+i, 100+i, 100+i, i, i, width, i);
    }
  }
}
