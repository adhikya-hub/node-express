import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import logger from "./middleware/logger.js";
import posts from "./routes/posts.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
const port = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(logger);

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/posts", posts);

app.use(notFound);

app.use(errorHandler);

// app.get("/", (req, res) => {
//   //   res.send("<h1>Hello World</h1>");
//   //res.send({ message: "Hello World" });
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });
// app.get("/about", (req, res) => {
//   //   res.send("<h1>About</h1>");
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

app.listen(port, () => console.log(`Server is running on port ${port}`));
