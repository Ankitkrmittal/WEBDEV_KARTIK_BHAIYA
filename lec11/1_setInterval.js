let x = setInterval(()=>{
    console.log("hello");
},1000)

setTimeout(()=>{
    clearInterval(x);
},3000);

//**
// set interval is used to repeate the task in the specified interval the function will call in every specified interval
//  */ 