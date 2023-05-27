const router = require('express').Router();
const todoController = require("../controllers/todo.controller");

router.get('/',todoController.getList);
router.post('/', todoController.create);
router.patch('/:id', todoController.edit);
router.delete('/:id',  todoController.delete);

module.exports = router;
