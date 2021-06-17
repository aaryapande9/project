class Fly{
    constructor(bodyA,pointB){
        var options={
           bodyA:bodyA,
           pointB:pointB,
           stiffness:0.1,
           length:10
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.throw=Constraint.create(options);
        World.add(world,this.throw);
    }
    fly(body){
        this.throw.bodyA=null;
    }
    Launch(){
        this.throw.bodyA=bodyA;
    }
    display(){
        if(this.throw.bodyA){
            var pointA = this.throw.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}