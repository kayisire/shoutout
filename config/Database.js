var mongoose = require("mongoose");

// MongoDB URI
// var mongoURI =
//   process.env.DB_CONNECTION +
//   "://" +
//   process.env.DB_USERNAME +
//   ":" +
//   process.env.DB_PASSWORD +
//   "@" +
//   process.env.DB_HOST +
//   ":" +
//   process.env.DB_PORT +
//   "/" +
//   process.env.DB_DATABASE;

// Connecting to the DB
var initDB = async () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log("Successfully connected to the database");
    })
    .catch((err) => {
      console.log("Could not connect to the database.", err);
      process.exit();
    });
};

module.exports = initDB;
