class User{
    constructor(id,username,name,bio){
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dataCreated = new Date();
        this.lastUpdate =  new Date()
    }
    getUserName(){
        return this.username;
    }
    getBio(){
        return this.bio;
    }
    getDataCreated(){
        return this.dataCreated;
    }
    getLastUpdate(){
        return this.lastUpdate;
    }
    set setUserName(newUsername){
        this.username = newUsername;
    }
    set setBio(newBio){
        this.bio = newBio;
    }
}
module.exports = User;