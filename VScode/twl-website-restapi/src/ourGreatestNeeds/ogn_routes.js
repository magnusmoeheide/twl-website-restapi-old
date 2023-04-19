const { Router } = require('express');
const controller = require('./ogn_controller');

const router = Router();

router.get('/', controller.getOurGreatestNeeds);
router.put('/:id', controller.updateOurGreatestNeeds)

module.exports = router;