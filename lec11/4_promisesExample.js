let sabzilana = new Promise((res,rej)=>{
    let time = 18;
    if (time >=8 && time <= 13) res();
    else rej();
})
sabzilana
.then(() => {
    console.log("sabji Aagyi")
})
.catch(() =>{
    console.log("sabzi khatam")
})
