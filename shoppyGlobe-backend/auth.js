import jwt from 'jsonwebtoken';

const secretKey = 'secretKey';
//middleware for authentication 
export function authUser(req,res,next){
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({ error: "Authorization header missing" });
    }

    const token = authHeader.split(" ")[1];

    try{
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    }catch(err){
        res.status(403).json({ error: "Invalid or expired token" });
    }
}