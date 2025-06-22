'use strinct';
let x ="hello"
console.log(x)
for(let i=0;i<x.length;i++) {
    console.log(x[i]);
}
x = "hello world learning strings";

let indx = x.indexOf("world");
console.log(indx);

let ans ="";
for(let i=0;i<x.length;i++) {
    ans += x[i] + " "
}
console.log(ans);
