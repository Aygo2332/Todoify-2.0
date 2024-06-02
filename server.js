import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import taskRoutes from "./routes/taskRoute.js";
import cors from "cors";
import path from "path";
import {fileURLToPath} from 'url';
const PORT = process.env.PORT || 5000;
dotenv.config();
connectDB();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'./frontend/build')));
app.use("/api/tasks", taskRoutes);

app.get("*", function(req, res){
  res.sendFile(path.join(__dirname,"./frontend/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});