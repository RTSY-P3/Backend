const { Project } = require('../models')
const { Comments } = require('../models')
const { User } = require('../models')

const GetProject = async (req, res) => {
  try {
    const projects = await Project.findAll({ include: [{model: Comments }]})
    res.send(projects)
  } catch (error) {
    throw error
  }
}

const CreateProject = async (req, res) => {
  try {
    const project = await Project.create({ ...req.body })
    res.send(project)
  } catch (error) {
    throw error
  }
}

const UpdateProject = async (req, res) => {
  try {
    const project = await Project.update(
      { ...req.body },
      { where: { id: req.params.project_id }, returning: true }
    )
    res.send(project)
  } catch (error) {
    throw error
  }
}

const DeleteProject = async (req, res) => {
  try {
    await Project.destroy({ where: { id: req.params.project_id } })
    res.send({ msg: 'Project Deleted', payload: req.params.project_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

const getProjectsAndComments = async (req, res) => {
  try {
    const projectsAndComments = await Project.findAll({
      include: [{model: Comments }]
    })
    res.send(projectsAndComments)
  } catch (error) {
    throw error
  }
}

const getYourProjects = async (req, res) => {
  try { 
    const getYourProjects = await User.findByPk(req.params.user_id, {
      include: [{ model: Project, as: 'Projects'}, {model: Comments, as: 'Comments'}]})
    res.send(getYourProjects)
  } catch (error) {
    throw error 
  }
}
module.exports = {
  GetProject,
  CreateProject,
  UpdateProject,
  DeleteProject,
  getProjectsAndComments,
  getYourProjects
}


