function hello() {
    console.log("hello");
}
let world = function() {
    console.log("world")
}
let cb = ()=>{
    console.log("coding blocks");
}
let add =(a,b) => a+b;
hello();
world();
cb();
add();