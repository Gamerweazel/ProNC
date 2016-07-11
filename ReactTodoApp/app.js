var ensure = require("connect-ensure-login")
var express = require('express');
var controller = require("./server/todo/controller")
var session = require('express-session');
var MongoStore = require('connect-mongostore')(session);
var mongoose = require('mongoose')
var morgan = require('morgan')
var passport = require('passport')
var skipper = require('skipper')
var colors = require("colors")
var path = require("path")
var Strategy = require('passport-facebook').Strategy
var pushState = require('connect-pushstate')


// Configure Mongoose

mongoose.connect('mongodb://localhost/ReactTodo')
mongoose.connection.on("connected", function() {
	console.log("Connected to DB...".green);
})
mongoose.connection.on("error", function(err) {
	console.log("Connected to DB Failed...".red + err.message);
})

// Configure Passport
var User = require("./server/user/model")
passport.use(new Strategy({
    clientID: "580031238842887",
    clientSecret: "bc759d23ccb834dd7d4e4dd2eeaf090a",
    callbackURL: 'http://localhost:9005/auth/facebook/callback',
	  profileFields: ["email"]
  },
  function(accessToken, refreshToken, profile, done) {
      process.nextTick(function (){
        User.findOne({"facebook.id" : profile.id}, function(err, user){
            if (err)
              return done(err)
            if (user)
              return done(null, user)
            else 
              var newUser = new User()
                newUser.facebook.id = profile.id
                newUser.facebook.token = accessToken
                newUser.facebook.name = profile.name.givenName + " " + profile.name.familyName
                newUser.facebook.email = profile.emails[0].value

                newUser.save(function(){
                  if (err)
                    throw err
                  return done(newUser)
              })
          })
      })
    return done(null, profile);
  }));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// Configure Express

var app = express()

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use(skipper())
app.use(express.static(__dirname + "/dist"))
app.use(session({ secret: 'keyboard cat',
                  resave: true, 
                  saveUninitialized: true,
                  cookie: {
                    maxAge: 3600000
                  },
                  store: new MongoStore(
                {mongooseConnection:mongoose.connection})
}));

// Initialize passport and restore sessions

app.use(passport.initialize())
app.use(passport.session())

// Routes

// app.get('/', function (req, res)
// {
// 	res.sendFile(path.join(__dirname, "/dist/index.html"));
// })

app.get('/auth/facebook', passport.authenticate('facebook', {scope: ["email"]} ));
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/' }));

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});                                      

app.get('/todos', ensure.ensureLoggedIn(), controller.index)
app.post('/todos', controller.create)

app.get('/todos/:id', controller.show)
app.put('/todos/:id', controller.update)
app.delete('/todos/:id', controller.delete)



// Listening

app.listen(9005, function ()
{
	console.log('Listening on localhost:9005'.blue)
})
