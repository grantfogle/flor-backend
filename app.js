const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const queries = require('./queries')
//import bodyParser
//cors
//error handling

app.get('/', (req, res) => {
    // res.send('It worked!')
    queries.listAllWildflowers().then(wildflowers => res.send(wildflowers))
})

app.get('/users/:id', (req, res) => {
    queries.getWildflowersByUser(req.params.id).then(usersflowers => res.send(usersflowers))
})

app.listen(port, console.log(`Server running on ${port}`));