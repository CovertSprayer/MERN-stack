var jwt = require('jsonwebtoken');



const isAuthenticate = (req, res, next) => {
    try {
        const token = req.cookie.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        console.log(verifyToken);
        if(verifyToken){
            next();
        }else{
            console.log('nothing here');
            res.status(401).json({error: 'unauthorized'});
        }         
    } catch (error) {
        res.status(401).json({error: "Unautherized No token provided"});
        console.log(err);
    }
}

module.exports = isAuthenticate;

