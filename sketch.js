const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var maxDrops = 100;
var drops=[];
function preload(){
    
}

function setup(){
    createCanvas(400, 700);
    engine = Engine.create();
    world = engine.world;
     drop = new Drop(200,350);
    if(frameCount%150===0){
        for(var i = 0; i < maxDrops; i++){
            drops.push( new Drop(random(0,400),random(0,400)))
        }
    }
}

function draw(){
    background(0);
    Engine.update(engine);
   // drop.display();
for(var i=0; i<maxDrops; i++){
    drops[i].display();
    drops[i].update();
}
}