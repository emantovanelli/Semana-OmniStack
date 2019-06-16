const express = require('express');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://edvaldo:edvaldo@cluster0-ynd4p.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

const app = express();

app.use(require('./routes'));

app.listen('3333');