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
    return queries.getUser
})


//signup route

app.listen(port, console.log(`Server running on ${port}`));