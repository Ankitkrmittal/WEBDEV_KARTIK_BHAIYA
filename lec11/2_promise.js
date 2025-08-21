function success() {
    console.log("promise fulfilled");
}
function error() {
    console.log("promise failed");
}
let newPromise = new Promise(function(res,rej) {
    setTimeout(function () {
        res();
    }, 3000);
});
newPromise.then(success).catch(error)


