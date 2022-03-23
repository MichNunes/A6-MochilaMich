var chessboard = document.getElementById('chessboard')

var siblings = Array.from(chessboard.children);

function filhosAnteriores(parameter) {
    var posiçãoElementoInicial = siblings[parameter]
    var arrayAux = [posiçãoElementoInicial]
    var n = -1;
    while ((parameter + n) > -1) {
    var auxfilhosAnteriores = siblings[(parameter + n)];
    arrayAux.push(auxfilhosAnteriores)
    n--}
    return arrayAux
}

function filhosPosteriores(parameter) {
        var posiçãoElementoInicial = siblings[parameter]
        var arrayAux = [
            posiçãoElementoInicial
        ]
        var n = 1;
        while ((parameter + n) < 64) {
        var auxfilhosAnteriores = siblings[(parameter + n)];
        arrayAux.push(auxfilhosAnteriores)
        n++}
        return arrayAux
}

function casasColunaAcima(parameter) {
    var casasAcimaArray = []
    if (!!parameter[(8 * 1)]){
        var aux1 = parameter[(8 * 1)];
        casasAcimaArray.push(aux1)} else {null} 
    if (!!parameter[(8 * 2)]){
        var aux2 = parameter[(8 * 2)];
        casasAcimaArray.push(aux2)} else {null}
    if (!!parameter[(8 * 3)]){
        var aux3 = parameter[(8 * 3)];
        casasAcimaArray.push(aux3)} else {null}
    if (!!parameter[(8 * 4)]){
        var aux4 = parameter[(8 * 4)];
        casasAcimaArray.push(aux4)} else {null}
    if (!!parameter[(8 * 5)]){
        var aux5 = parameter[(8 * 5)];
        casasAcimaArray.push(aux5)} else {null}
    if (!!parameter[(8 * 6)]){
        var aux6 = parameter[(8 * 6)];
        casasAcimaArray.push(aux6)} else {null}
    if (!!parameter[(8 * 7)]){
        var aux7 = parameter[(8 * 7)];
        casasAcimaArray.push(aux7)} else {null}
    return casasAcimaArray;
}

function casasColunaAbaixo(parameter) {
    var casasAbaixoArray = []
    if (!!parameter[(8 * 1)]){
        var aux1 = parameter[(8 * 1)];
        casasAbaixoArray.push(aux1)} else {null} 
    if (!!parameter[(8 * 2)]){
        var aux2 = parameter[(8 * 2)];
        casasAbaixoArray.push(aux2)} else {null}
    if (!!parameter[(8 * 3)]){
        var aux3 = parameter[(8 * 3)];
        casasAbaixoArray.push(aux3)} else {null}
    if (!!parameter[(8 * 4)]){
        var aux4 = parameter[(8 * 4)];
        casasAbaixoArray.push(aux4)} else {null}
    if (!!parameter[(8 * 5)]){
        var aux5 = parameter[(8 * 5)];
        casasAbaixoArray.push(aux5)} else {null}
    if (!!parameter[(8 * 6)]){
        var aux6 = parameter[(8 * 6)];
        casasAbaixoArray.push(aux6)} else {null}
    if (!!parameter[(8 * 7)]){
        var aux7 = parameter[(8 * 7)];
        casasAbaixoArray.push(aux7)} else {null}
    return casasAbaixoArray;
}

