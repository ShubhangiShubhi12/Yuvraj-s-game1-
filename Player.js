class Player{
    constructor(x,y,Images){
        var options = {
            isStatic: true,
            friction : 0.05,
            density: 1
        }
        this.Image = loadImage(Images);
        this.x = x;
        this.y = y;
        this.width=10;
        this.height = 10;
        player = Bodies.rectangle(this.x,this.y,10,10,options);

        World.add(world,player);

    }

    display(){
        var pos = player.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.Image,this.x,this.y);
        pop();
        

    }
}