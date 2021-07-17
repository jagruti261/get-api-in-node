const express = require('express');
const api = express();
const mongoose = require('mongoose');
const Usermodel = require('./models/new-user');
mongoose.connect('mongodb+srv://new-user:NyfVs0A5ReE7VJRV@cluster0.2zo0v.mongodb.net/new-user?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

api.get('/users', function(req, res) {
    Usermodel.find().then((data) => {
        res.json(data);
    })

})

api.listen(4000);