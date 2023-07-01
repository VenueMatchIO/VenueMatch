const mongoose = require('mongoose');

async function connectToDb() {
  try {
    // await mongoose.connect(process.env.DB_URL);
    await mongoose.connect('mongodb+srv://cambam80:Yeah2122!@cluster0.rdsovyi.mongodb.net/?retryWrites=true&w=majority');
    console.log('DB connection complete');
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectToDb;
