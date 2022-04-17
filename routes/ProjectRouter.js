const router = require('express').Router()
const controller = require('../controllers/ProjectController')
const middleware = require('../middleware')

router.get('/', controller.GetProject)
router.post('/', middleware.stripToken, middleware.verifyToken, controller.CreateProject)
router.put('/:project_id', middleware.stripToken, middleware.verifyToken, controller.UpdateProject)
router.delete('/:project_id', middleware.stripToken, middleware.verifyToken, controller.DeleteProject)

module.exports = router
