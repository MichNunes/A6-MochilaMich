function pessoa(nome, idade){            //criei a função
    return nome + " tem " + idade + " anos.";               //retornei o calculo
}

console.log(pessoa("Michel", 20));       //printei o retorno da função

function somar(x, y){
    return x + y;
}

let result = somar(15, 5)
console.log(result);