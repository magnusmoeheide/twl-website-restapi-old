const { Router } = require('express');
const controller = require('./article_controller');

const router = Router();

router.get('/', controller.getArticles);
router.get('/newest', controller.getNewestArticle);
router.get('/:id', controller.getArticlesById);
router.get('/authors/:id', controller.getArticlesByAuthor);
router.get('/:id/sections', controller.getArticleSectionsByArticle);
router.get('/:id/withInstructor', controller.getArticleWithInstructor)

module.exports = router;