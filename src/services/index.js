const fileOperationService = require('../services/fileOperations.service');

module.exports = {
    fileOperationsService: function() {
        return new fileOperationService();
    }
};