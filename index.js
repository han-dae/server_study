const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://h33223012:iuhdcsc2359@cluster0.zds3d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Mongo connect..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!~안녕하세요");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
