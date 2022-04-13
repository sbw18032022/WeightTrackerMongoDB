const mongoose = require("mongoose");

// This class adds a document.
class dbAdder {
 
 constructor(){
  // something
 }
 

 // Inserts one document into the collection
 InsertOne(schema, rdir, doc){
  
  var insDoc = new schema(doc);
  
  insDoc.save(function(err){
    
   if(err){
    rdir.redirect("errorpage", {error:err});
   } else {
    rdir.redirect("./viewall");
   }
   
  });
  
 }
 
}

module.exports = new dbAdder();
