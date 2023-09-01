const express = require("express");
require("dotenv").config();
const cors = require("cors");

const { db_connection } = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
  res.send("HOME PAGE OF TRIVEOUS-ECOMMERCE APP");
});

app.listen(process.env.PORT, async () => {
  try {
    await db_connection;
    console.log("connected to DB");
  } catch (err) {
    console.log("can not connect DB");
    console.log(err);
  }
  console.log(`server is running at port ${process.env.port}`);
});
