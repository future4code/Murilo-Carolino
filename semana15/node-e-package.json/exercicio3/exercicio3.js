// Exercício 3 

const listaDeTarefas = ["Limpar a casa", "Arrumar o quarto", "Varrer a calçada"]

const novaTarefa = process.argv[2]
process.argv[2] && listaDeTarefas.push(novaTarefa)

novaTarefa && console.log("Tarefa adicionada com sucesso!")
console.log("Tarefas:", listaDeTarefas)

// Persistência de Dados

const fs = require("fs")

const listaDeTarefasPersistente = JSON.parse(fs.readFileSync('../data/tasks.json'))

const novaTarefaPersistente = process.argv[2]
novaTarefaPersistente && listaDeTarefasPersistente.push(novaTarefaPersistente)

fs.writeFileSync('../data/tasks.json', JSON.stringify(listaDeTarefasPersistente, null, '\t'))

console.log("Tarefas:", listaDeTarefasPersistente)