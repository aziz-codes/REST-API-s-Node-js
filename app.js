const express = require("express");
require("dotenv").config();

const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;
const products_routes = require("./routes/products");
app.get("/", (req, res) => {
  res.send({ message: "Connected to the server" });
});

app.use("/api/products", products_routes);
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} You have connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
