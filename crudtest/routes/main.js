var app = module.parent.exports.app;
var passport = module.parent.exports.passport;
var Persons = require('../models/persons.js');


var adminAuth = function(req, res, next){
		console.log(req.user);
    //authorize role
    if(typeof req.user != "undefined"){
        next();
    }else{
        //Not authorized redirect
        res.redirect('/');
    }
}

app.get('/list', adminAuth, function(req, res){
  Persons.find({}, function(err, docs){
    res.render('list', { docs: docs});
  });
});

app.get('/login', function(req, res){
  res.render("login", {title: "Login"});
});

app.post('/login', passport.authenticate('AdminLogin',
{ successRedirect: '/list', failureRedirect: '/login'})
);

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/login');
});
