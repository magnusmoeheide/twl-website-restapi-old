const { Router } = require('express');
const controller = require('./admin_controller');

const router = Router();

router.get('/', controller.getAdmins);
router.post('/', controller.addAdmin);
router.get('/:id', controller.getAdminById);
router.put('/:id', controller.updateAdmin)
router.delete('/:id', controller.deleteAdmin);


module.exports = router;