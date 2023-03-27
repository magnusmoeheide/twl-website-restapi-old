const { Router } = require('express');
const controller = require('./map_controller');

const router = Router();

router.get('/', controller.getMaps);
router.post('/', controller.addMap);
router.get('/:id', controller.getMapById);
router.put('/:id', controller.updateMap)
router.delete('/:id', controller.deleteMap);


module.exports = router;