const FileOperationService = require('../services/fileOperations.service');

var FileOperationController = function() {
    console.log('File controller Initialised');
}


FileOperationController.getFullLogs = function(req, res) {
    console.log('Inside FileOperationController - getFullLogs method');
    FileOperationService.getFullLogs(req, res)
};

FileOperationController.readLogByTime = function(req, res) {
    console.log('Inside FileOperationController - readLogByTime method');
    FileOperationService.readLogByTime(req, res)
};

module.exports = FileOperationController;