const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mernstack');

const objectobd = mongoose.connection;

objectobd.on('connected', () => {
    console.log('Connected to mongoDB');
});

objectobd.on('error', () => {
    console.log('there is a error');
});

module.exports = mongoose;