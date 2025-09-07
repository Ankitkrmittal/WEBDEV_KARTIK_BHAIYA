let body = document.querySelector('body');
let isRed = true;

setInterval(() => {
    if (isRed) {
        body.style.backgroundColor = "red";
    } else {
        body.style.backgroundColor = "yellow";
    }
    isRed = !isRed;  // toggle value
}, 1000);


