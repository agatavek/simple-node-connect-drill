angular.module("myChats").service("mainSrvc", function($http){

  this.getChats = function () {
    return $http({
      method: 'GET',
      url: '/api/chats' //end point where are we sending this request to becaus ethey are all running on the same server port; 
    });
  }
  //TODO Call server to get the chats

  this.addChats = function(chat){
    return $http({
      method: 'POST',
      url: '/api/chats',
      data: chat //whatever we put here it becomes req.body
    });

    //TODO Call server to add to chats
  }

  this.deleteChats = function(){
    return $http({
      method: 'DELETE',
      url: '/api/chats'

    })
    //TODO Call server to whipe all the chats
  }

  this.setScreenname = function (screenname) {
    var dataObj = {
      screenname: screenname
    }
    return $http({
      method: 'POST',
      url: '/api/screenname',
      data: dataObj

    })
    }

});
