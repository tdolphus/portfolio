// Desc: Main entry point for the application
const express = require('express');
const https = require('https');
const http = require('http')

const app = express();

// http.createServer(app).listen(3001)
// https.createServer(app).listen(process.env.PORT || 3000)
 app.listen(process.env.PORT || 3000)



app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(function(request, response, next) {

  if (process.env.NODE_ENV != 'development' && !request.secure) {
     return response.redirect("https://" + request.headers.host + request.url);
  }

  next();
})

app.get("/", (req, res) => {
    res.render("index")
  });

  