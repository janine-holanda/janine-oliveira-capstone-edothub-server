import express from "express";
import cors from "cors";
import notFound from "./middleware/notFound.js";
import orderRoutes from "./routes/order-routes.js";
import "dotenv/config";

const BACKEND_URL = process.env.BACKEND_URL;
const PORT = process.env.PORT || 5051;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/orders", orderRoutes);

app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server Started on ${BACKEND_URL}:${PORT}`);
  console.log("Press CTRL + C to stop server");
});
