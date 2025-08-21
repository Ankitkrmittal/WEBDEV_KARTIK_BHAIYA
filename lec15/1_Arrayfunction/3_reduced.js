let arr=[1,2,3,4,5,6,7];
let sum = arr.reduce((acc,value,indx,a)=>{
    return acc+value;
},0);//
//here we have pass zero as the starting value of accumulator we can set the value as required
console.log(sum);
//use to convert an array into a single element like in sum,multiplication
