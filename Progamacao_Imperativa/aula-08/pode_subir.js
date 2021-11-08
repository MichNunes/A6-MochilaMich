function podeSubir(altura, vemAcompanhado){
    let podeSubir = false

if(altura <= 2.0 && altura >= 1.40){
        console.log("Acesso autorizado!")
        podeSubir = true
}


else if (altura <= 1.40 && altura >= 1.21 && vemAcompanhado == 1){
        console.log("Acesso autorizado!")
        podeSubir = true
}

else if (altura <= 1.20){
        console.log("Acesso negado!")
        podeSubir = false
}


return podeSubir
}

console.log(podeSubir(1.42, 0));