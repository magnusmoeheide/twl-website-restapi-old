const { Router } = require('express');
const controller = require('./article_controller');

const router = Router();

router.get('/', controller.getArticles);
router.get('/newest', controller.getNewestArticle);
router.get('/byid/:id', controller.getArticlesById);
router.put('/:id', controller.updateArticles);
router.get('/:id/sections', controller.getArticleSectionsByArticle);
//router.get('/:id/withInstructor', controller.getArticleWithInstructor);
router.delete('/:id', controller.deleteArticles);
router.post('/', controller.createArticles);
router.get('/firstsection', controller.getArticlesWithFirstSection)
router.get('/authors', controller.getArticlesWithAuthors)
router.post('/createauthor', controller.createAuthorForArticle)
//router.delete('/deleteauthor', controller.deleteAuthorForArticle);

module.exports = router;