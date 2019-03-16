const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const books =  require("./routes/api/books")

const app = express();

app.use(bodyParser.json());
const db = require("./config/Keys").mongoURI;

mongoose
    .connect(db)
    .then(()=> console.log("mongoDB Connected......"))
    .catch(err => console.log(err));

app.use("/api/books", books)

const port = process.env.PORT ||3001;

app.listen(port, () => console.log(`server started on port ${port}`));


