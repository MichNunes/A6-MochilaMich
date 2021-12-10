const Aluno = require("./aluno.js");

function Curso(nomeCurso, notaAprovacao, faltasMaxima, alunos) {
    this.nomeCurso = nomeCurso;
    this.notaAprovacao = notaAprovacao;
    this.faltasMaxima = faltasMaxima;
    this.alunos = alunos;
}

Curso.prototype.adicionaAluno = function adicionaAluno(nome, quantidadeFaltas, notas) {
    this.alunos.push(new Aluno(nome, quantidadeFaltas, notas));
};

Curso.prototype.ehAlunoAprovado = function ehAlunoAprovado(aluno) {
    let notaCorteFaltas = this.notaAprovacao + (this.notaAprovacao.toFixed(2) * 0.1);
    let media = aluno.calcularMedia();

    if (aluno.quantidadeFaltas < this.faltasMaxima && media >= this.notaAprovacao) {
        return true;
    } else if (aluno.quantidadeFaltas == this.faltasMaxima && media > notaCorteFaltas) {
        return true;
    } 

    return false;
}

Curso.prototype.resultadoAlunos = function resultadoAlunos() {
    let resultados = [];

    for (let i = 0; i < this.alunos.length; i++) {
        resultados.push({aluno: this.alunos[i].nome, aprovado: this.ehAlunoAprovado(this.alunos[i])});
    }

    return resultados;
}

module.exports = Curso;