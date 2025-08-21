 //latent flip for visualization of event loop 
 //30 days of js on leetcode
 function waitASec() {
    let prevTime = new Date().getTime();

    while (new Date().getTime() - prevTime < 1000) {

    }
}

function waitNSec(n){
    for(let i = 0; i < n; i++){
        waitASec();
    }
}

waitNSec(2);

console.log("Hello");