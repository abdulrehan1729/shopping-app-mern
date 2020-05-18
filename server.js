const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8000;
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost/shoppingApp";
const router = require("./router/routers");

const connectOptions = {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
};
//Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, connectOptions, (err, db) => {
  if (err) console.log(`Error`, err);
  console.log(`Connected to MongoDB`);
});
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: false,
  })
);
app.use(bodyParser.json({ limit: "50mb" }));

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is listening on port:${port} `);
});
