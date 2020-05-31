PORT=3000
MONGODB_URL=mongodb://127.0.0.1:27017/teslaconst mongoose = require('mongoose');
const con = 'mongodb+srv://admin:skorpion1@cluster0-qpuuj.mongodb.net/tesla';
mongoose.connect(con, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
