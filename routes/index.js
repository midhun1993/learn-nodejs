const router = require("express").Router();

// Include routes
const todoRoutes = require('./todo.route');

router.use('/todos',todoRoutes);

module.exports = router;