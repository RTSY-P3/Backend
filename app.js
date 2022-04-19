const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const AuthRouter = require('./routes/AuthRouter')
const ProjectRouter = require('./routes/ProjectRouter')
const CommentRouter = require('./routes/CommentRouter')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

app.use('/auth', AuthRouter)
app.use('/projects', ProjectRouter)
app.use('/projects/comments', CommentRouter)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get('*', (req, res) => {
      res.sendFile(path.join(`${__dirname}/client/build/index.html`))
    })
  }

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT} 🫠`))
