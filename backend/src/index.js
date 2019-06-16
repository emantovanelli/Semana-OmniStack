const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://edvaldo:edvaldo@cluster0-ynd4p.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use('/file', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));
app.use(require('./routes'));

app.listen('3333');