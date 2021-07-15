const mongoose = require('mongoose');
const url = "mongodb+srv://Mahmoud:8524625864@cluster0.o2hak.mongodb.net/NodeJs?retryWrites=true&w=majority"
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })