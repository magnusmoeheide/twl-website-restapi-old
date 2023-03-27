const { Router } = require('express');
const controller = require('./teacher_controller');

const router = Router();

router.get('/', controller.getTeachers);
router.get('/school/:school_id', controller.getSchoolTeachers)
router.post('/', controller.addTeacher);
router.get('/:id', controller.getTeacherById);
router.put('/:id', controller.updateTeacher)
router.delete('/:id', controller.deleteTeacher);


module.exports = router;