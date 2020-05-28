const mongoose = require('mongoose');
const con = 'mongodb+srv://admin:skorpion1@cluster0-qpuuj.mongodb.net/tesla';
mongoose.connect('mongodb://localhost:27017/tesla', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
