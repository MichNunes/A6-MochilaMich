var tabuleiro = document.getElementById('chessboard');
var posicao = Array.from(tabuleiro.children);
var pecasBrancas = ['♖', '♘', '♗', '♔', '♕', '♙'];
var pecasPretas = ['♜', '♞', '♝', '♛', '♚', '♟'];
var brancosFora = [];
var pretosFora = [];
var reiEmCheque = [];
var chequeRei = false;
var dragged;

//linha8
var a8 = posicao[0];
var b8 = posicao[1];
var c8 = posicao[2];
var d8 = posicao[3];
var e8 = posicao[4];
var f8 = posicao[5];
var g8 = posicao[6];
var h8 = posicao[7];
//linha7
var a7 = posicao[8];
var b7 = posicao[9];
var c7 = posicao[10];
var d7 = posicao[11];
var e7 = posicao[12];
var f7 = posicao[13];
var g7 = posicao[14];
var h7 = posicao[15];
// linha6
var a6 = posicao[16];
var b6 = posicao[17];
var c6 = posicao[18];
var d6 = posicao[19];
var e6 = posicao[20];
var f6 = posicao[21];
var g6 = posicao[22];
var h6 = posicao[23];
//linha5
var a5 = posicao[24];
var b5 = posicao[25];
var c5 = posicao[26];
var d5 = posicao[27];
var e5 = posicao[28];
var f5 = posicao[29];
var g5 = posicao[30];
var h5 = posicao[31];
//linha4
var a4 = posicao[32];
var b4 = posicao[33];
var c4 = posicao[34];
var d4 = posicao[35];
var e4 = posicao[36];
var f4 = posicao[37];
var g4 = posicao[38];
var h4 = posicao[39];
//linha3
var a3 = posicao[40];
var b3 = posicao[41];
var c3 = posicao[42];
var d3 = posicao[43];
var e3 = posicao[44];
var f3 = posicao[45];
var g3 = posicao[46];
var h3 = posicao[47];
//linha2
var a2 = posicao[48];
var b2 = posicao[49];
var c2 = posicao[50];
var d2 = posicao[51];
var e2 = posicao[52];
var f2 = posicao[53];
var g2 = posicao[54];
var h2 = posicao[55];
//linha1
var a1 = posicao[56];
var b1 = posicao[57];
var c1 = posicao[58];
var d1 = posicao[59];
var e1 = posicao[60];
var f1 = posicao[61];
var g1 = posicao[62];
var h1 = posicao[63];

function whiteView() {
    a8.innerHTML = '♜'
    b8.innerHTML = '♞'
    c8.innerHTML = '♝'
    d8.innerHTML = '♛'
    e8.innerHTML = '♚'
    f8.innerHTML = '♝'
    g8.innerHTML = '♞'
    h8.innerHTML = '♜'
    a7.innerHTML = '♟'
    b7.innerHTML = '♟'
    c6.innerHTML = '♟'
    d5.innerHTML = '♟'
    f3.innerHTML = '♟'
    f7.innerHTML = '♟'
    g7.innerHTML = '♟'
    h7.innerHTML = '♟'

    d4.innerHTML = '♖'
    b1.innerHTML = '♘'
    c1.innerHTML = '♗'
    d1.innerHTML = '♔'
    e1.innerHTML = '♕'
    f1.innerHTML = '♗'
    g1.innerHTML = '♘'
    h1.innerHTML = '♖'
    a2.innerHTML = '♙'
    b2.innerHTML = '♙'
    c2.innerHTML = '♙'
    d2.innerHTML = '♙'
    e2.innerHTML = '♙'
    f2.innerHTML = '♙'
    g2.innerHTML = '♙'
    h2.innerHTML = '♙'
}
whiteView()

function organizarClasses() {
    posicao.forEach(element => {
    var $ = element.innerText
    var $$ = element.classList
    if ($ == '♜' || $ == "♞" || $ == "♝" || $ == "♛" || $ == "♚" || $ == "♟") {
        $$.add('occupiedBlack')} else {$$.remove('occupiedBlack')}
    if ($ == '♖' || $ == "♘" || $ == "♗" || $ == "♕" || $ == "♔" || $ == "♙") {
        $$.add('occupiedWhite')} else {$$.remove('occupiedWhite')}
    if ($$.contains("reiBranco")) {
        $$.remove('reiBranco')} else {null}
    if ($$.contains("reiPreto")) {
        $$.remove('reiPreto')} else {null}
    if ($ == "♔") {
        $$.add('reiBranco')} else {null}
    if ($ == "♚") {
        $$.add('reiPreto')} else {null}
})};
organizarClasses()

function turnos() {

    if (chessboard.classList.contains('turnoBranco')){
        posicao.forEach(element => {
            var aux = element
            if (aux.innerText == '♖' || aux.innerText == "♘" || aux.innerText == "♗" || aux.innerText == "♕" || aux.innerText == "♔" || aux.innerText == "♙") {
                aux.draggable = true} else {aux.draggable = false}})
    }
    
    if (chessboard.classList.contains('turnoPreto')){
        posicao.forEach(element => {
            var aux = element
            if (aux.innerText == '♜' || aux.innerText == "♞" || aux.innerText == "♝" || aux.innerText == "♛" || aux.innerText == "♚" || aux.innerText == "♟") {
                aux.draggable = true} else {aux.draggable = false}})
    }
}
turnos()

function removerClassList() {

    posicao.forEach(element => {
        element.classList.remove('avaiableMovement');
        element.classList.remove('onFocus')
        element.classList.remove('target')
        element.classList.remove('NA')
        element.classList.remove('LA')
    });
}

function elementoAnterior(x, y) {
    if (x != 0) {return y[(x - 1)]}
    else {return null}
}

function filhosAnteriores(parameter) {
    var posiçãoElementoInicial = posicao[parameter]
    var arrayAux = [posiçãoElementoInicial]
    var n = -1;
    while ((parameter + n) > -1) {
    var auxfilhosAnteriores = posicao[(parameter + n)];
    arrayAux.push(auxfilhosAnteriores)
    n--}
    return arrayAux
}

