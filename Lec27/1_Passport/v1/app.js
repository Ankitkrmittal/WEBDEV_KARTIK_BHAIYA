const path = require('path');
const express = require('express');
const users = require('./model/users');
const mongoose = require('mongoose');
const app = express();
const PORT = 4444;
const passport = require('passport');
const LocalStrategy = require('passport-local');

app.use(require('express-session')({ secret: 'bfou2gohobvfbbk jncjxa ', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
    async function verify(username, password, done) {
      try {
        let existinguser = users.findOne({
            username
        })
        if(!existinguser){
            return done(null,false,{ message: 'Incorrect username' });
        }
        if(existinguser.password = password){
            return done(null,false,{message:'Incorrect Password'});
        }
        return done(null,existinguser);
      } catch (error) {
        done(error);
      }
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });
  
  passport.deserializeUser(async function(id, done) {
      try {
        let user= users.findOne({
            _id:id
        })
        done(null,user)
      } catch (error) {
        done(error)
      }
  });
  app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

app.get('/signup', isLoggedOut, (req, res) => {
    res.render('signup');
})
function isLoggedIn(req, res, next) {
    if (req.user) {
        return next();
    }
    res.redirect('/login');
}

function isLoggedOut(req, res, next) {
    if (!req.user) {
        return next();
    }
    res.redirect('/');
}
app.post('/signup',isLoggedOut, async (req,res)=>{
    const {username,password,email} = req.body;
    try {
      await  users.insertOne({
            username,
            password,
            email:email ||''
        })
        res.redirect('/login');
    } catch (error) {
        res.render('error',{
            error
        })
    } 
})
app.get('/login',isLoggedOut,(req,res)=>{
    res.render('login');
})
app.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });

    app.get('/', isLoggedIn, (req, res) => {
        console.log(req.user);
        res.render('profile', {
            user: req.user
        });
    })
    
    app.post('/logout', function (req, res, next) {
        req.logout(function (error) {
            if (error) {
                return res.render('error', {
                    error
                })
            }
            res.redirect('/login');
        });
    });
    
    mongoose.connect('mongodb://localhost:27017/myapp')
        .then(() => {
            app.listen(PORT, () => {
                console.log(`http://localhost:` + PORT);
            });
        })