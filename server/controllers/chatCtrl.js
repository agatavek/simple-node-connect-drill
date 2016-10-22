var chats = []; //this is sever side controller
module.exports = {

  getChats:function(req,res){
    res.send(chats);
    // TODO write getChats- function that will accept a request and get the chats
  },
  postChats:function(req,res){
    console.log(3456, req.body)
    chats.push(req.body);
    res.status(200).send(chats);//client added request to add the chat, the chat will be added and then all chats will be sent and updated, send ends the request
    // TODO write postChats- function that will accept a request and post a new chat
  },
  deleteChats:function(req,res){
    chats = [];
    res.status(200).send('Chats deleted');
    // TODO write deleteChats-function that will accept a request and delete all the chats
  }
}
