function adi (n1, mais_n2) {
    return n1 + mais_n2
}

function sub (n1, menos_n2) {
    return n1 - menos_n2
}

function mul (n1, vezes_n2) {
    return n1 * vezes_n2
}

function div (n1, dividido_por_n2) {
    return n1 / dividido_por_n2
}

console.log ("-------------- Teste de Operações / Calculadora --------------")

console.log(adi(15, 5));
console.log(sub(15, 5));
console.log(mul(15, 5));
console.log(div(15,5));
console.log(div(15, 0));

function quadradoDoNumero(n) {
    return mul(n, (n*1))
}

console.log(quadradoDoNumero(8))

function mediaDeTresNumeros(n1, n2, n3) {
    return div(adi(adi(n1, n2), n3), 3)
}

console.log(mediaDeTresNumeros(10, 20, 30))

function calculaPorcentagem(total, porcentagem) {
    return mul(total,div(porcentagem, 100)) + "%"
}

console.log(calculaPorcentagem(300,15))

function geradorDePorcentagem(primeiro, em_relacao_ao) {
    return div(mul(primeiro, 100), em_relacao_ao) + "%" 
}

console.log(geradorDePorcentagem(2,200))