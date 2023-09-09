require('dotenv').config();

const PORT = process.env.PORT || 4000;
const MONGO_BD = process.env.MONGO_BD || 'mongodb://127.0.0.1:27017/bitfilmsdb';

module.exports = {
  PORT,
  MONGO_BD,
};
