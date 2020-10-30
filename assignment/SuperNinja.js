class Ninja{
    constructor(name,health=0,speed=3,strenth=3){
        this.health=health;
        this.name = name;
        this.speed = speed;
        this.strength = strenth;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(`Name: ${this.name}, Health:${this.health}, Speed:${this.speed}, Strength:${this.strength} `);
    }
    drinkSake(){
        this.health +=10;
        this.showStats();
    }

}

class Sensei extends Ninja{
    constructor(name){
        super(name,200,0,10);
        this.wisdom = 10;
    }
    speakWisdom(){
        this.drinkSake();
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
console.log(superSensei);