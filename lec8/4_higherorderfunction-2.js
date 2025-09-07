function returnFn() {
    function hello() {
        console.log("Hello");
    }
    return hello;
}

let newFun = returnFn();
newFun();

//**
// A Higher-Order Function (HOF) is a function that either:

//Takes another function as an argument (input), OR

//Returns a function as its result (output). *//

