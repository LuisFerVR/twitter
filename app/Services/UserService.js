const user = require('./../models/user') ;

class UserService{
     static create (id,username,name){
         return new user (id,username,name, "Sin bio");
     }

     /* getInfo(user){
        return Object.values(user)
     } el static indica que es una función */

     static getInfo(user){
        return Object.values(user)
      }
     
     static updateBio(user, bio){
        user.setBio = bio
      }
    
      static updateUserUsername(user, username){
        user.setUsername = username;
      }
    
      static getAllUsernames(users){
        const usersUsernames = users.map( user => user.username)
        return usersUsernames;
      }
}

module.exports = UserService;