const { Router } = require('express');
const controller = require('./grade_controller');

const router = Router();

router.get('/', controller.getGrades);
router.get('/school/:school_id', controller.getSchoolGrades);
router.post('/', controller.addGrade);
router.get('/:id', controller.getGradeById);
router.put('/:id', controller.updateGrade)
router.delete('/:id', controller.deleteGrade);


module.exports = router;