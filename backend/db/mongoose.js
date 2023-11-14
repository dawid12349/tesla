const mongoose = require('mongoose');
const con = '';
mongoose.connect(con, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
