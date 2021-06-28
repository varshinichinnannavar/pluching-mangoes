class launcher{
    construtor(bodyA,pointB){
    varoption={
        bodyA:bodyA,
        pointB:pointB,
        stiffness=0.01,
        lenght=10
    }

    this.pointB=pointB
    this.throw=Constraint.create(option)
    world.add(world,this.throw)
    }
    fly(){
        this.throw.body.A=null
    }

    launch(bodyA){
        this.throw.bodyA=bodyA
    }
    display(){
        
    }
}
