
class Ninja{
    constructor( name, health, speed, strength){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    showStats(){
        console.log("Name: " + this.name + ", Strength: " + this.strength +", Speed: " + this.speed + ", Health: " + this.health);
    }

    kick(ninja){
        let kick = this.strength * 15;
        ninja.health = ninja.health - kick;
        console.log(ninja.name + " was kicked by " + this.name + " and lost " + kick + " Health!"); 
    }
    
    sayName(){
        console.log("My name is " + this.name);
    }


    drinkSake(){
        this.health = this.health + 10;
    }

    punch(ninja){
        ninja.health -= 5;
        console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
    }
}

class Sensei extends Ninja{
    constructor (name, health, speed, strength ){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }

    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        super.drinkSake();
    }
}

// var ninja1 = new Ninja("Hyabusa");
// var ninja2 = new Ninja("Koji");

// ninja1.punch(ninja2)
// ninja2.kick(ninja1);

// ninja1.showStats();
// ninja2.showStats();

var superSensei = new Sensei("Totosai");
superSensei.speakWisdom();
superSensei.showStats();

