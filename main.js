const express = require("express");
const app = express();

const COOKIE_OPTION = {
  // maxAge: 10 * 60 * 1000,
  httpOnly: true,
  path: "/",
  sameSite: "none",
  secure: true,
};

app.get("/", (req, res) => {
  res.cookie("SquareMeter", "squaremeter_token_test", COOKIE_OPTION);
  return res.send("SQUAREMETRE");
});

app.listen(8002);
