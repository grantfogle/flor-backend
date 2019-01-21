const database = require('./database-connection')

module.exports = {
    listAllWildflowers() {
        return database('wildflowers');
    },
    getWildflowersByUser() {

    }
}