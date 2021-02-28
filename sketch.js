const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var drops = []
var umbrella
var rand 
var maxDrops = 100
var thunderFrame = 0

function preload(){
    
}

function setup(){
engine = Engine.create()
world = engine.world 
createCanvas(400, 700)  

umbrella = new Umbrella(200, 500)

if (frameCount%150===0){
    for (var i = 0;i < maxDrops; i++){
        drops.push(new createDrop(random(0, 400), random(0, 400)))
    }
}
}

function draw(){
Engine.update(engine)   
background(0)

umbrella.display()

for (var i = 0; i < maxDrops; i++){
    drops[i].showDrop()
    drops[i].updateY()
}




drawSprites() 
}   

