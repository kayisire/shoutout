/**
 * Importing required packages
 * */

require("dotenv").config();
const cors = require("cors");
const logger = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

/**
 * Importing important utilities and routes
 * */

const initDB = require("./config/Database");
const Response = require("./utils/Response");
const Router = require("./routes/Router");

/**
 * Initializing the app, port, and DB
 * */

const app = express();
const port = process.env.PORT;
initDB();

/**
 * Configuring middleware for logging, body parsing, as well as cookie parsing
 */

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("uploads"));
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    createParentPath: true,
  })
);

/** Routes */
/**
 * Route Serving && Error Response In Case Of "Route Not Found"
 * @name /
 * @function
 * @param {string} path - Express path
 */

app.get("/", (req, res) => Response.send200(res, "Welcome To SHOUTOUT", {}));

/**
 * Route serving API Routes
 * @name /v1
 * @function
 * @param {string} path - Express path
 */

app.use("/v1", Router);

/**
 * Catch undefined route call and forward to error handler as ERROR_404
 */

app.use(function (req, res, next) {
  Response.send404(res, "Resource not found!");
});

/**
 * Catch any other server error and forward to error handler as ERROR_500
 */

app.use(function (err, req, res, next) {
  Response.send500(res, err.message);
});

/**
 * Starting the server
 */

const server = async () => {
  try {
    app.listen(port, () =>
      console.log(`SHOUTOUT is up and running on port: ${port}`)
    );
  } catch (error) {
    console.error(`Oups! Encountered error: ${error.message}`);
  }
};

server();

module.exports = app;
