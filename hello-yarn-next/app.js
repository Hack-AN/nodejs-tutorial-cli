const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const port = 8000;

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(cors());
app.use('/static', express.static('public'))

app.listen(port, () => console.log('Server up and running on port' + port));

const db = require('./models');
const FormQuestionOptions = db.FormQuestionOptions
const FormQuestions = db.FormQuestions

app.post("/route", async (req, res) => {
  
    /*
    const questions = await FormQuestions.findAll({
        order: [["createdAt", "DESC"]]
    })

    res.json({questions: questions})
    */

    //console.log(req.body)
    //res.json({body: req.body})
    /*
    const result = await FormQuestions.create({
      googleFormId: Math.random,//question.uuid,
      title: "test_title",//questions.title,
      questionType: "test_type",//question.questionType,
      description: "desc"//question.description
  })
    res.json({result: result})
    const questions = req.body.questions
    */
    const arr_q = Array.from(req.body.data)
    await arr_q.forEach(async(question, index) => {
      const result = await FormQuestions.create({
          googleFormId: question.uuid,
          title: question.title,
          questionType: question.questionType,
          description: question.description
      })
      
      //res.json({question: result})

      const arr_o = Array.from(question.selectOptions)
      await arr_o.forEach(async(option, index) => {
        const _result = await FormQuestionOptions.create({
          questionId: question.uuid,
          optionId: option.uuid,
          title: option.title,
          description: option.description
        })
        //res.json({option: _result})
        //console.log("option: " + _result)
      })
      /*
      const Qs = await FormQuestions.findAll({
        order: [["createdAt", "DESC"]]
      })
      const Os = await FormQuestionOptions.findAll({
        order: [["createdAt", "DESC"]]
      })
      res.json({Questions: Qs, Options: Os})*/
  })
  
  //res.json({body: req.body.data})
  //res.send(req.body)
})

