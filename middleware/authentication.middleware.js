const jwt = require('jsonwebtoken');
require("dotenv").config();

const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ success: false, error: 'Authentication token is missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ success: false, error: 'Authentication token is invalid' });
  }
};

module.exports = { authenticateUser };
