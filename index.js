import express from "express"
import db from "./repository/index.js"

const app = express()
app.use(express.json())

//c
app.post("api/v1/tarefa", (req, res) => {
    const {id, descricao, data, concluido} = req.body

    if(!id || descricao || data || typeof concluido !== "boolean") {
        res.status(404).send({error: "Precisa preencher todos  os campos"})
    }
    return
})

// const tarefa = db.find (t => t.id == id)

// if (tarefa){
//     res.status(400).send({error: "Esse ID já foi cadastrado"})
//     return
// }

// db.push({id, descricao, data, concluido})
// res.status(201).send({message: "Tarefa criada com sucesso"})

//r
app.get("/api/v1/tarefa", (req, res) => {
     res.status(200).send(pendentes)

})
//r2
app.get("/api/v1/tarefa/pendentes", (req, res) => {
    const pendentes = db.filter(t => t.concluido == false)
})

//r3
app.get("/api/v1/tarefa/id", (req, res) => {
    const {id} = req.params
    const tarefa = db.find(t => t.id == id)

    if (!tarefa) {
        res.status(404).send({error: "Tarefa não encontrada"})
        return
    }

    res.status(200).send(tarefa)
})

//u
app.put("/api/v1/tarefa/id", (req, res) => {
    const {id} = req.params
    const tarefa = db.find(t => t.id == id)

    if (!tarefa) {
        res.status(404).send({error: "Tarefa não encontrada"})
        return
    }

    res.status(200).send(tarefa)

    const {descricao, data, concluido} = req.body





app.listen(3000, () => {
    console.log("Servidor tudo ok")
})