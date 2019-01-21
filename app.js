const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
//import queries
//const queries = require('./queries')
//import bodyParser
//cors
//error handling

app.get('/', (req, res) => {
    res.send('It worked!')
})

app.listen(port, console.log(`Server running on ${port}`));