const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Azure Web App backend!");
});

app.get("/api/hello", (req, res) => {
  res.json({
    message: "API endpoint working",
    timestamp: new Date().toISOString(),
    region: process.env.WEBSITE_SITE_NAME || "unknown"
  });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

