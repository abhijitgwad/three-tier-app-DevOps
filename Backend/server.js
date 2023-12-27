import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import userRoute from "./routes/user_routes.js";
import mymodel from "./models/user.js";
import cors from "cors";

// config env
dotenv.config();

//connecting db
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/user", userRoute);

app.get("/", async (req, res) => {
  res.send({
    message: "welcome guys",
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
