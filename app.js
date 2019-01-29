const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const queries = require('./queries')
const bcrypt = require('bcryptjs');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser());

app.get('/', (req, res) => {
    queries.listAllWildflowers().then(wildflowers => res.send(wildflowers))
})
app.get('/users', (req, res) => {
    queries.getAllUsers().then(users => res.send(users))
})

app.get('/users/:id', (req, res) => {
    queries.getWildflowersByUser(req.params.id).then(usersflowers => res.send(usersflowers))
})

app.post('/login', function (req, res) {
    const { username, password } = req.body;
    return queries.getUser(username)
        .then(user => {
            if (user.length === 0) {
                return res.send({ message: 'User not found' })
            }
            return bcrypt.compare(password, user[0].password)
                .then(isGood => {
                    if (isGood) {
                        return res.send({ user, message: 'Authenticated' })
                    }
                    return res.send({ message: 'Password is incorrect' })
                })
        });
});

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    return queries.getUser(username).then(user => {
        if (user.length > 0) {
            return res.send({ message: "User already exists" }); it
        }
        let hash = bcrypt.hashSync(password, 10);
        let newUser = {
            username,
            password: hash
        }
        return queries.createUser(newUser).then(newUser => {
            res.send({ response: newUser[0], message: "User created" })
        })
    })
});

app.listen(port, console.log(`Server running on ${port}`));