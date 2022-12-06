/* Classes */

/* Data modifier */
// public, private, protected e o readonly(não permite a alteração)

//superclass
class Character{
    // o "?" deixa como opcional
    name?: string;
    stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void{
        console.log(`Attack with ${this.stregth} points`)
    }
}

//subclass
class Magician extends Character{

    magicPoints:number;

    constructor(name: string, stregth: number, skill: number, magicPoints: number){
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Ruy", 10, 98);
const p2 = new Magician("Mago", 5, 30, 100);

p1.attack();