function filhosPosteriores(parameter) {
        var posiçãoElementoInicial = posicao[parameter]
        var arrayAux = [
            posiçãoElementoInicial
        ]
        var n = 1;
        while ((parameter + n) < 64) {
        var auxfilhosAnteriores = posicao[(parameter + n)];
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

function casasDiagonalDireitaCima(parameter1) {
    var casasDiagonalDiretaCimaArray = []

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

function torreBranca(parameter) {

    reiEmCheque = [];
    var posiçãoSelecionada = parameter.path[0];
    var indexPosiçãoSelecionada = posicao.indexOf(posiçãoSelecionada);
    
    var todosOsFilhosAnteriores = filhosAnteriores(indexPosiçãoSelecionada)
    var todosOsFilhosPosteriores = filhosPosteriores(indexPosiçãoSelecionada)

    posiçãoSelecionada.classList.add('onFocus')

    var todasAsCasasDaColunaAcima = casasColunaAcima(todosOsFilhosAnteriores)
    var todasAsCasasDaColunaAbaixo = casasColunaAbaixo(todosOsFilhosPosteriores)
    var todasAsCasasDaLinhaEsquerda = casasLinhaEsquerda(todosOsFilhosAnteriores)
    var todasAsCasasDaLinhaDireita = casasLinhaDireita(todosOsFilhosPosteriores)

    todasAsCasasDaColunaAcima.forEach(element => {

        var atualIndex = todasAsCasasDaColunaAcima.indexOf(element);
        var anterior = elementoAnterior(atualIndex, todasAsCasasDaColunaAcima);
        element.classList.add('avaiableMovement')

        if (element.classList.contains('occupiedBlack')) {
            element.classList.add('target')
            element.classList.add('LA')
        }

        if (element.classList.contains('occupiedWhite')) {
            element.classList.remove('avaiableMovement')
            element.classList.add('LA')
        }

        if (anterior != null && anterior.classList.contains('LA')) {
            element.classList.remove('target')
            element.classList.remove('avaiableMovement');
            element.classList.add('NA');}

        if (anterior != null && anterior.classList.contains('NA')) {
            element.classList.remove('target')
            element.classList.remove('avaiableMovement');
            element.classList.add('NA');}

        if (element.classList.contains('avaiableMovement')) {
            reiEmCheque.push(element)
        }
    })

    todasAsCasasDaColunaAbaixo.forEach(element => {
    
        var atualIndex = todasAsCasasDaColunaAbaixo.indexOf(element);
        var anterior = elementoAnterior(atualIndex, todasAsCasasDaColunaAbaixo);
        element.classList.add('avaiableMovement')

        if (element.classList.contains('occupiedBlack')) {
            element.classList.add('target')
            element.classList.add('LA')
        }

        if (element.classList.contains('occupiedWhite')) {
            element.classList.remove('avaiableMovement')
            element.classList.add('LA')
        }

        if (anterior != null && anterior.classList.contains('LA')) {
            element.classList.remove('target')
            element.classList.remove('avaiableMovement');
            element.classList.add('NA');}

        if (anterior != null && anterior.classList.contains('NA')) {
            element.classList.remove('target')
            element.classList.remove('avaiableMovement');
            element.classList.add('NA');}

            if (element.classList.contains('avaiableMovement')) {
                reiEmCheque.push(element)
            }
    })

    todasAsCasasDaLinhaEsquerda.forEach(element => {
        var atualIndex = todasAsCasasDaLinhaEsquerda.indexOf(element);
        var anterior = elementoAnterior(atualIndex, todasAsCasasDaLinhaEsquerda);
        element.classList.add('avaiableMovement')

        if (element.classList.contains('occupiedBlack')) {
            element.classList.add('target')
            element.classList.add('LA')
        }

        if (element.classList.contains('occupiedWhite')) {
            element.classList.remove('avaiableMovement')
            element.classList.add('LA')
        }

        if (anterior != null && anterior.classList.contains('LA')) {
            element.classList.remove('target')
            element.classList.remove('avaiableMovement');
            element.classList.add('NA');}

        if (anterior != null && anterior.classList.contains('NA')) {
            element.classList.remove('target')
            element.classList.remove('avaiableMovement');
            element.classList.add('NA');}

            if (element.classList.contains('avaiableMovement')) {
                reiEmCheque.push(element)
            }
    })

    todasAsCasasDaLinhaDireita.forEach(element => {
        var atualIndex = todasAsCasasDaLinhaDireita.indexOf(element);
        var anterior = elementoAnterior(atualIndex, todasAsCasasDaLinhaDireita);
        element.classList.add('avaiableMovement')

        if (element.classList.contains('occupiedBlack')) {
            element.classList.add('target')
            element.classList.add('LA')
        }

        if (element.classList.contains('occupiedWhite')) {
            element.classList.remove('avaiableMovement')
            element.classList.add('LA')
        }

        if (anterior != null && anterior.classList.contains('LA')) {
            element.classList.remove('target')
            element.classList.remove('avaiableMovement');
            element.classList.add('NA');}

        if (anterior != null && anterior.classList.contains('NA')) {
            element.classList.remove('target')
            element.classList.remove('avaiableMovement');
            element.classList.add('NA');}

            if (element.classList.contains('avaiableMovement')) {
                reiEmCheque.push(element)
            }
    })
    return reiEmCheque;
}

function bispoBranco(parameter) {

    reiEmCheque = [];
    var posiçãoSelecionada = parameter.path[0];
    var indexPosiçãoSelecionada = posicao.indexOf(posiçãoSelecionada);
    
    var todosOsFilhosAnteriores = filhosAnteriores(indexPosiçãoSelecionada)
    var todosOsFilhosPosteriores = filhosPosteriores(indexPosiçãoSelecionada)

    posiçãoSelecionada.classList.add('onFocus')
    
        var todasAsCasasDaDDC = casasDiagonalDireitaCima(todosOsFilhosAnteriores)
        var todasAsCasasDaDDB = casasDiagonalDireitaBaixo(todosOsFilhosPosteriores)
        var todasAsCasasDEC = casasDiagonalEsquerdaCima(todosOsFilhosAnteriores)
        var todasAsCasasDEB = casasDiagonalEsquerdaBaixo(todosOsFilhosPosteriores)
    
        todasAsCasasDaDDC.forEach(element => {
    
                var atualIndex = todasAsCasasDaDDC.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDaDDC);
                element.classList.add('avaiableMovement')
        
                if (element.classList.contains('occupiedBlack')) {
                    element.classList.add('target')
                    element.classList.add('LA')
                }
        
                if (element.classList.contains('occupiedWhite')) {
                    element.classList.remove('avaiableMovement')
                    element.classList.add('LA')
                }
        
                if (anterior != null && anterior.classList.contains('LA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (anterior != null && anterior.classList.contains('NA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (element.classList.contains('avaiableMovement')) {
                    reiEmCheque.push(element)
                }
        });
    
        todasAsCasasDaDDB.forEach(element => {
    
                var atualIndex = todasAsCasasDaDDB.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDaDDB);
                element.classList.add('avaiableMovement')
        
                if (element.classList.contains('occupiedBlack')) {
                    element.classList.add('target')
                    element.classList.add('LA')
                }
        
                if (element.classList.contains('occupiedWhite')) {
                    element.classList.remove('avaiableMovement')
                    element.classList.add('LA')
                }
        
                if (anterior != null && anterior.classList.contains('LA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (anterior != null && anterior.classList.contains('NA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (element.classList.contains('avaiableMovement')) {
                    reiEmCheque.push(element)
                }
        });
    
        todasAsCasasDEC.forEach(element => {
    
                var atualIndex = todasAsCasasDEC.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDEC);
                element.classList.add('avaiableMovement')
        
                if (element.classList.contains('occupiedBlack')) {
                    element.classList.add('target')
                    element.classList.add('LA')
                }
        
                if (element.classList.contains('occupiedWhite')) {
                    element.classList.remove('avaiableMovement')
                    element.classList.add('LA')
                }
        
                if (anterior != null && anterior.classList.contains('LA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (anterior != null && anterior.classList.contains('NA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (element.classList.contains('avaiableMovement')) {
                    reiEmCheque.push(element)
                }
        });
    
        todasAsCasasDEB.forEach(element => {
    
                var atualIndex = todasAsCasasDEB.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDEB);
                element.classList.add('avaiableMovement')
        
                if (element.classList.contains('occupiedBlack')) {
                    element.classList.add('target')
                    element.classList.add('LA')
                }
        
                if (element.classList.contains('occupiedWhite')) {
                    element.classList.remove('avaiableMovement')
                    element.classList.add('LA')
                }
        
                if (anterior != null && anterior.classList.contains('LA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (anterior != null && anterior.classList.contains('NA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (element.classList.contains('avaiableMovement')) {
                    reiEmCheque.push(element)
                }
        });
        return reiEmCheque;
}

function rainhaBranca(parameter) {

    reiEmCheque = [];
    var posiçãoSelecionada = parameter.path[0];
    var indexPosiçãoSelecionada = posicao.indexOf(posiçãoSelecionada);
    
    var todosOsFilhosAnteriores = filhosAnteriores(indexPosiçãoSelecionada)
    var todosOsFilhosPosteriores = filhosPosteriores(indexPosiçãoSelecionada)

    posiçãoSelecionada.classList.add('onFocus')
    
    var todasAsCasasDaColunaAcima = casasColunaAcima(todosOsFilhosAnteriores)
    var todasAsCasasDaColunaAbaixo = casasColunaAbaixo(todosOsFilhosPosteriores)
    var todasAsCasasDaLinhaEsquerda = casasLinhaEsquerda(todosOsFilhosAnteriores)
    var todasAsCasasDaLinhaDireita = casasLinhaDireita(todosOsFilhosPosteriores)
    var todasAsCasasDaDDC = casasDiagonalDireitaCima(todosOsFilhosAnteriores)
    var todasAsCasasDaDDB = casasDiagonalDireitaBaixo(todosOsFilhosPosteriores)
    var todasAsCasasDEC = casasDiagonalEsquerdaCima(todosOsFilhosAnteriores)
    var todasAsCasasDEB = casasDiagonalEsquerdaBaixo(todosOsFilhosPosteriores)
       
    todasAsCasasDaColunaAcima.forEach(element => {

            var atualIndex = todasAsCasasDaColunaAcima.indexOf(element);
            var anterior = elementoAnterior(atualIndex, todasAsCasasDaColunaAcima);
            element.classList.add('avaiableMovement')
    
            if (element.classList.contains('occupiedBlack')) {
                element.classList.add('target')
                element.classList.add('LA')
            }
    
            if (element.classList.contains('occupiedWhite')) {
                element.classList.remove('avaiableMovement')
                element.classList.add('LA')
            }
    
            if (anterior != null && anterior.classList.contains('LA')) {
                element.classList.remove('target')
                element.classList.remove('avaiableMovement');
                element.classList.add('NA');}
    
            if (anterior != null && anterior.classList.contains('NA')) {
                element.classList.remove('target')
                element.classList.remove('avaiableMovement');
                element.classList.add('NA');}
    
            if (element.classList.contains('avaiableMovement')) {
                reiEmCheque.push(element)
            }
    });

    todasAsCasasDaColunaAbaixo.forEach(element => {

            var atualIndex = todasAsCasasDaColunaAbaixo.indexOf(element);
            var anterior = elementoAnterior(atualIndex, todasAsCasasDaColunaAbaixo);
            element.classList.add('avaiableMovement')
    
            if (element.classList.contains('occupiedBlack')) {
                element.classList.add('target')
                element.classList.add('LA')
            }
    
            if (element.classList.contains('occupiedWhite')) {
                element.classList.remove('avaiableMovement')
                element.classList.add('LA')
            }
    
            if (anterior != null && anterior.classList.contains('LA')) {
                element.classList.remove('target')
                element.classList.remove('avaiableMovement');
                element.classList.add('NA');}
    
            if (anterior != null && anterior.classList.contains('NA')) {
                element.classList.remove('target')
                element.classList.remove('avaiableMovement');
                element.classList.add('NA');}
    
            if (element.classList.contains('avaiableMovement')) {
                reiEmCheque.push(element)
            }
    });

    todasAsCasasDaLinhaEsquerda.forEach(element => {

            var atualIndex = todasAsCasasDaLinhaEsquerda.indexOf(element);
            var anterior = elementoAnterior(atualIndex, todasAsCasasDaLinhaEsquerda);
            element.classList.add('avaiableMovement')
    
            if (element.classList.contains('occupiedBlack')) {
                element.classList.add('target')
                element.classList.add('LA')
            }
    
            if (element.classList.contains('occupiedWhite')) {
                element.classList.remove('avaiableMovement')
                element.classList.add('LA')
            }
    
            if (anterior != null && anterior.classList.contains('LA')) {
                element.classList.remove('target')
                element.classList.remove('avaiableMovement');
                element.classList.add('NA');}
    
            if (anterior != null && anterior.classList.contains('NA')) {
                element.classList.remove('target')
                element.classList.remove('avaiableMovement');
                element.classList.add('NA');}
    
            if (element.classList.contains('avaiableMovement')) {
                reiEmCheque.push(element)
            }
    });

    todasAsCasasDaLinhaDireita.forEach(element => {

            var atualIndex = todasAsCasasDaLinhaDireita.indexOf(element);
            var anterior = elementoAnterior(atualIndex, todasAsCasasDaLinhaDireita);
            element.classList.add('avaiableMovement')
    
            if (element.classList.contains('occupiedBlack')) {
                element.classList.add('target')
                element.classList.add('LA')
            }
    
            if (element.classList.contains('occupiedWhite')) {
                element.classList.remove('avaiableMovement')
                element.classList.add('LA')
            }
    
            if (anterior != null && anterior.classList.contains('LA')) {
                element.classList.remove('target')
                element.classList.remove('avaiableMovement');
                element.classList.add('NA');}
    
            if (anterior != null && anterior.classList.contains('NA')) {
                element.classList.remove('target')
                element.classList.remove('avaiableMovement');
                element.classList.add('NA');}
    
            if (element.classList.contains('avaiableMovement')) {
                reiEmCheque.push(element)
            }
    });

    todasAsCasasDaDDC.forEach(element => {
    
                var atualIndex = todasAsCasasDaDDC.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDaDDC);
                element.classList.add('avaiableMovement')
        
                if (element.classList.contains('occupiedBlack')) {
                    element.classList.add('target')
                    element.classList.add('LA')
                }
        
                if (element.classList.contains('occupiedWhite')) {
                    element.classList.remove('avaiableMovement')
                    element.classList.add('LA')
                }
        
                if (anterior != null && anterior.classList.contains('LA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (anterior != null && anterior.classList.contains('NA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (element.classList.contains('avaiableMovement')) {
                    reiEmCheque.push(element)
                }
    });
    
    todasAsCasasDaDDB.forEach(element => {
    
                var atualIndex = todasAsCasasDaDDB.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDaDDB);
                element.classList.add('avaiableMovement')
        
                if (element.classList.contains('occupiedBlack')) {
                    element.classList.add('target')
                    element.classList.add('LA')
                }
        
                if (element.classList.contains('occupiedWhite')) {
                    element.classList.remove('avaiableMovement')
                    element.classList.add('LA')
                }
        
                if (anterior != null && anterior.classList.contains('LA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (anterior != null && anterior.classList.contains('NA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (element.classList.contains('avaiableMovement')) {
                    reiEmCheque.push(element)
                }
    });
    
    todasAsCasasDEC.forEach(element => {
    
                var atualIndex = todasAsCasasDEC.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDEC);
                element.classList.add('avaiableMovement')
        
                if (element.classList.contains('occupiedBlack')) {
                    element.classList.add('target')
                    element.classList.add('LA')
                }
        
                if (element.classList.contains('occupiedWhite')) {
                    element.classList.remove('avaiableMovement')
                    element.classList.add('LA')
                }
        
                if (anterior != null && anterior.classList.contains('LA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (anterior != null && anterior.classList.contains('NA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (element.classList.contains('avaiableMovement')) {
                    reiEmCheque.push(element)
                }
    });
    
    todasAsCasasDEB.forEach(element => {
    
                var atualIndex = todasAsCasasDEB.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDEB);
                element.classList.add('avaiableMovement')
        
                if (element.classList.contains('occupiedBlack')) {
                    element.classList.add('target')
                    element.classList.add('LA')
                }
        
                if (element.classList.contains('occupiedWhite')) {
                    element.classList.remove('avaiableMovement')
                    element.classList.add('LA')
                }
        
                if (anterior != null && anterior.classList.contains('LA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (anterior != null && anterior.classList.contains('NA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (element.classList.contains('avaiableMovement')) {
                    reiEmCheque.push(element)
                }
    });
    return reiEmCheque;
}

function reiBranco(parameter) {
    reiEmCheque = [];
    var posiçãoSelecionada = parameter.path[0];
    var indexPosiçãoSelecionada = posicao.indexOf(posiçãoSelecionada);
    
    var todosOsFilhosAnteriores = filhosAnteriores(indexPosiçãoSelecionada)
    var todosOsFilhosPosteriores = filhosPosteriores(indexPosiçãoSelecionada)

    posiçãoSelecionada.classList.add('onFocus')
    
    var todasAsCasasDaColunaAcima = casasColunaAcima(todosOsFilhosAnteriores)
    var todasAsCasasDaColunaAbaixo = casasColunaAbaixo(todosOsFilhosPosteriores)
    var todasAsCasasDaLinhaEsquerda = casasLinhaEsquerda(todosOsFilhosAnteriores)
    var todasAsCasasDaLinhaDireita = casasLinhaDireita(todosOsFilhosPosteriores)
    var todasAsCasasDaDDC = casasDiagonalDireitaCima(todosOsFilhosAnteriores)
    var todasAsCasasDaDDB = casasDiagonalDireitaBaixo(todosOsFilhosPosteriores)
    var todasAsCasasDEC = casasDiagonalEsquerdaCima(todosOsFilhosAnteriores)
    var todasAsCasasDEB = casasDiagonalEsquerdaBaixo(todosOsFilhosPosteriores)

    if (!!todasAsCasasDaColunaAcima[0]){reiEmCheque.push(todasAsCasasDaColunaAcima[0])}
    if (!!todasAsCasasDaColunaAbaixo[0]){reiEmCheque.push(todasAsCasasDaColunaAbaixo[0])}
    if (!!todasAsCasasDaLinhaEsquerda[0]){reiEmCheque.push(todasAsCasasDaLinhaEsquerda[0])}
    if (!!todasAsCasasDaLinhaDireita[0]){reiEmCheque.push(todasAsCasasDaLinhaDireita[0])}
    if (!!todasAsCasasDaDDC[0]){reiEmCheque.push(todasAsCasasDaDDC[0])}
    if (!!todasAsCasasDaDDB[0]){reiEmCheque.push(todasAsCasasDaDDB[0])}
    if (!!todasAsCasasDEC[0]){reiEmCheque.push(todasAsCasasDEC[0])}
    if (!!todasAsCasasDEB[0]){reiEmCheque.push(todasAsCasasDEB[0])}

    reiEmCheque.forEach(element => {
        element.classList.add('avaiableMovement');

        if (element.classList.contains('occupiedWhite')){
            element.classList.remove('avaiableMovement')
        }

        if (element.classList.contains('occupiedBlack')){
            element.classList.add('target')
        }
    });
    return reiEmCheque;
}

function torrePreta(parameter) {

    reiEmCheque = [];
    var posiçãoSelecionada = parameter.path[0];
    var indexPosiçãoSelecionada = posicao.indexOf(posiçãoSelecionada);
    
    var todosOsFilhosAnteriores = filhosAnteriores(indexPosiçãoSelecionada)
    var todosOsFilhosPosteriores = filhosPosteriores(indexPosiçãoSelecionada)

    posiçãoSelecionada.classList.add('onFocus')

    var todasAsCasasDaColunaAcima = casasColunaAcima(todosOsFilhosAnteriores)
    var todasAsCasasDaColunaAbaixo = casasColunaAbaixo(todosOsFilhosPosteriores)
    var todasAsCasasDaLinhaEsquerda = casasLinhaEsquerda(todosOsFilhosAnteriores)
    var todasAsCasasDaLinhaDireita = casasLinhaDireita(todosOsFilhosPosteriores)

    todasAsCasasDaColunaAcima.forEach(element => {

        var atualIndex = todasAsCasasDaColunaAcima.indexOf(element);
        var anterior = elementoAnterior(atualIndex, todasAsCasasDaColunaAcima);
        element.classList.add('avaiableMovement')

        if (element.classList.contains('occupiedWhite')) {
            element.classList.add('target')
            element.classList.add('LA')
        }

        if (element.classList.contains('occupiedBlack')) {
            element.classList.remove('avaiableMovement')
            element.classList.add('LA')
        }

        if (anterior != null && anterior.classList.contains('LA')) {
            element.classList.remove('target')
            element.classList.remove('avaiableMovement');
            element.classList.add('NA');}

        if (anterior != null && anterior.classList.contains('NA')) {
            element.classList.remove('target')
            element.classList.remove('avaiableMovement');
            element.classList.add('NA');}

        if (element.classList.contains('avaiableMovement')) {
            reiEmCheque.push(element)
        }
    })

    todasAsCasasDaColunaAbaixo.forEach(element => {
    
        var atualIndex = todasAsCasasDaColunaAbaixo.indexOf(element);
        var anterior = elementoAnterior(atualIndex, todasAsCasasDaColunaAbaixo);
        element.classList.add('avaiableMovement')

        if (element.classList.contains('occupiedWhite')) {
            element.classList.add('target')
            element.classList.add('LA')
        }

        if (element.classList.contains('occupiedBlack')) {
            element.classList.remove('avaiableMovement')
            element.classList.add('LA')
        }

        if (anterior != null && anterior.classList.contains('LA')) {
            element.classList.remove('target')
            element.classList.remove('avaiableMovement');
            element.classList.add('NA');}

        if (anterior != null && anterior.classList.contains('NA')) {
            element.classList.remove('target')
            element.classList.remove('avaiableMovement');
            element.classList.add('NA');}

            if (element.classList.contains('avaiableMovement')) {
                reiEmCheque.push(element)
            }
    })

    todasAsCasasDaLinhaEsquerda.forEach(element => {
        var atualIndex = todasAsCasasDaLinhaEsquerda.indexOf(element);
        var anterior = elementoAnterior(atualIndex, todasAsCasasDaLinhaEsquerda);
        element.classList.add('avaiableMovement')

        if (element.classList.contains('occupiedWhite')) {
            element.classList.add('target')
            element.classList.add('LA')
        }

        if (element.classList.contains('occupiedBlack')) {
            element.classList.remove('avaiableMovement')
            element.classList.add('LA')
        }

        if (anterior != null && anterior.classList.contains('LA')) {
            element.classList.remove('target')
            element.classList.remove('avaiableMovement');
            element.classList.add('NA');}

        if (anterior != null && anterior.classList.contains('NA')) {
            element.classList.remove('target')
            element.classList.remove('avaiableMovement');
            element.classList.add('NA');}

            if (element.classList.contains('avaiableMovement')) {
                reiEmCheque.push(element)
            }
    })

    todasAsCasasDaLinhaDireita.forEach(element => {
        var atualIndex = todasAsCasasDaLinhaDireita.indexOf(element);
        var anterior = elementoAnterior(atualIndex, todasAsCasasDaLinhaDireita);
        element.classList.add('avaiableMovement')

        if (element.classList.contains('occupiedWhite')) {
            element.classList.add('target')
            element.classList.add('LA')
        }

        if (element.classList.contains('occupiedBlack')) {
            element.classList.remove('avaiableMovement')
            element.classList.add('LA')
        }

        if (anterior != null && anterior.classList.contains('LA')) {
            element.classList.remove('target')
            element.classList.remove('avaiableMovement');
            element.classList.add('NA');}

        if (anterior != null && anterior.classList.contains('NA')) {
            element.classList.remove('target')
            element.classList.remove('avaiableMovement');
            element.classList.add('NA');}

            if (element.classList.contains('avaiableMovement')) {
                reiEmCheque.push(element)
            }
    })
    return reiEmCheque;
}

function bispoPreto(parameter) {

    reiEmCheque = [];
    var posiçãoSelecionada = parameter.path[0];
    var indexPosiçãoSelecionada = posicao.indexOf(posiçãoSelecionada);
    
    var todosOsFilhosAnteriores = filhosAnteriores(indexPosiçãoSelecionada)
    var todosOsFilhosPosteriores = filhosPosteriores(indexPosiçãoSelecionada)

    posiçãoSelecionada.classList.add('onFocus')
    
        var todasAsCasasDaDDC = casasDiagonalDireitaCima(todosOsFilhosAnteriores)
        var todasAsCasasDaDDB = casasDiagonalDireitaBaixo(todosOsFilhosPosteriores)
        var todasAsCasasDEC = casasDiagonalEsquerdaCima(todosOsFilhosAnteriores)
        var todasAsCasasDEB = casasDiagonalEsquerdaBaixo(todosOsFilhosPosteriores)
    
        todasAsCasasDaDDC.forEach(element => {
    
                var atualIndex = todasAsCasasDaDDC.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDaDDC);
                element.classList.add('avaiableMovement')
        
                if (element.classList.contains('occupiedWhite')) {
                    element.classList.add('target')
                    element.classList.add('LA')
                }
        
                if (element.classList.contains('occupiedBlack')) {
                    element.classList.remove('avaiableMovement')
                    element.classList.add('LA')
                }
        
                if (anterior != null && anterior.classList.contains('LA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (anterior != null && anterior.classList.contains('NA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (element.classList.contains('avaiableMovement')) {
                    reiEmCheque.push(element)
                }
        });
    
        todasAsCasasDaDDB.forEach(element => {
    
                var atualIndex = todasAsCasasDaDDB.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDaDDB);
                element.classList.add('avaiableMovement')
        
                if (element.classList.contains('occupiedWhite')) {
                    element.classList.add('target')
                    element.classList.add('LA')
                }
        
                if (element.classList.contains('occupiedBlack')) {
                    element.classList.remove('avaiableMovement')
                    element.classList.add('LA')
                }
        
                if (anterior != null && anterior.classList.contains('LA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (anterior != null && anterior.classList.contains('NA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (element.classList.contains('avaiableMovement')) {
                    reiEmCheque.push(element)
                }
        });
    
        todasAsCasasDEC.forEach(element => {
    
                var atualIndex = todasAsCasasDEC.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDEC);
                element.classList.add('avaiableMovement')
        
                if (element.classList.contains('occupiedWhite')) {
                    element.classList.add('target')
                    element.classList.add('LA')
                }
        
                if (element.classList.contains('occupiedBlack')) {
                    element.classList.remove('avaiableMovement')
                    element.classList.add('LA')
                }
        
                if (anterior != null && anterior.classList.contains('LA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (anterior != null && anterior.classList.contains('NA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (element.classList.contains('avaiableMovement')) {
                    reiEmCheque.push(element)
                }
        });
    
        todasAsCasasDEB.forEach(element => {
    
                var atualIndex = todasAsCasasDEB.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDEB);
                element.classList.add('avaiableMovement')
        
                if (element.classList.contains('occupiedWhite')) {
                    element.classList.add('target')
                    element.classList.add('LA')
                }
        
                if (element.classList.contains('occupiedBlack')) {
                    element.classList.remove('avaiableMovement')
                    element.classList.add('LA')
                }
        
                if (anterior != null && anterior.classList.contains('LA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (anterior != null && anterior.classList.contains('NA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (element.classList.contains('avaiableMovement')) {
                    reiEmCheque.push(element)
                }
        });
        return reiEmCheque;
}

function rainhaPreta(parameter) {

    reiEmCheque = [];
    var posiçãoSelecionada = parameter.path[0];
    var indexPosiçãoSelecionada = posicao.indexOf(posiçãoSelecionada);
    
    var todosOsFilhosAnteriores = filhosAnteriores(indexPosiçãoSelecionada)
    var todosOsFilhosPosteriores = filhosPosteriores(indexPosiçãoSelecionada)

    posiçãoSelecionada.classList.add('onFocus')
    
    var todasAsCasasDaColunaAcima = casasColunaAcima(todosOsFilhosAnteriores)
    var todasAsCasasDaColunaAbaixo = casasColunaAbaixo(todosOsFilhosPosteriores)
    var todasAsCasasDaLinhaEsquerda = casasLinhaEsquerda(todosOsFilhosAnteriores)
    var todasAsCasasDaLinhaDireita = casasLinhaDireita(todosOsFilhosPosteriores)
    var todasAsCasasDaDDC = casasDiagonalDireitaCima(todosOsFilhosAnteriores)
    var todasAsCasasDaDDB = casasDiagonalDireitaBaixo(todosOsFilhosPosteriores)
    var todasAsCasasDEC = casasDiagonalEsquerdaCima(todosOsFilhosAnteriores)
    var todasAsCasasDEB = casasDiagonalEsquerdaBaixo(todosOsFilhosPosteriores)
       
    todasAsCasasDaColunaAcima.forEach(element => {

            var atualIndex = todasAsCasasDaColunaAcima.indexOf(element);
            var anterior = elementoAnterior(atualIndex, todasAsCasasDaColunaAcima);
            element.classList.add('avaiableMovement')
    
            if (element.classList.contains('occupiedWhite')) {
                element.classList.add('target')
                element.classList.add('LA')
            }
    
            if (element.classList.contains('occupiedBlack')) {
                element.classList.remove('avaiableMovement')
                element.classList.add('LA')
            }
    
            if (anterior != null && anterior.classList.contains('LA')) {
                element.classList.remove('target')
                element.classList.remove('avaiableMovement');
                element.classList.add('NA');}
    
            if (anterior != null && anterior.classList.contains('NA')) {
                element.classList.remove('target')
                element.classList.remove('avaiableMovement');
                element.classList.add('NA');}
    
            if (element.classList.contains('avaiableMovement')) {
                reiEmCheque.push(element)
            }
    });

    todasAsCasasDaColunaAbaixo.forEach(element => {

            var atualIndex = todasAsCasasDaColunaAbaixo.indexOf(element);
            var anterior = elementoAnterior(atualIndex, todasAsCasasDaColunaAbaixo);
            element.classList.add('avaiableMovement')
    
            if (element.classList.contains('occupiedWhite')) {
                element.classList.add('target')
                element.classList.add('LA')
            }
    
            if (element.classList.contains('occupiedBlack')) {
                element.classList.remove('avaiableMovement')
                element.classList.add('LA')
            }
    
            if (anterior != null && anterior.classList.contains('LA')) {
                element.classList.remove('target')
                element.classList.remove('avaiableMovement');
                element.classList.add('NA');}
    
            if (anterior != null && anterior.classList.contains('NA')) {
                element.classList.remove('target')
                element.classList.remove('avaiableMovement');
                element.classList.add('NA');}
    
            if (element.classList.contains('avaiableMovement')) {
                reiEmCheque.push(element)
            }
    });

    todasAsCasasDaLinhaEsquerda.forEach(element => {

            var atualIndex = todasAsCasasDaLinhaEsquerda.indexOf(element);
            var anterior = elementoAnterior(atualIndex, todasAsCasasDaLinhaEsquerda);
            element.classList.add('avaiableMovement')
    
            if (element.classList.contains('occupiedWhite')) {
                element.classList.add('target')
                element.classList.add('LA')
            }
    
            if (element.classList.contains('occupiedBlack')) {
                element.classList.remove('avaiableMovement')
                element.classList.add('LA')
            }
    
            if (anterior != null && anterior.classList.contains('LA')) {
                element.classList.remove('target')
                element.classList.remove('avaiableMovement');
                element.classList.add('NA');}
    
            if (anterior != null && anterior.classList.contains('NA')) {
                element.classList.remove('target')
                element.classList.remove('avaiableMovement');
                element.classList.add('NA');}
    
            if (element.classList.contains('avaiableMovement')) {
                reiEmCheque.push(element)
            }
    });

    todasAsCasasDaLinhaDireita.forEach(element => {

            var atualIndex = todasAsCasasDaLinhaDireita.indexOf(element);
            var anterior = elementoAnterior(atualIndex, todasAsCasasDaLinhaDireita);
            element.classList.add('avaiableMovement')
    
            if (element.classList.contains('occupiedWhite')) {
                element.classList.add('target')
                element.classList.add('LA')
            }
    
            if (element.classList.contains('occupiedBlack')) {
                element.classList.remove('avaiableMovement')
                element.classList.add('LA')
            }
    
            if (anterior != null && anterior.classList.contains('LA')) {
                element.classList.remove('target')
                element.classList.remove('avaiableMovement');
                element.classList.add('NA');}
    
            if (anterior != null && anterior.classList.contains('NA')) {
                element.classList.remove('target')
                element.classList.remove('avaiableMovement');
                element.classList.add('NA');}
    
            if (element.classList.contains('avaiableMovement')) {
                reiEmCheque.push(element)
            }
    });

    todasAsCasasDaDDC.forEach(element => {
    
                var atualIndex = todasAsCasasDaDDC.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDaDDC);
                element.classList.add('avaiableMovement')
        
                if (element.classList.contains('occupiedWhite')) {
                    element.classList.add('target')
                    element.classList.add('LA')
                }
        
                if (element.classList.contains('occupiedBlack')) {
                    element.classList.remove('avaiableMovement')
                    element.classList.add('LA')
                }
        
                if (anterior != null && anterior.classList.contains('LA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (anterior != null && anterior.classList.contains('NA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (element.classList.contains('avaiableMovement')) {
                    reiEmCheque.push(element)
                }
    });
    
    todasAsCasasDaDDB.forEach(element => {
    
                var atualIndex = todasAsCasasDaDDB.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDaDDB);
                element.classList.add('avaiableMovement')
        
                if (element.classList.contains('occupiedWhite')) {
                    element.classList.add('target')
                    element.classList.add('LA')
                }
        
                if (element.classList.contains('occupiedBlack')) {
                    element.classList.remove('avaiableMovement')
                    element.classList.add('LA')
                }
        
                if (anterior != null && anterior.classList.contains('LA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (anterior != null && anterior.classList.contains('NA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (element.classList.contains('avaiableMovement')) {
                    reiEmCheque.push(element)
                }
    });
    
    todasAsCasasDEC.forEach(element => {
    
                var atualIndex = todasAsCasasDEC.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDEC);
                element.classList.add('avaiableMovement')
        
                if (element.classList.contains('occupiedWhite')) {
                    element.classList.add('target')
                    element.classList.add('LA')
                }
        
                if (element.classList.contains('occupiedBlack')) {
                    element.classList.remove('avaiableMovement')
                    element.classList.add('LA')
                }
        
                if (anterior != null && anterior.classList.contains('LA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (anterior != null && anterior.classList.contains('NA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (element.classList.contains('avaiableMovement')) {
                    reiEmCheque.push(element)
                }
    });
    
    todasAsCasasDEB.forEach(element => {
    
                var atualIndex = todasAsCasasDEB.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDEB);
                element.classList.add('avaiableMovement')
        
                if (element.classList.contains('occupiedWhite')) {
                    element.classList.add('target')
                    element.classList.add('LA')
                }
        
                if (element.classList.contains('occupiedBlack')) {
                    element.classList.remove('avaiableMovement')
                    element.classList.add('LA')
                }
        
                if (anterior != null && anterior.classList.contains('LA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (anterior != null && anterior.classList.contains('NA')) {
                    element.classList.remove('target')
                    element.classList.remove('avaiableMovement');
                    element.classList.add('NA');}
        
                if (element.classList.contains('avaiableMovement')) {
                    reiEmCheque.push(element)
                }
    });
    return reiEmCheque;
}

function reiPreto(parameter) {

    reiEmCheque = [];
    var posiçãoSelecionada = parameter.path[0];
    var indexPosiçãoSelecionada = posicao.indexOf(posiçãoSelecionada);
    
    var todosOsFilhosAnteriores = filhosAnteriores(indexPosiçãoSelecionada)
    var todosOsFilhosPosteriores = filhosPosteriores(indexPosiçãoSelecionada)

    posiçãoSelecionada.classList.add('onFocus')
    
    var todasAsCasasDaColunaAcima = casasColunaAcima(todosOsFilhosAnteriores)
    var todasAsCasasDaColunaAbaixo = casasColunaAbaixo(todosOsFilhosPosteriores)
    var todasAsCasasDaLinhaEsquerda = casasLinhaEsquerda(todosOsFilhosAnteriores)
    var todasAsCasasDaLinhaDireita = casasLinhaDireita(todosOsFilhosPosteriores)
    var todasAsCasasDaDDC = casasDiagonalDireitaCima(todosOsFilhosAnteriores)
    var todasAsCasasDaDDB = casasDiagonalDireitaBaixo(todosOsFilhosPosteriores)
    var todasAsCasasDEC = casasDiagonalEsquerdaCima(todosOsFilhosAnteriores)
    var todasAsCasasDEB = casasDiagonalEsquerdaBaixo(todosOsFilhosPosteriores)

    if (!!todasAsCasasDaColunaAcima[0]){reiEmCheque.push(todasAsCasasDaColunaAcima[0])}
    if (!!todasAsCasasDaColunaAbaixo[0]){reiEmCheque.push(todasAsCasasDaColunaAbaixo[0])}
    if (!!todasAsCasasDaLinhaEsquerda[0]){reiEmCheque.push(todasAsCasasDaLinhaEsquerda[0])}
    if (!!todasAsCasasDaLinhaDireita[0]){reiEmCheque.push(todasAsCasasDaLinhaDireita[0])}
    if (!!todasAsCasasDaDDC[0]){reiEmCheque.push(todasAsCasasDaDDC[0])}
    if (!!todasAsCasasDaDDB[0]){reiEmCheque.push(todasAsCasasDaDDB[0])}
    if (!!todasAsCasasDEC[0]){reiEmCheque.push(todasAsCasasDEC[0])}
    if (!!todasAsCasasDEB[0]){reiEmCheque.push(todasAsCasasDEB[0])}

    reiEmCheque.forEach(element => {
        element.classList.add('avaiableMovement');

        if (element.classList.contains('occupiedBlack')){
            element.classList.remove('avaiableMovement')
        }

        if (element.classList.contains('occupiedWhite')){
            element.classList.add('target')
        }
    });
    return reiEmCheque;
}

const objetoSelecionada = {
    '♖' : (elemento) => {var $ = torreBranca(elemento); return $},
    '♜' : (elemento) => {var $ = torrePreta(elemento); return $},
    '♗' : (elemento) => {var $ = bispoBranco(elemento); return $},
    '♝' : (elemento) => {var $ = bispoPreto(elemento); return $},
    '♘' : (elemento) => {var $ = torreBranca(elemento); return $},
    '♞' : (elemento) => {var $ = torreBranca(elemento); return $},
    '♕' : (elemento) => {var $ = rainhaBranca(elemento); return $},
    '♛' : (elemento) => {var $ = rainhaPreta(elemento); return $},
    '♔' : (elemento) => {var $ = reiBranco(elemento); return $},
    '♚' : (elemento) => {var $ = reiPreto(elemento); return $},
    '♙' : (elemento) => {var $ = torreBranca(elemento); return $},
    '♟' : (elemento) => {var $ = torreBranca(elemento); return $}
}

function game(elemento) {

    var textoElemento = elemento.path[0].innerHTML

    if (chessboard.classList.contains('turnoBranco') && pecasBrancas.includes(textoElemento)){
        if (chequeRei == false) {
            const funcaoCerta = objetoSelecionada[textoElemento]
            var element = elemento
            funcaoCerta(element)
        }
        if (chequeRei == true) {
            console.log('reiemcheque')
        }
    }

    if (chessboard.classList.contains('turnoPreto') && pecasPretas.includes(textoElemento)){
        if (chequeRei == false) {
            const funcaoCerta = objetoSelecionada[textoElemento]
            var element = elemento
            funcaoCerta(element)
        }
        if (chequeRei == true) {
            console.log('reiemcheque')
        }
    }
}

tabuleiro.addEventListener('contextmenu', e => {e.preventDefault();});

tabuleiro.addEventListener('click', () => {
removerClassList();
setTimeout(() => {
  tabuleiro.addEventListener('mousedown', game,  {once : true})
}, 300);}
)

tabuleiro.addEventListener('mousedown', game,  {once : true})

// tabuleiro.addEventListener('mouseup', (aux) => {console.log(aux)})

tabuleiro.addEventListener("drag", function(event) {}, false);

tabuleiro.addEventListener("dragstart", function(event) {
  dragged = event.target;
  event.target.style.opacity = .5;
}, false);

tabuleiro.addEventListener("dragend", function(event) {
  event.target.style.opacity = "";
}, false);

tabuleiro.addEventListener("dragover", function(event) {
  event.preventDefault();
}, false);

// tabuleiro.addEventListener("dragenter", function(event) {
//   // highlight potential drop target when the draggable element enters it
//   if (event.target.className == "dropzone") {
//     event.target.style.background = "purple";
//   }

// }, false);

// tabuleiro.addEventListener("dragleave", function(event) {
//   // reset background of potential drop target when the draggable element leaves it
//   if (event.target.className == "dropzone") {
//     event.target.style.background = "";
//   }

// }, false);

tabuleiro.addEventListener("drop", function(event) {
    event.preventDefault();

    var $ = dragged.innerHTML

    if (event.target.classList.contains("avaiableMovement")) {
        event.target.style.background = "";

        // if ($ == '♖' || $ == '♙' || $ == '♕' || $ == '♔' || $ == '♗' || $ == '♘'){
        //     if (event.target.innerHTML != ""){
        //     pretosFora.push(event.target.innerHTML)}
        // } else {
        //     if (event.target.innerHTML != ""){
        //     brancosFora.push(event.target.innerHTML)}}
        // console.log(brancosFora);
        // console.log(pretosFora);
        
        event.target.innerHTML = $

        dragged.innerHTML = '';

        if (chessboard.classList.contains('turnoBranco')){
            chessboard.classList.remove('turnoBranco');
            chessboard.classList.add('turnoPreto');
        } else {
            chessboard.classList.remove('turnoPreto');
            chessboard.classList.add('turnoBranco');
        }
    }

    organizarClasses()

    const funcaoCerta = objetoSelecionada[$]
    var element = event
    var anyChecks = funcaoCerta(element)

    // anyChecks.forEach(element => {
    //     if (element.classList.contains('reiPreto') || element.classList.contains('reiBranco')){
    //         element.classList.add('check')
    //         // chequeRei = true;
    //     }
    // });

    removerClassList()
    
    turnos()

    setTimeout(() => {
        tabuleiro.addEventListener('mousedown', game,  {once : true});
    }, 300);
}, false);