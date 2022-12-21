class Person {
    name
    constructor(name){
        this.name=name
    }
    getName(){
        return this.name;
    }

    setName(newName){
        this.name=newName
    }

    walk(describe){
        return this.name + " " + describe
    }
}

class Programmer extends Person{
    constructor(name, programLanguage) {
        super(name);
        this.programLanguage = programLanguage;
    }

    get programLanguage() {
        return this.programLanguage;
    }

    set programLanguage(y) {
        this.programLanguage = y;
    }

    writeCode() {
        return this.name + " is writing " + this.programLanguage + " code";
    }
}

var myProgrammer = new Programmer("Nguyen Van A", "ReactJS")
console.log(myProgrammer.walk("home"));
// console.log(Programmer.writeCode());