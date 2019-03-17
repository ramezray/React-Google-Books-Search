const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const books =  require("./routes/api/books")

const app = express();

app.use(bodyParser.json());
const db = require("./config/Keys").mongoURI;


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
});

mongoose
    .connect(db)
    .then(()=> console.log("mongoDB Connected......"))
    .catch(err => console.log(err));

app.use("/api/books", books)

const port = process.env.PORT ||3001;

app.listen(port, () => console.log(`server started on port ${port}`));


