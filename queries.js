const database = require('./database-connection')

module.exports = {
    listAllWildflowers() {
        return database('wildflowers');
    },
    getUser(username) {
        return database('users').where('username', username);
    },
    createUser(newUser) {
        return database('users').insert(newUser).returning('*');
    },
    getAllUsers() {
        return database('users');
    },
    getWildflowersByUser(id) {
        return database('userstoflowers')
            .select('wildflowers.name', 'wildflowers.family', 'wildflowers.description', 'wildflowers.image')
            .join('wildflowers', 'wildflowers.id', 'userstoflowers.wildflower_id')
            .join('users', 'users.user_id', 'userstoflowers.user_id')
            .where('users.user_id', id)
    }
}