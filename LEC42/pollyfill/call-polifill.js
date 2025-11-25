function fun(){
    console.log(this);
    this.x ="random value"
}

Function.prototype.mycall = function(obj) {
    let fun= this;
    obj.f = fun;
    obj.f()
}
let obj = {
    a:1,
    b:true
}

let obj1 ={
    name:'random',
    hobbies:'kuch nhi krta'

}

fun.call(obj);
fun.call(obj1)

console.log(obj);
console.log(obj1)