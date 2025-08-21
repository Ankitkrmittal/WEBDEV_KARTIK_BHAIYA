
function fibb(){
    let cache = {};
    return function(n) {
        if(cache[n]) return cache[n];
        console.log("function called");
        let ans = calfib(n);
        cache[n] = ans;
        return ans;
    }
}
function calfib(n) {

    if(n==0 || n==1) return n;
    return calfib(n-1)+calfib(n-2);

}
cal = fibb();
console.log(cal(5));
console.log(cal(5));
console.log(cal(6));