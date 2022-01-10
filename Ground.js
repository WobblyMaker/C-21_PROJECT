class ground{

    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        var grOptions={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,grOptions);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }

}