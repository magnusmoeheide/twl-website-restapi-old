const { Router } = require('express');
const controller = require('./wwd_sections_controller');

const router = Router();

router.get('/', controller.getWwdSections);
router.get('/:id', controller.getWwdSectionsById);
router.put('/:id', controller.updateWwdSectionsById);
router.post('/', controller.createWwdSectionsById);
router.delete('/:id', controller.deleteWwdSectionsById);

module.exports = router;
