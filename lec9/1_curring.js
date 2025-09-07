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
//🔹 What is Currying?

//👉 Currying is the process of transforming a function that takes multiple arguments into a sequence of
//  functions that each take one argument.