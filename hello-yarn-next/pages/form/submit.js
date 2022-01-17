const http = require('http')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(cors())
app.use('/static', express.static('public'))

app.listen(port, () => console.log('Server up and running on port' + {port}))
const db = require('../.././models')
const FormQuestions = db.FormQuestions

app.get('/', async (req, res) => {
    const questions = await FormQuestions.findAll({
        order: [["createdAt", "DESC"]]
    })

    res.json({questions: questions})
})