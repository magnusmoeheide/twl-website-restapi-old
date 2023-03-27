const { Router } = require('express');
const controller = require('./class_controller');

const router = Router();

router.get('/', controller.getClasses);
router.get('/teacher/:teacher_id', controller.getTeacherClasses);
router.get('/school/:school_id', controller.getSchoolClasses);
router.post('/', controller.addClass);
router.get('/:id', controller.getClassById);
router.put('/:id', controller.updateClass)
router.delete('/:id', controller.deleteClass);


module.exports = router;