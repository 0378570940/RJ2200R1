class sum{
    name;
    describe;
    constructor(name, describe){
        this.name=name
        this.describe=describe
    }
    static triple(number=1){
        return number * 3
    }
}

class HinhHoc extends sum{
    constructor(length, name, describe){
        super(name, describe)
        this.length=length
    }
}
let hinhhoc = new HinhHoc("42","biet nhe");
console.log(HinhHoc.triple(4));