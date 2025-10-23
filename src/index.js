import express from "express";
import dotenv from "dotenv";
import shoeCleaningRoutes from "./routes/shoeCleaningRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// routes
app.use("/api/shoe-cleaning", shoeCleaningRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
