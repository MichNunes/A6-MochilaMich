function usarMicroondas(prato, segundos){
    let usarMicroondas = false

if(prato == "Pipoca" && segundos <= 20 && segundos >= 10){
        console.log("Prato pronto, bom apetite!")
        usarMicroondas = true
}

else if(prato == "Macarrão" && segundos <= 16 && segundos >= 8){
    console.log("Prato pronto, bom apetite!")
    usarMicroondas = true
}

else if(prato == "Carne" && segundos <= 30 && segundos >= 15){
    console.log("Prato pronto, bom apetite!")
    usarMicroondas = true
}

else if(prato == "Feijão" && segundos <= 24 && segundos >= 12){
    console.log("Prato pronto, bom apetite!")
    usarMicroondas = true
}

else if(prato == "Brigadeiro" && segundos <= 16 && segundos >= 8){
    console.log("Prato pronto, bom apetite!")
    usarMicroondas = true
}

else if(prato == "Pipoca" && segundos <= 30 && segundos >= 20){
    console.log("A sua comida queimou! Na próxima vez, faça Pipoca entre 10 e 20 segundos.")
    usarMicroondas = true
}

else if(prato == "Macarrão" && segundos <= 24 && segundos >= 16){
console.log("A sua comida queimou! Na próxima vez, faça Macarrão entre 8 e 16 segundos.")
usarMicroondas = true
}

else if(prato == "Carne" && segundos <= 45 && segundos >= 30){
console.log("A sua comida queimou! Na próxima vez, faça Carne entre 15 e 30 segundos.")
usarMicroondas = true
}

else if(prato == "Feijão" && segundos <= 36 && segundos >= 24){
console.log("A sua comida queimou! Na próxima vez, faça Feijão entre 12 e 24 segundos.")
usarMicroondas = true
}

else if(prato == "Brigadeiro" && segundos <= 24 && segundos >= 16){
console.log("A sua comida queimou! Na próxima vez, faça Brigadeiro entre 8 e 16 segundos.")
usarMicroondas = true
}

else if(prato == "Pipoca" && segundos <= 9){
    console.log("Tempo insuficiente! O tempo correto para fazer Pipoca é entre 10 e 20 segundos.")
    usarMicroondas = false
}

else if(prato == "Macarrão" && segundos <= 7){
    console.log("Tempo insuficiente! O tempo correto para fazer Macarrão é entre 8 e 16 segundos.")
    usarMicroondas = false
}

else if(prato == "Carne" && segundos <= 14){
    console.log("Tempo insuficiente! O tempo correto para fazer Carne é entre 15 e 30 segundos.")
    usarMicroondas = false
}

else if(prato == "Feijão" && segundos <= 11){
    console.log("Tempo insuficiente! O tempo correto para fazer Feijão é entre 12 e 24 segundos.")
    usarMicroondas = false
}

else if(prato == "Brigadeiro" && segundos <= 7){
    console.log("Tempo insuficiente! O tempo correto para fazer Brigadeiro é entre 8 e 16 segundos.")
    usarMicroondas = false
}

else if(prato == "Pipoca" && segundos >= 31){
    console.log("Kabummm! Você conseguiu explodir o microondas :O")
    usarMicroondas = true
}

else if(prato == "Macarrão" && segundos >= 25){
    console.log("Kabummm! Você conseguiu explodir o microondas :O")
    usarMicroondas = true
}

else if(prato == "Carne" && segundos >= 46){
    console.log("Kabummm! Você conseguiu explodir o microondas :O")
    usarMicroondas = true
}

else if(prato == "Feijão" && segundos >= 37){
    console.log("Kabummm! Você conseguiu explodir o microondas :O")
    usarMicroondas = true
}

else if(prato == "Brigadeiro" && segundos >= 25){
    console.log("Kabummm! Você conseguiu explodir o microondas :O")
    usarMicroondas = true
}

else{
    console.log("Prato inexistente!")
}

return usarMicroondas

}

// PARA UTILIZAR O CÓDIGO:

// console.log(usarMicroondas("Prato", segundos));

// TEMPO CORRETO PARA CADA PRATO:

// "Pipoca" - ENTRE 10 E 20 SEGUNDOS
// "Macarrão" - ENTRE 8 E 16 SEGUNDOS
// "Carne" - ENTRE 15 E 30 SEGUNDOS
// "Feijão" - ENTRE 12 E 24 SEGUNDOS
// "Brigadeiro" - ENTRE 8 E 16 SEGUNDOS

console.log(usarMicroondas("Pipoca", 12));