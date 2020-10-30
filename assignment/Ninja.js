class Ninja{
    constructor(name){
        this.health=0;
        this.name = name;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(this.name, this.strength,this.speed,this.health);
    }
    drinkSake(){
        this.health +=10;
        this.showStats();
    }

}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();