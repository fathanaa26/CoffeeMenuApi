import CoffeeList from "../models/root.model.js";

let session;

const landing = (req, res) => {
  session = req.session;
  if (session.username) {
    res.send(
      `Welcome ${session.username}, please <a href='/logout'>click to logout</a>`
    );
  } else {
    res.send("please login");
  }
};

const login = (req, res) => {
  if (req.body.username === "admin" && req.body.pw === "1234") {
    session = req.session;
    session.username = req.body.username;
    res.send(
      `Welcome ${session.username}, please <a href='/logout'>click to logout</a>`
    );
  } else {
    res.send("invalid credential");
  }
};

const logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};

export { landing, login, logout };
