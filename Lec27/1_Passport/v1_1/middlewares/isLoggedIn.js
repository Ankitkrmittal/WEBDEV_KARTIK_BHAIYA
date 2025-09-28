module.export = function isLoggedIn(req,res,next){
   if(req.user){
    return next()
   }
   res.redirect('/login');
}