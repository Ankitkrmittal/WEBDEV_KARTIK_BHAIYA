//three ways to do this 
//call
//apply
//bind

let person = {
    name :'vikas',
    age:20
}
let person2 ={
    name:'Aryan',
    age:18
}
function print(city,country){
    console.log(this);
    this.city = city;
    this.country = country
}
print.call(person2,"Delhi");
console.log(person2);

print.apply(person,["Delhi","India"])
let f = print.bind(person,"Delhi","India");
f();//here we can also pass parameters instead of passing it on upper in bind 


