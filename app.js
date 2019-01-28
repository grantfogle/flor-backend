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
    // res.send('It worked!')
    queries.listAllWildflowers().then(wildflowers => res.send(wildflowers))
})

app.get('/users/:id', (req, res) => {
    queries.getWildflowersByUser(req.params.id).then(usersflowers => res.send(usersflowers))
})


//login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    return queries.getUser(username).
})


//signup route
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    return queries.getUser(username).then(user => {
        if (user.length > 0) {
            return res.send("User already exists");
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