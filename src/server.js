import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import productsRoutes from "./routes/productsRoutes.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use([authRoutes, productsRoutes]);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running in port ${port}`));
