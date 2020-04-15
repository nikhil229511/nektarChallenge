const ReadFile = require('../helpers/readFile');
const fs = require('fs');
const path = require('path');
const config = require('../config');

var FileOperationService = function () {
    console.log("File Service Initialised");
};

FileOperationService.prototype.getFullLogs = function(req, res) {
    console.log('Inside FileOperationService - getFullLogs method.: ', config.inputFilePath);
    if (!config.inputFilePath) {
        res.end('Please Provide proper file path in the config file.\n');
    } else {
        var inputFile = path.join(path.resolve(), config.inputFilePath);
        var contentLength = fs.statSync(inputFile).size;
        ReadFile.readFullLogs(res, inputFile, contentLength);
    }
}

FileOperationService.prototype.readLogByTime = function(req, res) {
    console.log('Inside FileOperationService - getFullLogs method.');
    if (!config.inputFilePath) {
        res.end('Please Provide proper file path in the config file.\n');
    } else {
        var inputFile = path.join(path.resolve(), config.inputFilePath);
        var contentLength = fs.statSync(inputFile).size;
        var timestamp = req.params.logTimestamp;
        ReadFile.readLogByTime(res, inputFile, contentLength, timestamp);
    }
}

module.exports = FileOperationService;