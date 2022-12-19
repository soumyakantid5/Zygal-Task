const users = require("../users.json");

module.exports.login = async (req, res)=>{
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let email = req.body.email;
    let password = req.body.password;

    if (!email || email == "")
    return res
    .status(401)
    .send(
      "<h1>Enter Email</h1><a href='http://127.0.0.1:5500/Frontend/login.html'>Login Page</a>"
    );

    if (!password || password == "")
    return res
    .status(401)
    .send(
      "<h1>Enter Password</h1><a href='http://127.0.0.1:5500/Frontend/login.html'>Login Page</a>"
    );

    let flag = false;
    for (let el of users) {
      if (el.email_id == email && el.password == password) {
        flag = true;
        return res
          .status(200)
          .send(
            "<h1>Log In Successful</h1><a href='http://127.0.0.1:5500/Frontend/form.html'>Home Page 2</a>"
          );
      }
    }
    if (!flag)
      return res
        .status(401)
        .send(
          "<h1>Incorrect Credentials</h1><a href='http://127.0.0.1:5500/Frontend/login.html'>Login Page</a>"
        );
  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
};
