import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";

import root from "./routes/root.route.js";

const app = express();

const corsOption = {
  origin: "http://localhost:3002",
};

app.use(cors(corsOption)); // CORS Setup`
app.use(morgan("dev")); // Logger

app.use(helmet()); // HTTP Header Security

app.use(bodyParser.json()); // JSON Payload Parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
); // URLEncoded Parser

app.use("/", root);

app.listen(3002);
