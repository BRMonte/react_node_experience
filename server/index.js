const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

//allow node to access our built React project
app.use(express.static(path.resolve(__dirname, '../client/build')));

//handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server" });
});

//all other GET requests not handle before will return the React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


