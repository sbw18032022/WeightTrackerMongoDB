
const mongoose = require("mongoose");

// The mongodb connection
class DBConn {

 constructor(){
  this.url = "mongodb://localhost:27017/weighttracker";
 }
 
 // make the connection
 ConnectDB(){
  
  mongoose.connect(this.url)
   .then(()=>console.log("Mongodb connected!"))
   .catch((err)=>console.log(err));
 
 }
 
}


module.exports = new DBConn();
