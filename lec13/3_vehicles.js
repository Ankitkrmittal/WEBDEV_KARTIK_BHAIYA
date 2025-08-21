class Vehicle{
    constructor(company) {
        this.company=company;
    }
}
class Car extends  Vehicle{
    constructor(company,name,price){
        super(company);
        this.name = name;
        this.price =price;
    }
    print() {
        console.log("Name",this.name);
        console.log("Price",this.price);
        console.log("company",this.company);
    }
}
let Maruti = new Car("Maruti","Breeza",10);
let Audi = new Car("Audi","A4",20);
Maruti.print();
 

