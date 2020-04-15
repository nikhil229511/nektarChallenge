const FileOperationService = require('../services').fileOperationsService();

var FileOperationController = function() {
    console.log('File controller Initialised');
}

FileOperationController.prototype.getFullLogs = function(req, res) {
    console.log('Inside FileOperationController - getFullLogs method');
    FileOperationService.getFullLogs(req, res)
};

FileOperationController.prototype.readLogByTime = function(req, res) {
    console.log('Inside FileOperationController - readLogByTime method');
    FileOperationService.readLogByTime(req, res)
};

module.exports = FileOperationController;