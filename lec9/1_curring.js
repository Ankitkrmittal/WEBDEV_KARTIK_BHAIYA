function sum(x) {
    if(!x) return 0;
    let ans =0;
    return function helper(y) {
        if(!y) return ans;
        ans +=y;
        return helper;
    }
}
console.log(sum(1)(2)(3)(4)(5)(6)());