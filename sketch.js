let squares = [];
let colors = ['#FFDF00', '#FFB6C1', '#9EDAFF'];
let colorIndex = 0



function setup() {
  createCanvas(windowWidth, windowHeight);
    
}

function mousePressed(){
  colorIndex = (colorIndex + 1) % colors.length;
}

function mouseDragged(){
  
  let squareadd = new Square(mouseX, mouseY, 40, colors[colorIndex])
  squares.push(squareadd);
  
  }


function draw() {
   
  background(255);
  
    blendMode(MULTIPLY);
  
    for (let i=0; i< squares.length; i++){
      
  
    squares[i].show();
    squares[i].move();
    
    }
  
   blendMode(BLEND);
  
  
}

class Square{

  constructor (x, y, s, color){
    this.x = x
    this.y = y
    this.s = s
    this.color = color;
    
  }
  
  show(){
    
    fill(this.color);
    noStroke();
    square (this.x - this.s / 2, this.y - this.s / 2, this.s);
  
    
    
  }
  
  move(){
    this.x += random(-1,1);
    this.y += random(-1,1);
    
  }


  
}
