import express from "express"; // import express
import cors from "cors"; // Cross-Origin Resource Sharing
import dotenv from "dotenv"; // Dotenv
import mongoose from "mongoose"; // Mongoose
import routes from "./routes/main.routes.js"; // import routes

dotenv.config(); // Load .env file

mongoose.connect(process.env.MONGO_URI); // Connect to MongoDB

const app = express(); // create express app

app.set("port", process.env.APP_PORT ?? 8080); // set port

app.use(cors()); // enable cors
app.use(express.json()); // enable json

app.use(routes); // use routes

app.listen(app.get("port"), () => {
  console.log(`Server started at port ${app.get("port")}`); // Server started
});
