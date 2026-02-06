const jwt = require("jsonwebtoken")

const verfiyAdmin = (req, res, next)=> {
     const authHeader = req.headers.authorization || req.headers.Authorization;
     if (!authHeader) return res.sendStatus(401);

     const token = authHeader.replace(/^Bearer\s+/i, "");
     if (!token) return res.sendStatus(401);

     try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          req.user = decoded;
          next();
     } catch (err) {
          res.sendStatus(403);
     }
}
module.exports = verfiyAdmin