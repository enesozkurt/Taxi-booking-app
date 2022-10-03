const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mongo:<password>@cluster0.5nioxoq.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology :true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log('we are connected to mongodb!')
});