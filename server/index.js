import express from "express";
import holaRouter from "./routes/hola.route.js";
import postRouter from "./routes/post.route.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json());
app.use("/api", holaRouter)
app.use("/", postRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});