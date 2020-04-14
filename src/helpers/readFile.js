var fs = require('fs');
var readLine = require('readline');

var readFullLogs = function(res, inputFile, contentLength) {
    res.set('Transfer-Encoding','chunked');
    res.writeHeader(200, {"Content-Length": contentLength});
    console.log('readFullLogs Reading file: ', inputFile);
    var stream = fs.createReadStream(inputFile);

    stream.on('data', function(data) {
        var lines = data.toString().split('\n');
        lines.forEach((line) => {
            if(!res.write(line+'\n')) {
                stream.pause(); // pause the stream if response output buffer is full
            }
        });
    });

    res.on('drain', function() {
        stream.resume(); // resume streaming when res buffer if drained
    });
    
    stream.on('error', function(error) {
        res.end(error.toString());
    });
    
    stream.on('end', function() {
        console.log('End of file reached.');
        res.end('\nEND OF FILE\n');
    });
}

var readLogByTime = function(res, inputFile, contentLength, timeStamp) {
    let lineMatched = false;
    res.set('Transfer-Encoding','chunked');
    res.writeHeader(200, {"Content-Length": contentLength});
    
    console.log('readLogByTime Reading file: ', inputFile);
    
    var stream = fs.createReadStream(inputFile);

    stream.on('data', function(data) {
        var lines = data.toString().split('\n');
        lines.forEach((line) => {
            if( !lineMatched && line.indexOf(timeStamp) > -1) {
                lineMatched = true;
            }

            if(lineMatched && !res.write(line+'\n')) {
                stream.pause(); // pause the stream if response output buffer is full
            }
        });
    });

    res.on('drain', function() {
        stream.resume(); // resume streaming when res buffer if drained
    });
    
    stream.on('error', function(error) {
        res.end(error.toString());
    });
    
    stream.on('end', function() {
        console.log('End of file reached.');
        res.end('\nEND OF FILE\n');
    });
}

module.exports = {
    readFullLogs: readFullLogs,
    readLogByTime: readLogByTime,
};
