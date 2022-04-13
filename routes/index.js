var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* ======================== */
router.get("/weightinputform", function(req, res, next){
 res.render("weightinputform");
});


/******************************/
router.get("/viewall", function(req, res, next){
 
 var dbman = require("../public/javascripts/db_procs/dbManager");
 dbman.SelectAllDocuments(res);
 
});

/* **************************/
router.post("/addweight", function(req, res, next){
 
 var weightTrackObj = {
  trackerDate: new Date().toString(),
  trackerStone: req.body.txtStones,
  trackerPounds: req.body.txtPounds
 }
 
 var dbman = require("../public/javascripts/db_procs/dbManager");
 dbman.InsertOne(res, weightTrackObj);
 
});

/******************************/

router.get("/deletesingle/:wid", function(req, res, next){
 
 var weightid = req.params.wid;
 
 var dbman = require("../public/javascripts/db_procs/dbManager");
 dbman.DeleteOne(res, weightid);
 
});

/******************************/

router.get("/editform/:wid", function(req, res, next){

 var weightid = req.params.wid;
 res.render("weighteditform", { wid:weightid });

});

router.post("/editweight", function(req, res, next){

 var weightTrackObj = {
  trackerDate: new Date().toString(),
  trackerStone: req.body.txtStones,
  trackerPounds: req.body.txtPounds
 }
 
 var docIdToBeUpdated = req.body.txtTrackerID;
 
 var dbman = require("../public/javascripts/db_procs/dbManager");
 dbman.EditOne(res, weightTrackObj, docIdToBeUpdated);

});

module.exports = router;
