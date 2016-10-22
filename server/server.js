var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var chatCtrl = require('./controllers/chatCtrl');
var port = 3737;

// TODO server front end files with static
app.use(express.static('public')); //serve the public folder from our server file (before that in terminal enter nodemon server/server.js, then npm install This will install dependencies)

app.use(bodyParser.json());

app.use(session({secret:'keyboard cat'})); //(use session to store the screanname, secret name can be whatever you want)
//session is when user goes to the site, request comes to the server, the session is created, all teh information is bein stored, it is like cookies, it is not stored on the database)
// TODO Initialize Session

app.post("/api/screenname", function(req, res){ //function to save the screenname to the session in the /api/screenname endpoint, when we click a button teh screenname will be stored on teh session, session is just javascript object, so you can add properties to it)
  session.screenname = req.body.screenname; // when user sends $http request, whatever is on data property on http request will be req.body on teh server)
  console.log(999999, session)
  res.status(200).send('screenname saved!');
  // TODO Save screenname to session
})

app.get("/api/chats", chatCtrl.getChats);
app.post("/api/chats", addScreenname, chatCtrl.postChats);
app.delete("/api/chats", chatCtrl.deleteChats);



app.listen(port, function(){
  console.log("Listeing on port ", port, " INSERT-WITTY-STATEMENT-HERE");
});

function addScreenname(req, res, next) {
  req.body.screenname = session.screenname;
  next();
}
