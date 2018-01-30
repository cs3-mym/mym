const mongoose = require('mongoose');

const Project = new mongoose.Schema({

}, { usePushEach: true });

module.exports = mongoose.model('Project', Project);
