const { Router } = require('express');
const controller = require('./article_sections_controller');

const router = Router();

router.get('/', controller.getArticleSections);
router.get('/:id', controller.getArticleSectionsById);
router.put('/:id', controller.updateArticleSectionsById);
router.delete('/:id', controller.deleteArticleSectionsById);
router.post('/', controller.createArticleSectionsById);

module.exports = router;