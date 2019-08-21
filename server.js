const express = require("express");
const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/express-backend", (req, res) => {
  console.log("GET");
  res.json("GET");
});

app.post("/express-backend", (req, res) => {
  console.log("POST", req.body);
  res.json("POST");
});

app.put("/express-backend/:id", (req, res) => {
  console.log("PUT", req.body, req.params.id);
  res.json("PUT");
});

app.delete("/express-backend/:id", (req, res) => {
  console.log("DELETE", req.params.id);
  res.json("DELETE");
});
