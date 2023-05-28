module.exports = function( ...privilegedUsers ) {
    return function (req, res, next) {
        //Todo: JWT token validation
        console.log(privilegedUsers);
        next();
    }
}