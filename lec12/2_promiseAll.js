let p1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("p1 is competed")
    },1000)
}) 
let p2 = new Promise((res,rej)=>{
     setTimeout(()=>{
        res("p2 is completed");
     },2000)
})
Promise.all([p1,p2])
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err)
    }) 