const express = require("express")
const app = express()

// EJS COMO VIEW ENGINE
app.set('view engine', 'ejs')

//ARQUIVOS FRONT-END
app.use(express.static('public'))


app.get("/", (req, res) =>{
       res.render("index", {
    })
})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

app.post("/salvarPergunta", (req, res) => {
    res.send("formulario recebido")

})

app.listen(8080, () => {
    console.log("App Rodando!")
})

