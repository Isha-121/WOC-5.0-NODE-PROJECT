const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const indexRoutes = require("./routes/index");

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../frontend/views"));
app.use(express.static("../frontend/public"));

mongoose.set('strictQuery', true);

mongoose
  .connect(
   "mongodb+srv://isha:isha123@cluster0.6bxdcis.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connect to DB Succesfully!"))
  .catch((error) => console.log(error));


app.use(indexRoutes);


app.listen(5000, () => {
  console.log("The server is listening on PORT", 5000);
});
