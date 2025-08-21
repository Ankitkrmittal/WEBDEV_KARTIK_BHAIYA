class Person {
    #secret = "mera secret";
    constructor(name){
        this.name = name
    }
    getSeret(){
        return this.#secret;
    }
}
