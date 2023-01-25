import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// app.use([])

const port = process.env.PORT || 5007;
app.listen(port, () => console.log(`Server running in port ${port}`));
