const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./config/config');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json('Hello World');
})

app.post('/usuario/', (req, res) => {
    let body = req.body;
    res.json({persona:body});
})

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id  
    res.json({
        id
    })
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto ', process.env.PORT);
})