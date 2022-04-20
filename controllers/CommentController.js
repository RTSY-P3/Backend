<<<<<<< .merge_file_ntjosm
const { Comments } = require('../models')

const GetComments = async (req, res) => {
  try {
    const comments = await Comments.findAll()
    res.send(comments)
=======
const { Post } = require('../models')

const GetComments = async (req, res) => {
  try {
    const posts = await Post.findAll()
    res.send(posts)
>>>>>>> .merge_file_WVUMH8
  } catch (error) {
    throw error
  }
}

const CreateComment = async (req, res) => {
  try {
<<<<<<< .merge_file_ntjosm
    const comment = await Comments.create({ ...req.body })
=======
    const comment = await Comment.create({ ...req.body })
>>>>>>> .merge_file_WVUMH8
    res.send(comment)
  } catch (error) {
    throw error
  }
}

<<<<<<< .merge_file_ntjosm

const DeleteComment = async (req, res) => {
  try {
    await Comments.destroy({ where: { id: req.params.comment_id } })
=======
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
>>>>>>> .merge_file_WVUMH8
    res.send({ msg: 'Comment Deleted', payload: req.params.comment_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetComments,
  CreateComment,
<<<<<<< .merge_file_ntjosm
=======
  UpdateComment,
>>>>>>> .merge_file_WVUMH8
  DeleteComment
}
