const express = require("express");
const crypto = require("crypto");

const app = express();
const PORT = 9430;

// The Blocking Route
app.get("/heavy", (req, res) => {
  console.log("Heavy computation started...");

  // Willingly blocking the main thread using a synchronous method
  // High iteration count ensures it takes a noticeable amount of time
  crypto.pbkdf2Sync("password", "salt", 5000000, 512, "sha512");

  console.log("Heavy computation finished!");
  res.send("Heavy operation complete!");
});

// The Fast Route
app.get("/light", (req, res) => {
  console.log("Light request processed!");
  res.send("Fast operation complete!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
