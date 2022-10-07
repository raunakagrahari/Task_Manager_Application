const express = require('express');
const router = express.Router();
const controller = require('../controllers/taskController')


router.route('/').get(controller.getAllTasks).post(controller.createTask);
router.route('/:id').get(controller.getTask).patch(controller.updateTask).delete(controller.deleteTask);


module.exports = router;