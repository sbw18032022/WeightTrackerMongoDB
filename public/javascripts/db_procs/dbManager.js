
const mongoose = require("mongoose");

// Database connection
const mongcon = require("./mongocon.js");

// Acts as a controller for the data operations
class DBManager {

 constructor(){
 
  // The conectors
  this.con = mongcon;
  this.con.ConnectDB();
  
  // Get the schema
  this.weightSchema = require("./weightSchema.js");
  
  // Access to the selector methods
  this.selector = require("./dbSelect.js");
  
  // Access to the adder methods
  this.adder = require("./dbAdder.js");
  
  // Access to the deleter methods.
  this.deleter = require("./dbDeleter.js");
  
  // Access to the editor methods.
  this.editor = require("./dbEditor.js");
  
 }

 
 // Select all documents
 SelectAllDocuments(res){
  this.selector.FindAllDocuments(this.weightSchema, res);
 }
 
 // Inserts a document.
 InsertOne(res, doc){
  this.adder.InsertOne(this.weightSchema, res, doc);
 }
 
 // Deletes a document.
 DeleteOne(res, doc){
  this.deleter.DeleteOne(this.weightSchema, res, doc);
 }
 
 // Edits a document.
 EditOne(res, doc, docIdToBeUpdated){
  this.editor.EditOne(this.weightSchema, res, doc, docIdToBeUpdated);
 }
 

}

module.exports = new DBManager();
