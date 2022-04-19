const router = require('express').Router()
const controller = require('../controllers/ProjectController')
const middleware = require('../middleware')

router.get('/', controller.GetProject)
router.get('/myprojects/:user_id', controller.getYourProjects)
router.post('/', middleware.stripToken, middleware.verifyToken, controller.CreateProject)
router.put('/:project_id', middleware.stripToken, middleware.verifyToken, controller.UpdateProject)
router.delete('/:project_id', middleware.stripToken, middleware.verifyToken, controller.DeleteProject)
router.get('/allcomments', middleware.stripToken, middleware.verifyToken, controller.getProjectsAndComments)

module.exports = router
