const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const AuthRouter = require('./routes/AuthRouter')
const ProjectRouter = require('./routes/ProjectRouter')
const CommentRouter = require('./routes/CommentRouter')
const app = express()


const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

app.use('/auth', AuthRouter)
app.use('/projects', ProjectRouter)
app.use('/projects/comments', CommentRouter)
app.use('/comments', CommentRouter)
  
app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
