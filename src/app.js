import express from "express"; // import express
import cors from "cors"; // Cross-Origin Resource Sharing
import routes from "./routes/index.js"; // import routes
const app = express(); // create express app

app.use(cors()); // enable cors
app.use(express.json()); // enable json

app.use(routes); // use routes

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started at port ${process.env.PORT || 3000}`); // Server started
});
