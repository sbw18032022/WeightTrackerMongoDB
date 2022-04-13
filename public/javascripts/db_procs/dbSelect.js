
const mongoose = require("mongoose");


// This class queries documents.
class DBSelect {

 constructor(){
  // empty
 }
 
 
 // finds all documents
 FindAllDocuments(schema, rdir){
 
    var query = schema.find({}, function(err, foundDocs){
    
     if(err){
      rdir.redirect("errorpage", {error:err});
     } else {
      rdir.render("weightresults", {data:foundDocs}); 
     }
    
    });
    
   
 }
 

}

module.exports = new DBSelect();
