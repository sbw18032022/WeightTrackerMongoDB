const mongoose = require("mongoose");


class DBDeleter {
 
 constructor(){
  // do something
 }
 
 
 // deletes one document.
 DeleteOne(schema, rdir, docid){
 
  // to be done later
  
  var delDoc = schema.deleteOne({_id:docid}, function(err){
   
   if(err){
    rdir.redirect("errorpage", {error:err});
   } else {
    rdir.redirect("/viewall");
   }
      
  });

  

  
 }
 
}

module.exports = new DBDeleter();
