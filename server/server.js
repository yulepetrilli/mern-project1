const express = require('express');
const app = express();

//impoert MongoDB connection
const fileDB = require('./connection');

//import user route and user model
const userRoute = require('./routes/user');

//import body parser
const parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({extended: 'true'}));


app.use('/api/user', userRoute);

//Config server
app.get('/', (request, response) => {
    response.end('Welcome to backend server')
});

app.listen(5000, () => {
    console.log('Node server running in port 5000')
});