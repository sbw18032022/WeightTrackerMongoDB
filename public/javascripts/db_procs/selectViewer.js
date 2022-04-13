
// This class routes the data collected 
// from mongodb to a view.
class SelectViewer {

 constructor(){
  // something
 }
 
 DisplayAll(foundDocs, res){
  
  res.render("weightresults", {data:foundDocs}); 
  
 }

}

module.exports = new SelectViewer();
