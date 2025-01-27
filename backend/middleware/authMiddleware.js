const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "No token" });
  }

  try {
    console.log(process.env.JWT_SECRET)
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    console.log("decoded",decoded)
    req.user = decoded.user;  
    next();  
  } catch (err) {
    return res.status(401).json({ message: "invalid token" });
  }
};

module.exports = verifyToken;