function casasDiagonalDireitaCima(parameter1) {
    var casasDiagonalDiretaCimaArray = []

    //parametro 1
    if (!!parameter1[(7 * 1)]) {
        if (parameter1[(7 * 1)].classList[2] == parameter1[0].classList[2]){
        var aux1 = parameter1[(7 * 1)];
        casasDiagonalDiretaCimaArray.push(aux1)} else {null}} else {null} 
    if (!!parameter1[(7 * 2)]) {
        if (parameter1[(7 * 2)].classList[2] == parameter1[0].classList[2]){
        var aux1 = parameter1[(7 * 2)];
        casasDiagonalDiretaCimaArray.push(aux1)} else {null}} else {null} 
    if (!!parameter1[(7 * 3)]) {
        if (parameter1[(7 * 3)].classList[2] == parameter1[0].classList[2]){
        var aux1 = parameter1[(7 * 3)];
        casasDiagonalDiretaCimaArray.push(aux1)} else {null}} else {null} 
    if (!!parameter1[(7 * 4)]) {
        if (parameter1[(7 * 4)].classList[2] == parameter1[0].classList[2]){
        var aux1 = parameter1[(7 * 4)];
        casasDiagonalDiretaCimaArray.push(aux1)} else {null}} else {null} 
    if (!!parameter1[(7 * 5)]) {
        if (parameter1[(7 * 5)].classList[2] == parameter1[0].classList[2]){
        var aux1 = parameter1[(7 * 5)];
        casasDiagonalDiretaCimaArray.push(aux1)} else {null}} else {null} 
    if (!!parameter1[(7 * 6)]) {
        if (parameter1[(7 * 6)].classList[2] == parameter1[0].classList[2]){
        var aux1 = parameter1[(7 * 6)];
        casasDiagonalDiretaCimaArray.push(aux1)} else {null}} else {null} 
    if (!!parameter1[(7 * 7)]) {
        if (parameter1[(7 * 7)].classList[2] == parameter1[0].classList[2]){
        var aux1 = parameter1[(7 * 7)];
        casasDiagonalDiretaCimaArray.push(aux1)} else {null}} else {null}
    return casasDiagonalDiretaCimaArray;
}

function casasDiagonalDireitaBaixo(parameter2) {
    var casasDiagonalDiretaBaixoArray = []
    //parametro 2
    if (!!parameter2[(7 * 1)]) {
        if (parameter2[(7 * 1)].classList[2] == parameter2[0].classList[2]){
        var aux1 = parameter2[(7 * 1)];
        casasDiagonalDiretaBaixoArray.push(aux1)} else {null}} else {null} 
    if (!!parameter2[(7 * 2)]) {
        if (parameter2[(7 * 2)].classList[2] == parameter2[0].classList[2]){
        var aux1 = parameter2[(7 * 2)];
        casasDiagonalDiretaBaixoArray.push(aux1)} else {null}} else {null} 
    if (!!parameter2[(7 * 3)]) {
        if (parameter2[(7 * 3)].classList[2] == parameter2[0].classList[2]){
        var aux1 = parameter2[(7 * 3)];
        casasDiagonalDiretaBaixoArray.push(aux1)} else {null}} else {null} 
    if (!!parameter2[(7 * 4)]) {
        if (parameter2[(7 * 4)].classList[2] == parameter2[0].classList[2]){
        var aux1 = parameter2[(7 * 4)];
        casasDiagonalDiretaBaixoArray.push(aux1)} else {null}} else {null} 
    if (!!parameter2[(7 * 5)]) {
        if (parameter2[(7 * 5)].classList[2] == parameter2[0].classList[2]){
        var aux1 = parameter2[(7 * 5)];
        casasDiagonalDiretaBaixoArray.push(aux1)} else {null}} else {null} 
    if (!!parameter2[(7 * 6)]) {
        if (parameter2[(7 * 6)].classList[2] == parameter2[0].classList[2]){
        var aux1 = parameter2[(7 * 6)];
        casasDiagonalDiretaBaixoArray.push(aux1)} else {null}} else {null} 
    if (!!parameter2[(7 * 7)]) {
        if (parameter2[(7 * 7)].classList[2] == parameter2[0].classList[2]){
        var aux1 = parameter2[(7 * 7)];
        casasDiagonalDiretaBaixoArray.push(aux1)} else {null}} else {null} 
    return casasDiagonalDiretaBaixoArray;
}

