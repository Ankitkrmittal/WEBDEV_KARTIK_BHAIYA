let btn = document.querySelector('button');
let counterValue = document.querySelector('#countervalue');
let cnt =0;
btn.onClick =()=>{
    cnt++;
    counterValue.innerText = cnt;
}
let body = document.querySelector('body');
body.onkeydown= function(ev) {
    console.log(ev.key);
}
