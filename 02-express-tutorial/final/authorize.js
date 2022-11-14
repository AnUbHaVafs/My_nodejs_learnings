const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'john') {
        req.user = { name: 'john', age: 19 }
        next()
    }
    else {
        res.status(401).end("Unauthorize");
    }


}
module.exports = authorize;