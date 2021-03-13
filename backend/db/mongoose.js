const mongoose = require('mongoose');
const con = 'mongodb+srv://:@cluster0-qpuuj.mongodb.net/tesla';
mongoose.connect(con, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
