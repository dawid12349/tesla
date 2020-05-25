const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:skorpion1@cluster0-qpuuj.mongodb.net/tesla', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
