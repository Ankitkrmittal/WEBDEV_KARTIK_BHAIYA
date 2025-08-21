let arr=[1,2,3,4,5];
let newArr = arr.filter(function(value,index,a){
    return value%2==0;
})
console.log(newArr);
