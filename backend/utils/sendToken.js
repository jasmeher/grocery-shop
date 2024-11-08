const jwt = require("jsonwebtoken");

const sendToken = async (userId) => {
  return await jwt.sign(
    { userId: userId },
    "b1906442fddf2acc8946462d25b5e1ecf5f1cd0dfa2c4ae6b667b87b4dc727c6a6fafeb0088b30f8164ad99ece472dfa0818a3dd92eff12f0c831ad0f7b46bb8",
    {
      expiresIn: `5d`,
    }
  );
};

const sendCookie = async (res, statusCode, token, user, message) => {
  const options = {
    expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  res.cookie("token", token, options);
  res.status(statusCode).json({
    success: true,
    message,
    user,
    token,
  });
};

module.exports = { sendToken, sendCookie };
