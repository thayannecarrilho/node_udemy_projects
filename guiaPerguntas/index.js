const express = require("express")
const app = express()
const boyParser = require("body-parser")
const bodyParser = require("body-parser")
const connection = require("./database/database")
const Pergunta = require("./database/pergunta")


//DATABASE

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!")
    })
    .catch((msgErro) => {
        console.log("Erro")
    })


// EJS COMO VIEW ENGINE
app.set('view engine', 'ejs')

//ARQUIVOS FRONT-END
app.use(express.static('public'))

//BODY PARSER
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//ROTAS
app.get("/", (req, res) =>{
        Pergunta.findAll({raw: true}).then(perguntas => {
            res.render("index", {
                perguntas: perguntas
            })
        })
        //EQUIVALE A SELECT * PERGUNTAS
       
})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

app.post("/salvarPergunta", (req, res) => {

    var titulo = req.body.titulo 
    var descricao = req.body.descricao

        Pergunta.create({
            titulo: titulo,
            descricao: descricao
        }).then(() => {
            res.redirect("/")
        })
})

app.listen(8080, () => {
    console.log("App Rodando!")
})

