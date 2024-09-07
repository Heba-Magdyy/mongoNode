const jwt = require("jsonwebtoken")

exports.chechAuth = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1] || "";
    if (!token) res.status(401).json({ message: "please log in" })
    const decoded = jwt.verify(token, process.env.JWT_KEY)
    if (!decoded) res.status(401).json({ message: "please log in" }) //index0 : bearer , index1: long hashed token

    req.user_id = decoded.user_id;
    next();
}