// Desc: Main entry point for the application
const express = require("express");

const app = express();

app.listen(process.env.PORT || 3000);

app.use(express.static("public"));
app.set("trust proxy", true);
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// app.use(function (request, response, next) {
//   if (process.env.NODE_ENV != "development" && !request.secure) {
//     return response.redirect("https://" + request.headers.host + request.url);
//   }
//   next();
// });

// app.use(function (req, res, next) {
//   if (req.headers.host.slice(0, 4) === "www.") {
//     var newHost = req.headers.host.slice(4);
//     return res.redirect(301, req.protocol + "://" + newHost + req.originalUrl);
//   }
//   next();
// });

app.get("/", (req, res) => {
  res.render("index");
});
