const { Router } = require('express');
const controller = require('./student_controller');

const router = Router();

router.get('/', controller.getStudents);
router.get('/class/:class_id', controller.getClassStudents);
router.post('/', controller.addStudent);
router.get('/:id', controller.getStudentById);
router.put('/:id', controller.updateStudent)
router.delete('/:id', controller.deleteStudent);


module.exports = router;