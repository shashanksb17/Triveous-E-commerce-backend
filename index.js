const express = require("express");
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const cors = require("cors");

const PORT = process.env.PORT || 3000;
require("dotenv").config();

const { db_connection } = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("HOME PAGE OF TRIVEOUS-ECOMMERCE APP");
});

const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

const logStream = fs.createWriteStream(path.join(__dirname, 'logs', 'access.log'), { flags: 'a' });
app.use(
  morgan('combined', {
    stream: logStream,
  })
);



app.listen(PORT, async () => {
  try {
    await db_connection;
    console.log("connected to DB");
  } catch (err) {
    console.log("can not connect DB");
    console.log(err);
  }
  console.log(`server is running at port ${process.env.port}`);
});
