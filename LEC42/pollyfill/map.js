let arr = [1,2,3,4,5,6];
function myMap(){
    let newArr =[];
    arr.forEach(e=>{
        newArr.push(e*e);
    })
    return newArr;
}
let newArr=myMap(arr);
console.log(newArr)