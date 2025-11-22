const path = require('path');
const express = require('express');
const app = express();
const PORT=4444;
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

app.get('/login',(req,res)=>{
  if(req.cookies.user){
    return res.redirect('/profile');
  }
  res.sendFile(path.join(__dirname,'login.html'))
})

app.post('/login',(req,res)=>{
  const {username} = req.body;

  let userData ={
    username,
    count:0
  }
  res.cookie('user',JSON.stringify(userData),{
    httpOnly:true
  })
  res.redirect('/profile');
})

app.get('/profile',(req,res)=>{
   console.log(req.cookies);
   if(!req.cookies.user){
    return res.redirect('/login')
   }
   let userData = JSON.parse(req.cookies.user);
   if(!userData.username){
    res.redirect('/login')
   }
   userData.count++;
   res.cookie('user',JSON.stringify(userData),{
    httpOnly:true
   })
   res.send(`Welcome to the page ${userData.username} for : ${userData.count}
    <br>
    <a href='/logout'>
        <button>LOGOUT</button>
    </a>
`);
})
app.get('/logout', (req, res) => {
  res.cookie('user', "");
  res.redirect('/login');
})


app.listen(PORT, () => {
  console.log(`http://localhost:` + PORT);
});