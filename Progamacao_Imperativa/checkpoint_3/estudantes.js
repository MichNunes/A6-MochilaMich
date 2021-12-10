const Aluno = require("./aluno.js");

let estudantes = [];
estudantes.push(new Aluno("Pablo Gonçalves", 5, [7, 8, 9]));
estudantes.push(new Aluno("Juliane Alves", 2, [7, 8, 9]));
estudantes.push(new Aluno("Rafael Vasconcelos", 1, [10, 8, 9]));
estudantes.push(new Aluno("Michel Nunes", 9, [4, 5, 6]));
estudantes.push(new Aluno("Glauber S. Silva", 3, [7, 8, 9]));
estudantes.push(new Aluno("Lucas Gabriel", 5, [7.5, 7.5, 7.5]));
estudantes.push(new Aluno("Josie Pereira", 0, [7, 8, 10]));

module.exports = estudantes;

console.log(estudantes)