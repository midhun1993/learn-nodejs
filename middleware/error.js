module.exports = function( ...privilegedUsers ) {
    return function (req, res, next) {
       if(res.error){
            res.status(500).json({message: res.error.message}).send();
       }
        next();
    }
}