let btn = document.querySelector('button');
let MEOW_URL = 'https://meowfacts.herokuapp.com/';

function loadData(arr) {
    let ul = document.querySelector('ul');
   // ul.innerText='';
    arr.forEach((d) => {
        let li = document.createElement('li');
        li.innerText = d;
        ul.appendChild(li);
    })
}
//calling api using axios with async await
async function getData(MEOW_URL) {
    try{
        let {data } = await axios.get(MEOW_URL);
        data = data.data
        console.log(data);
        loadData(data);
    }
    catch(err){
        alert(err.message);
    }
}
btn.onclick=()=>{
    getData(MEOW_URL)
}