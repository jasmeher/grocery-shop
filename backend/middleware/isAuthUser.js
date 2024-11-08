const sendError = require("../utils/sendError");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const isAuthUser = async (req, res, next) => {
  try {
    //Get Token From Cookies
    if (req.cookies.token) {
      //Verify Token
      const { userId } = jwt.verify(
        req.cookies.token,
        "b1906442fddf2acc8946462d25b5e1ecf5f1cd0dfa2c4ae6b667b87b4dc727c6a6fafeb0088b30f8164ad99ece472dfa0818a3dd92eff12f0c831ad0f7b46bb8"
      );
      //Get User From Token
      req.user = await userModel.findById(userId).select("-password");
      next();
    } else {
      sendError(res, 400, "");
    }
  } catch (error) {
    sendError(res, 400, "Token Not Found..!!");
  }
};

module.exports = isAuthUser;
