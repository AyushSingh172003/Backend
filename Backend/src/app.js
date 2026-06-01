import express from "express";

const app = express();  // Create an express app

app.use(express.json());
// routes imported
import UserRouter from "./routes/user.route.js";

// router declaration
app.use("/api/v1/users", UserRouter)
export default app;