// AULA

let bemVindo = () => 'Olá Mundo!';

let dobro = numero => numero*2;

let soma = (a, b) => a + b;

let horaAtual = () => {
    let data = new Date()
    return data.getHours() + ':' + data.getMinutes();
}

console.log(bemVindo());
console.log(dobro(8));
console.log(soma(1, 2));
console.log(horaAtual())

setTimeout(function(){
    console.log('Olá Mundo!')
}, 1000)

function nomeCompleto (nome, sobrenome) {
    return nome + ' ' + sobrenome;
};

function bomDia(nome, sobrenome, callback) {
    return 'Olá,' + ' ' + callback(nome, sobrenome);
}

console.log(bomDia('Michel', 'Nunes', nomeCompleto))

// MESA DE TRABALHO

let FizzBuzz = (x, y) => {
    for (let i = 1; i <= 100; i++){

        if (i % x == 0 && i % y == 0) { 
            console.log("FizzBuzz")
        }

        else if (i % x == 0) { 
            console.log("Buzz")
        }

        else if (i % y == 0) { 
            console.log("Fizz")
        }

        else{ 
            console.log(i)
        }
    }
}

(FizzBuzz(4, 3))

