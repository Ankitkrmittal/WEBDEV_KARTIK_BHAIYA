//1.fetch
let URL ="https://meowfacts.herokuapp.com/"
let btn = document.querySelector('button');
function loadData(arr){
     let ul = document.querySelector('ul');
     ul.innerText='';
     arr.forEach((d) => {
        let li = document.createElement('li');
        li.innerText=d;
        ul.appendChild(li);
     });
}

//calling api suing fetch with promises
function getData(URL){
    fetch(URL)
       .then((res)=>res.json())
       .then(({data})=>{
           console.log(data);
           loadData(data);
       })
       .catch(err=>{
        console.log(err);
       })
    
}
btn.onclick =()=>{
   getData(URL);
}