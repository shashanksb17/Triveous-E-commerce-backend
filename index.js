const express = require("express");
const helmet = require('helmet');
const cors = require("cors");

const PORT = process.env.PORT || 3000;
require("dotenv").config();

const { db_connection } = require("./config/db");
const {CategoryRouter} = require('./routes/category.route');
const {ProductRouter} = require('./routes/product.route');
const {UserRouter} = require('./routes/user.route');
const {OrderRouter} = require('./routes/order.route');

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/category",CategoryRouter)
app.use("/products",ProductRouter)
app.use("/user",UserRouter)
app.use("/order",OrderRouter)


app.get("/", (req, res) => {
  res.send("HOME PAGE OF TRIVEOUS-ECOMMERCE APP");
});

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
