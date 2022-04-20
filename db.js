var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://neha:test123@cluster0.zuseg.mongodb.net/sparkle?retryWrites=true&w=majority");

// require('dotenv').config();
// const PORT = process.env.PORT || 5000;
// const mongoose = require('mongoose');
// const mongoString = process.env.DATABASE_URL;

// mongoose.connect(mongoString);
// const database = mongoose.connection;

// database.on('error', (error) => {
//     console.log(error)
// })

// database.once('connected', () => {
//     console.log('Database Connected');
// })