const { Router } = require('express');
const controller = require('./author_controller');

const router = Router();

router.get('/', controller.getAuthors);
router.get('/:id', controller.getAuthorById);

module.exports = router;