const mongoose = require('mongoose');

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('DB connection complete');
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectToDb;