function casasDiagonalEsquerdaCima(parameter1) {
    var casasDiagonalEsquerdaCimaArray = []

    //parametro 1
    if (!!parameter1[(9 * 1)]) {
        if (parameter1[(9 * 1)].classList[3] == parameter1[0].classList[3]){
        var aux1 = parameter1[(9 * 1)];
        casasDiagonalEsquerdaCimaArray.push(aux1)} else {null}} else {null} 
    if (!!parameter1[(9 * 2)]) {
        if (parameter1[(9 * 2)].classList[3] == parameter1[0].classList[3]){
        var aux1 = parameter1[(9 * 2)];
        casasDiagonalEsquerdaCimaArray.push(aux1)} else {null}} else {null} 
    if (!!parameter1[(9 * 3)]) {
        if (parameter1[(9 * 3)].classList[3] == parameter1[0].classList[3]){
        var aux1 = parameter1[(9 * 3)];
        casasDiagonalEsquerdaCimaArray.push(aux1)} else {null}} else {null} 
    if (!!parameter1[(9 * 4)]) {
        if (parameter1[(9 * 4)].classList[3] == parameter1[0].classList[3]){
        var aux1 = parameter1[(9 * 4)];
        casasDiagonalEsquerdaCimaArray.push(aux1)} else {null}} else {null} 
    if (!!parameter1[(9 * 5)]) {
        if (parameter1[(9 * 5)].classList[3] == parameter1[0].classList[3]){
        var aux1 = parameter1[(9 * 5)];
        casasDiagonalEsquerdaCimaArray.push(aux1)} else {null}} else {null} 
    if (!!parameter1[(9 * 6)]) {
        if (parameter1[(9 * 6)].classList[3] == parameter1[0].classList[3]){
        var aux1 = parameter1[(9 * 6)];
        casasDiagonalEsquerdaCimaArray.push(aux1)} else {null}} else {null} 
    if (!!parameter1[(9 * 7)]) {
        if (parameter1[(9 * 7)].classList[3] == parameter1[0].classList[3]){
        var aux1 = parameter1[(9 * 7)];
        casasDiagonalEsquerdaCimaArray.push(aux1)} else {null}} else {null}
    return casasDiagonalEsquerdaCimaArray;
}

function casasDiagonalEsquerdaBaixo(parameter2) {
    var casasDiagonalEsquerdaBaixoArray = []

    //parametro 2
    if (!!parameter2[(9 * 1)]) {
        if (parameter2[(9 * 1)].classList[3] == parameter2[0].classList[3]){
        var aux1 = parameter2[(9 * 1)];
        casasDiagonalEsquerdaBaixoArray.push(aux1)} else {null}} else {null} 
    if (!!parameter2[(9 * 2)]) {
        if (parameter2[(9 * 2)].classList[3] == parameter2[0].classList[3]){
        var aux1 = parameter2[(9 * 2)];
        casasDiagonalEsquerdaBaixoArray.push(aux1)} else {null}} else {null} 
    if (!!parameter2[(9 * 3)]) {
        if (parameter2[(9 * 3)].classList[3] == parameter2[0].classList[3]){
        var aux1 = parameter2[(9 * 3)];
        casasDiagonalEsquerdaBaixoArray.push(aux1)} else {null}} else {null} 
    if (!!parameter2[(9 * 4)]) {
        if (parameter2[(9 * 4)].classList[3] == parameter2[0].classList[3]){
        var aux1 = parameter2[(9 * 4)];
        casasDiagonalEsquerdaBaixoArray.push(aux1)} else {null}} else {null} 
    if (!!parameter2[(9 * 5)]) {
        if (parameter2[(9 * 5)].classList[3] == parameter2[0].classList[3]){
        var aux1 = parameter2[(9 * 5)];
        casasDiagonalEsquerdaBaixoArray.push(aux1)} else {null}} else {null} 
    if (!!parameter2[(9 * 6)]) {
        if (parameter2[(9 * 6)].classList[3] == parameter2[0].classList[3]){
        var aux1 = parameter2[(9 * 6)];
        casasDiagonalEsquerdaBaixoArray.push(aux1)} else {null}} else {null} 
    if (!!parameter2[(9 * 7)]) {
        if (parameter2[(9 * 7)].classList[3] == parameter2[0].classList[3]){
        var aux1 = parameter2[(9 * 7)];
        casasDiagonalEsquerdaBaixoArray.push(aux1)} else {null}} else {null} 
    return casasDiagonalEsquerdaBaixoArray;
}

