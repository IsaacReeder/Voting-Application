const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const MONGODB_URI =
  "mongodb+srv://Isaac:isaac123@cluster0.br37a.mongodb.net/voting-software?retryWrites=true&w=majority";
require("./server/routes/poll.routes.js")(app);

mongoose
  .connect(MONGODB_URI || "mongodb://localhost/voting", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const port = 9000;
    app.listen(port, () => {
      console.log(
        "Your server is listening on port %d (http://localhost:%d)",
        port,
        port
      );
    });
  })
  .catch((error) => {
    console.log("Something went wrong with the database connection", error);
  });

//HEROKU DEPLOYMENT
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}
//HEROKU DEPLOYEMENT
