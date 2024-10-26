import express from "express";
import cors from "cors";
import "dotenv/config";

const BACKEND_URL = process.env.BACKEND_URL;
const PORT = process.env.PORT || 8081;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server Started on ${BACKEND_URL}:${PORT}`);
  console.log("Press CTRL + C to stop server");
});
