const mongoose = require('mongoose');

const weightSchema = new mongoose.Schema({
 trackerDate: String,
 trackerStone: Number,
 trackerPounds: Number
}, {collection:"trackWeights"});

var model = mongoose.model("trackWeights", weightSchema);

module.exports = model;

