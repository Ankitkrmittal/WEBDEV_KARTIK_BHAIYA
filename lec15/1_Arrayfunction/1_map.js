let arr = [1,2,3,4,5];

let newArr = arr.map((value,index,a)=>{
    console.log("value",value,"Index",index,"array",a);
    return value*value;
});

console.log(newArr);