// Exercício 3 

const listaDeTarefas = ["Limpar a casa", "Arrumar o quarto", "Varrer a calçada"]

const novaTarefa = process.argv[2]
process.argv[2] && listaDeTarefas.push(novaTarefa)

novaTarefa && console.log("Tarefa adicionada com sucesso!")
console.log("Tarefas:", listaDeTarefas)