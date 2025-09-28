let url = "https://meowfacts.herokuapp.com/"
let list = document.querySelector('ul');
let btn = document.querySelector('button');

 btn.onclick=()=>{
    getdata(url)
 }
 function getdata(url) {
     fetch(url)
      .then((res)=>res.json())
       .then(({data})=>{
        console.log(data);
        loadData(data);
     })
     .catch((err) =>{
        console.log(err);
     })
 }
 function loadData(data) {
    data.forEach(element => {
       let li= document.createElement('li');
        li.innerText=element;
        list.appendChild(li)
    });
 }