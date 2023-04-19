const { Router } = require('express');
const controller = require('./article_sections_controller');

const router = Router();

router.get('/', controller.getArticleSections);
router.get('/:id', controller.getArticleSectionsById);

module.exports = router;