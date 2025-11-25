let arr = [1,2,3,4,5,6];

// let ans = arr.reduce((acc,val,i,a)=>{
//     return acc+val;
// })
// console.log(ans)

function reducer(acc,val,idx,array){
    if(!acc)
        acc= 0;
    
    for(let idx=1;idx<array.length;idx++) {
        val = array[idx];
         acc = val+acc;
    }
    
    
    return acc

}

//arr.prototype.reducer = reducer(1,0,0,arr)

//arr.reducer(acc,val,idx,arr)

let val =reducer(1,0,0,arr)
console.log(val)
