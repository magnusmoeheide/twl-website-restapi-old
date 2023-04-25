const { Router } = require('express');
const controller = require('./wwd_controller');

const router = Router();

router.get('/', controller.getWhatWeDo);
router.put('/:id', controller.updateWwd);
router.get('/:id', controller.getWwdById);
router.post('/', controller.createWwd);
router.delete('/:id', controller.deleteWwd);

module.exports = router;