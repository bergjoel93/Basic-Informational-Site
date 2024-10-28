const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Route for the home page

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Route for the about page
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

// Route for the contact page
app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"));
});

// 404 route for any unmatched paths
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
