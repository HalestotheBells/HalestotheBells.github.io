var NUM_CIRCLES = 12;
var CD
function setup() {
createCanvas(460,600);
CD= width/NUM_CIRCLES;
}
function draw() {
  var y = 0;
  while( y<= height){
  
  
  var x= 0;
  while (x <= width) {
      ellipse(x,y,CD,CD);
      x = x + CD;
  }
  y = y+CD;
      
  }

}