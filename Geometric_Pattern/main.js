var NUM_CIRCLES = 12;
var CD;
var CR;
var rVal;
var bVal;
var gVal;



function setup() {
createCanvas(460,600);
CD= width/NUM_CIRCLES;
CR = CD/2;
}



function draw() {
    rVal = 0;
    gVal = 0;
    bVal = 255;
    
    var isShifted = false;
  var y = height;
  while( y >= 0){
  
 var x= 0;
 if(isShifted){
     x = CR;
 }else{
     x = 0;
 }
 
  while (x <= width) {
      
      fill(color(rVal,gVal,bVal));
      stroke(color(bVal,gVal,rVal));
      
     
      ellipse(x,y,CD,CD);
      x = x + CD;
  
  }
  y = y-CR;
  isShifted = !isShifted;
    
    
      rVal = rVal+3;
      bVal = bVal-2;
      gVal = gVal+7;
  }
 
  
  
      
  }
