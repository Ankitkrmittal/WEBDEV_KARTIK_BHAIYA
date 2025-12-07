const {exec} = require('child_process')
exec("node heavyWork.js",(error,stdout,stderr)=>{
    if(error){
        console.log(`exec error:${error}`);
        return;
    }
    if(stderr){
        console.log(`stderr error :${stderr}`)
    }
    res.send(stdout)
})
