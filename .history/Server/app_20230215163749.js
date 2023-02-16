import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import multer from "multer";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./Routers/Auth.js";
import { register } from "./Controllers/Auth.js";

// CONFIGURATIONS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

// app.use(express.json());
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// app.use(morgan("common"));
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());
// app.use("/assets", express.static(path.join(__dirname, "Public/assets")));
mongoose.set("strictQuery", true);

// // FILE STORAGE
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "Public/assets");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage });

// app.get("/auth/register", upload.single("picture"), register);

// app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("App started");
});

const PORT = process.env.PORT || 5500;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.use(PORT, () => {
      console.log(`APP IS LISTENING ON ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
