require('dotenv').config();

const app = require('./app');
const mongoose = require('mongoose');

const { DB_URI, PORT = 3030 } = process.env;

(async () => {
  await mongoose.connect(DB_URI);
  console.log('Database connection established successfully');
  app.listen(3030, () => {
    console.log('server is running on server 3030');
  });
})();
