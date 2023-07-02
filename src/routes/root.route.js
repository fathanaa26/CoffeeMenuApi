import express from "express";

const router = express.Router();

let session;

router.get("/", (req, res) => {
  session = req.session;
  if (session.username) {
    res.send(
      `Welcome ${session.username}, please <a href='/logout'>click to logout</a>`
    );
  } else {
    res.send("please login");
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

router.post("/", (req, res) => {
  if (req.body.username === "admin" && req.body.pw === "1234") {
    session = req.session;
    session.username = req.body.username;
    res.send(
      `Welcome ${session.username}, please <a href='/logout'>click to logout</a>`
    );
  } else {
    res.send("invalid credential");
  }
});

export default router;
