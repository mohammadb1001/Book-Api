const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/bookstore', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to the database');
  } 
  catch (error) {
    console.error('Failed to connect to the database', error);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
