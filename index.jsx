const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`web & cyber-security el is running on Port ${port}`)
);

// create a GET route
app.get("/express_backend", (req, res) => {
  //Line 9
  res.send({ express: "Your Web and cyber-security backend is running" }); //Line 10
}); //Line 11
