
const { Comments } = require('../models')
const { Post } = require('../models')

const GetComments = async (req, res) => {
  try {
    const comments = await Comments.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const CreateComment = async (req, res) => {
  try {

    const comment = await Comments.create({ ...req.body })

    res.send(comment)
  } catch (error) {
    throw error
  }
}




const UpdateComment = async (req, res) => {
  try {
    const comment = await Comment.update(
      { ...req.body },
      { where: { id: req.params.comment_id }, returning: true }
    )
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    await Comment.destroy({ where: { id: req.params.comment_id } })
    res.send({ msg: 'Comment Deleted', payload: req.params.comment_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetComments,
  CreateComment,
  UpdateComment,
  DeleteComment
}
