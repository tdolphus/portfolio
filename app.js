// Desc: Main entry point for the application
const express = require('express');

const app = express();


app.listen(process.env.PORT || 3000);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index")
  });

  