const database = require('./database-connection')

module.exports = {
    listAllWildflowers() {
        return database('wildflowers');
    },
    getWildflowersByUser(id) {
        return database('userstoflowers')
            .select('wildflowers.name', 'wildflowers.family', 'wildflowers.description', 'wildflowers.image')
            .join('wildflowers', 'wildflowers.id', 'userstoflowers.wildflower_id')
            .join('users', 'users.user_id', 'userstoflowers.user_id')
            .where('users.user_id', id)
    }
}