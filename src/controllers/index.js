var fileOperationsController = require('./fileOperations.controller');

module.exports = {
    FileOperationsController: function() {
        return new fileOperationsController();
    }
}