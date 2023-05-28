const router = require('express').Router();
const todoController = require("../controllers/todo.controller");
const auth = require("../middleware/auth");

router.get('/', auth('admin', 'user'), todoController.getList);
router.post('/', todoController.create);
router.patch('/:id', todoController.edit);
router.delete('/:id',  todoController.delete);

module.exports = router;
