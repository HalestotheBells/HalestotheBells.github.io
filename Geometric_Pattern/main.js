var NUM_CIRCLES = 12;
var CD
var CR;



function setup() {
createCanvas(460,600);
CD= width/NUM_CIRCLES;
CR = CD/2;
}



function draw() {
    var isShifted = false;
  var y = 0;
  while( y<= height){
  
 var x= 0;
 if(isShifted){
     x = CR;
 }else{
     x = 0;
 }
 
  while (x <= width) {
      ellipse(x,y,CD,CD);
      x = x + CD;
  }
  y = y+CR;
  isShifted = !isShifted
      
  }

}