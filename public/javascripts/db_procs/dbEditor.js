const mongoose = require("mongoose");

// this class edits a document.
class DBEditor {
 
 constructor(){
  // do something
 }
 
 
 // updates one document.
 EditOne(schema, rdir, doc, docIdToBeUpdated){
  
  schema.findOneAndUpdate({_id:docIdToBeUpdated}, {$set: doc}, function(err){
   
   if(err){
    console.log(err);
    rdir.redirect("errorpage", {error:err}); 
   } else {
    rdir.redirect("/viewall");
   }  
   
  });
  
 }
 
}

module.exports = new DBEditor();
