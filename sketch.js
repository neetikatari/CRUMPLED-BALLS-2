//PROJECT 25 - CRUMPLED BALLS - 2
//Desigining the element of a simple game of THROWING PAPER BALL IN A DUSTBIN
//Ground.js - represents static ground class
//Paper.js - represents the paper class has paper image
//Dustbin.js - represents the distbin class which has 3 rectangular bodies
//when up arrow is pressed, force is applied on ball so it will move inside dustbin


//namespace
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//variables
var engine, world;
var ground; 
var paper,dustbin;

function setup(){
    createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;

    ground  = new Ground(width/2, height-30, width, 20)
    paper = new Paper(100,200,50)
    dustbin = new Dustbin(width-400, height - 45)
}

function draw(){
    rectMode(CENTER)
    background("white");
    Engine.update(engine);
   
    ground.display()    
    
    dustbin.display()
    paper.display ()
    //fill("yellow")
    textSize(30)
    text("CRUMPLED BALLS - 2",80,80)
    text("Press UP_ARROW to apply force on the paper",80,130)
    
}

function keyPressed(){
    if (keyCode == UP_ARROW) {
//to make paper jump when you apply force on to object(when up arroe is pressed)
        Matter.Body.applyForce(paper.body, paper.body.position, {x:85,y:-285});
	}
}
