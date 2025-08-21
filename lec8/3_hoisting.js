function callFn(fn) {
    fn();
}
function hello() {
    console.log("hello world");
}
callFn(hello);