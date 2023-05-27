module.exports = {
    getList: function(req, res, next) {
        res.send("list");
    },
    create: function(req, res, next) {
        res.send("created");
    },
    delete: function(req, res, next) {
        res.send("deleted");
    },
    edit: function(req, res, next) {
        res.send("edit completed");
    }
}