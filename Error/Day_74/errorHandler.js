const express = require("express");
const port = 4000;

const app = express();

// Error Handling Middleware (Custom)
app.use((err, req, res, next) => {
  console.log(err);
});

app.get("/err", (req, res) => {
  abc = abc;
});

app.listen(port, () => console.log(`Server running on port ${port}`));