function casasLinhaEsquerda(parameter) {
    var casasEsquerdaArray = []
    if (!!parameter[1] && parameter[1].classList[1] == parameter[0].classList[1]){
        var aux1 = parameter[1];
        casasEsquerdaArray.push(aux1)} else {null} 
    if (!!parameter[2] && parameter[2].classList[1] == parameter[0].classList[1]){
        var aux2 = parameter[2];
        casasEsquerdaArray.push(aux2)} else {null}
    if (!!parameter[3] && parameter[3].classList[1] == parameter[0].classList[1]){
        var aux3 = parameter[3];
        casasEsquerdaArray.push(aux3)} else {null}
    if (!!parameter[4] && parameter[4].classList[1] == parameter[0].classList[1]){
        var aux4 = parameter[4];
        casasEsquerdaArray.push(aux4)} else {null}
    if (!!parameter[5] && parameter[5].classList[1] == parameter[0].classList[1]){
        var aux5 = parameter[5];
        casasEsquerdaArray.push(aux5)} else {null}
    if (!!parameter[6] && parameter[6].classList[1] == parameter[0].classList[1]){
        var aux6 = parameter[6];
        casasEsquerdaArray.push(aux6)} else {null}
    if (!!parameter[7] && parameter[7].classList[1] == parameter[0].classList[1]){
        var aux7 = parameter[7];
        casasEsquerdaArray.push(aux7)} else {null}
    return casasEsquerdaArray;
}

function casasLinhaDireita(parameter) {
    var casasDireitaArray = []
    if (!!parameter[1] && parameter[1].classList[1] == parameter[0].classList[1]){
        var aux1 = parameter[1];
        casasDireitaArray.push(aux1)} else {null} 
    if (!!parameter[2] && parameter[2].classList[1] == parameter[0].classList[1]){
        var aux2 = parameter[2];
        casasDireitaArray.push(aux2)} else {null}
    if (!!parameter[3] && parameter[3].classList[1] == parameter[0].classList[1]){
        var aux3 = parameter[3];
        casasDireitaArray.push(aux3)} else {null}
    if (!!parameter[4] && parameter[4].classList[1] == parameter[0].classList[1]){
        var aux4 = parameter[4];
        casasDireitaArray.push(aux4)} else {null}
    if (!!parameter[5] && parameter[5].classList[1] == parameter[0].classList[1]){
        var aux5 = parameter[5];
        casasDireitaArray.push(aux5)} else {null}
    if (!!parameter[6] && parameter[6].classList[1] == parameter[0].classList[1]){
        var aux6 = parameter[6];
        casasDireitaArray.push(aux6)} else {null}
    if (!!parameter[7] && parameter[7].classList[1] == parameter[0].classList[1]){
        var aux7 = parameter[7];
        casasDireitaArray.push(aux7)} else {null}
    return casasDireitaArray;
}

var posiçãoSelecionada;
var indexPosiçãoSelecionada

function elementoAnterior(x, y) {
    if (x != 0) {return y[(x - 1)]}
    else {return null}}

