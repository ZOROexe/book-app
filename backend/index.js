require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./src/books/books.routes");
const orderRoutes = require("./src/orders/order.route");
const cors = require("cors");
const app = express();

const port = 5000;
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
async function main() {
  await mongoose.connect(process.env.DB_URL);
}
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//qIwlNtmTPQ8wEAA9
