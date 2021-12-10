function Aluno(nome, quantidadeFaltas, notas) {
    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;
}

Aluno.prototype.calcularMedia = function calcularMedia() {
        return this.notas.reduce((acumulador, nota) => {   
        return acumulador += nota;
    }, 0) / this.notas.length;
}

Aluno.prototype.faltas = function faltas() {
    this.faltas++;
}

module.exports = Aluno;