function game(elemento) {

    posiçãoSelecionada = elemento.path[0];
    indexPosiçãoSelecionada = siblings.indexOf(posiçãoSelecionada);
    
    var todosOsFilhosAnteriores = filhosAnteriores(indexPosiçãoSelecionada)
    var todosOsFilhosPosteriores = filhosPosteriores(indexPosiçãoSelecionada)
    
    if (posiçãoSelecionada.innerHTML == "♖") {
        
        var todasAsCasasDaColunaAcima = casasColunaAcima(todosOsFilhosAnteriores)
        todasAsCasasDaColunaAcima[0].classList.add('avaiableMovement');

        todasAsCasasDaColunaAcima.forEach(element => {

            var atualIndex = todasAsCasasDaColunaAcima.indexOf(element);
            var anterior = elementoAnterior(atualIndex, todasAsCasasDaColunaAcima)

            if (anterior != null && anterior.classList.contains('avaiableMovement')){
                element.classList.add('avaiableMovement')}

            // element.addEventListener('click', jogadaTorreBranca, {once : true})

            if (element.classList.contains('occupiedBlack')){
                element.style.backgroundColor = 'red'}



            if (anterior != null && anterior.classList.contains('occupiedBlack')){
                element.classList.remove('avaiableMovement')
            //     // element.removeEventListener('click', jogadaTorreBranca)
            }


            // else {
                // element.classList.remove('avaiableMovement');
                // element.removeEventListener('click', jogadaTorreBranca)
            // }

            console.log(anterior)
            // chessboard.addEventListener('click', game, {once : true})
            // vai estar dento da jogadaTorreBranca
            // console.log('bateu')
        });
       
    }
}

    // var todasAsCasasDaColunaAcima = casasColunaAcima(todosOsFilhosAnteriores)
    // console.log(todasAsCasasDaColunaAcima)
    // // torre
    // // rainha
    // // apenas uma casa: rei e peao = todasAsCasasDaColunaAcima[0]

    // var todasAsCasasDaColunaAbaixo = casasColunaAbaixo(todosOsFilhosPosteriores)
    // console.log(todasAsCasasDaColunaAbaixo)
    // // torre
    // // rainha
    // // apenas uma casa: rei e peao = todasAsCasasDaColunaAbaixo[0]

    // var todasAsCasasDaLinhaEsquerda = casasLinhaEsquerda(todosOsFilhosAnteriores)
    // console.log(todasAsCasasDaLinhaEsquerda);
    // // torre
    // // rainha
    // // apenas uma casa: rei = todasAsCasasDaLinhaEsquerda[0]

    // var todasAsCasasDaLinhaDireita = casasLinhaDireita(todosOsFilhosPosteriores)
    // console.log(todasAsCasasDaLinhaDireita)
    // // torre
    // // rainha
    // // apenas uma casa: rei = todasAsCasasDaLinhaDireita[0]

    // var todasAsCasasDiagonalDiretaCima = casasDiagonalDireitaCima(todosOsFilhosAnteriores)
    // console.log(todasAsCasasDiagonalDiretaCima)
    // // bispo
    // // rainha
    // // apenas uma casa: rei e peao = todasAsCasasDiagonalDiretaCima[0]

    // var todasAsCasasDiagonalDiretaBaixo = casasDiagonalDireitaBaixo(todosOsFilhosPosteriores)
    // console.log(todasAsCasasDiagonalDiretaBaixo)
    // // bispo
    // // rainha
    // // apenas uma casa: rei e peao = todasAsCasasDiagonalDiretaBaixo[0]

    // var todasAsCasasDiagonalEsquerdaCima = casasDiagonalEsquerdaCima(todosOsFilhosAnteriores)
    // console.log(todasAsCasasDiagonalEsquerdaCima)
    // // bispo
    // // rainha
    // // apenas uma casa: rei e peao = todasAsCasasDiagonalEsquerdaCima[0]

    // var todasAsCasasDiagonalEsquerdaBaixo = casasDiagonalEsquerdaBaixo(todosOsFilhosPosteriores)
    // console.log(todasAsCasasDiagonalEsquerdaBaixo)
    // // bispo
    // // rainha
    // // apenas uma casa: rei e peao = todasAsCasasDiagonalEsquerdaBaixo[0]

// }

chessboard.addEventListener('click', game, {once : true})

    



//     while (n < casasDiEs.length){

//         var elementoAtual = casasDiEs[n]
//         var elementoAnterior = casasDiEs[n - 1]

//         console.log(elementoAtual);
//         console.log(elementoAnterior);

//         if (elementoAtual.classList.contains('l1')){
//             elementoAtual.style.backgroundColor = 'yellow'
//             elementoAtual.classList.add('avaiableMovement')
//         }  else{null}

//         if (!!elementoAnterior) {

//         if (elementoAnterior.classList.contains('occupiedBlack') && elementoAtual.classList.contains('l1')) {
//             elementoAnterior.style.backgroundColor = 'red';
//             elementoAnterior.classList.add('finalMovement')
//             console.log(elementoAtual);} else {null}
        
//         if (elementoAnterior.classList.contains('finalMovement')){
//             elementoAtual.style.backgroundColor = 'green'
//             elementoAtual.classList.remove('avaiableMovement')
//             elementoAtual.classList.add('notPossibleMovement')
//         } else {null}

//         if (elementoAnterior.classList.contains('notPossibleMovement') && elementoAtual.classList.contains('l1')){
//             elementoAtual.style.backgroundColor = 'green'
//             elementoAtual.classList.remove('avaiableMovement')
//             elementoAtual.classList.add('notPossibleMovement')
//         } else {null}}

        

//         // if (elementoAnterior.classList.contains('occupiedBlack')){
                
//         // }

//         n++;
//     }}
// )