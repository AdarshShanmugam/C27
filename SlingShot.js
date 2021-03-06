class Slingshot{
    constructor(bodyX, bodyY){
        var options = {
            bodyA: bodyX,
            bodyB: bodyY,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }
    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;
        line(pointA.x, pointA.y, pointB.x, pointB.y);

    }
}