function memoize(fn) {
    let cache = {};
    return (n)=>{
       if(cache[n]) return cache[n];
       let ans= fn(n);
       cache[n] = ans;
       return ans;
    }
}
factorial = (n)=>{
     let ans =1;
     for(let i=1;i<=n;i++) {
        ans *=i;
     }
     return ans;
}
let fact = memoize(factorial);
console.log(fact(5));
