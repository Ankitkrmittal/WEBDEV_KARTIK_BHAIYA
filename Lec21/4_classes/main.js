const maths = require('./maths');
const mathClass = require('./maths_class');

console.log(maths.add(10,20));
let obj = new mathClass();

console.log(mathClass.add(10,30));
console.log(obj.sub(10,20));