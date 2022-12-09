const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({ message: "Connected to the server" });
});

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`${PORT} You have connected`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
