const fileOperationService = require('../services/fileOperations.service');

module.exports = {
    fileOperations: function() {
        return new fileOperationService();
    }
};