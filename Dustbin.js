class Dustbin {
    constructor (x,y){
        this.x = x;
        this.y = y;
        this.image = loadImage("assets/dustbingreen.png")
        this.bottomB = Bodies.rectangle(this.x, this.y, 200, 20, {isStatic:true})
        World.add(world,this.bottomB)
        
        this.leftB = Bodies.rectangle(this.x-100, this.y -50, 20,100,{isStatic:true} )
        World.add(world,this.leftB)
        
        this.rightB = Bodies.rectangle(this.x+100, this.y -100, 20,100,{isStatic:true} )
        World.add(world,this.rightB)
    };

    display(){
        push ()
        translate(this.bottomB.position.x, this.bottomB.position.y)
        fill ("red")
        //rectMode(CENTER)
        //rect(0,0,200, 20)
        pop()

        push ()
        translate(this.leftB.position.x, this.leftB.position.y)
        fill ("red")
        //rectMode(CENTER)
        //rect(0,0,20, 100)
        pop()

        push ()
        translate(this.rightB.position.x, this.rightB.position.y)
        fill ("red")
        imageMode(CENTER)
        image(this.image,0,0,300, 200)
        pop ()
    };
};