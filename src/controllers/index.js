var fileOperationsController = require('./fileOperations.controller');

module.exports = {
    FileOperations: function() {
        return new fileOperationsController();
    }
}