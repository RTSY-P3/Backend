const router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

router.get('/', controller.GetComment)
router.post('/', middleware.stripToken, middleware.verifyToken, controller.CreateComment)
router.put('/:comment_id', middleware.stripToken, middleware.verifyToken, controller.UpdateComment)
router.delete('/:comment_id', middleware.stripToken, middleware.verifyToken, controller.DeleteComment)

module.exports = router
