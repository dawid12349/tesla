const maintance = async (req, res, next) => {
    if(req.method) {
        res.send("Server is under the maintance right now");
    }
}

module.exports = {maintance};