const { Router } = require('express');
const controller = require('./school_controller');

const router = Router();

router.get('/', controller.getSchools);
router.post('/', controller.addSchool);
router.get('/:id', controller.getSchoolById);
router.put('/:id', controller.updateSchool)
router.delete('/:id', controller.deleteSchool);


module.exports = router;