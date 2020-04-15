var express = require('express');
var router = express.Router();
var FileController = require('../controllers').FileOperationsController();

console.log('File Routes initialised');

router.get('/fullLog', function(req, res) {  
    console.log('Inside get fullLog route. ');
    FileController.getFullLogs(req, res);
});

router.get('/logByTime/:logTimestamp', function(req, res) {
    console.log('Inside get readLogByTime route. ');
    FileController.readLogByTime(req, res);
});

module.exports = router;



/*
* curl localhost:8000/log/logByTime/2020-01-18T07:18:27.400Z
* curl localhost:8000/log/fullLog
*/