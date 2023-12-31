// shop.js
const path = require("path");
const routeDir = require("../util/path.js")
const express = require("express");
const router = express.Router();

// Route for the shop's main page
router.get("/", (req, res, next) => {
  // Send the 'shop.html' file for the '/' route
  res.sendFile(path.join(routeDir, 'views', 'shop.html'));
});

module.exports = router; // Export the router for use in other files