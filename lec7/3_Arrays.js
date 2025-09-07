let arr = [1,2,3,4,5,6];
console.log(arr);
for(let i=0;i<arr.length;i++) {
    console.log(arr[i]);
}

arr.push(10);
arr.unshift(8);
arr.shift();
for(let i=0;i<arr.length;i++) {
    console.log(arr[i]);
}
//unshift - inserts from first
//shift - for removingfrom  front

