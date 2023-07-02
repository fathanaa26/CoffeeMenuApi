import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import https from "https";
import fs from "fs";
import session from "express-session";
import cookieParser from "cookie-parser";

import root from "./routes/root.route.js";
import getExtIp from "./util/getExtIp.js";

const port = 80;
const cert = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};
const extip = getExtIp().address;
const app = express();

const oneDay = 1000 * 60 * 60 * 24;
app.use(
  session({
    secret: process.env.SECRET,
    saveUninitialized: false,
    name: "test",
    cookie: {
      oneDay,
    },
    resave: false,
  })
);

app.use(
  cors({
    origin: `https://${extip}:${port}`,
  })
); // CORS Setup`
app.use(morgan("dev")); // Logger
app.use(helmet()); // HTTP Header Security
app.use(bodyParser.json()); // JSON Payload Parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
); // URLEncoded Parser
app.use(express.json());
app.use(cookieParser());

app.use("/", root);

app.use((req, res) => {
  res.status(404).send("[404] Not Found");
});

// custom error handler
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send("[505] Internal Server Error");
});

https.createServer(cert, app).listen(port, () => {
  console.log(`listening on https://${extip}:${port}`);
});
