const { Router } = require('express');
const controller = require('./team_controller');

const router = Router();

router.get('/', controller.getTeam);
router.put('/:id', controller.updateTeam);
router.get('/:id', controller.getTeamById);
router.delete('/:id', controller.deleteTeam);
router.post('/', controller.createTeam);

module.exports = router;
