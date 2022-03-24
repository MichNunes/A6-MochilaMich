var chessboard = document.getElementById('chessboard')
chessboard.classList.add('turnoBranco')

var siblings = Array.from(chessboard.children);
var posiçãoSelecionada;

function organizarClasses() {
    siblings.forEach(element => {
    var aux = element
    if (aux.innerText == '♜' || aux.innerText == "♞" || aux.innerText == "♝" || aux.innerText == "♛" || aux.innerText == "♚" || aux.innerText == "♟") {
        aux.classList.add('occupiedBlack')} else {aux.classList.remove('occupiedBlack')}
    if (aux.innerText == '♖' || aux.innerText == "♘" || aux.innerText == "♗" || aux.innerText == "♕" || aux.innerText == "♔" || aux.innerText == "♙") {
        aux.classList.add('occupiedWhite')} else {aux.classList.remove('occupiedWhite')}
})};
organizarClasses()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function elementoAnterior(x, y) {
    if (x != 0) {return y[(x - 1)]}
    else {return null}
}

function classeFirstCasaBranco(x, y, z, a, b, c, d, e) {
    if (!!x) {if (x.classList.contains('occupiedBlack') || x.classList.contains('occupiedWhite')) {null}
                else {x.classList.add('avaiableMovement')}} else {null}
    if (!!y) {if (y.classList.contains('occupiedBlack') || y.classList.contains('occupiedWhite')) {null}
                else {y.classList.add('avaiableMovement')}} else {null}
    if (!!z) {if (z.classList.contains('occupiedBlack') || z.classList.contains('occupiedWhite')) {null}
                else {z.classList.add('avaiableMovement')}} else {null}
    if (!!a) {if (a.classList.contains('occupiedBlack') || a.classList.contains('occupiedWhite')) {null}
                else {a.classList.add('avaiableMovement')}} else {null}
    if (b != null && b.classList.contains('occupiedBlack')) {
        b.classList.add("red");
        b.classList.add('avaiableMovement')} else {null}
    if (c != null && c.classList.contains('occupiedBlack')) {
        c.classList.add("red");
        c.classList.add('avaiableMovement')} else {null}
    if (d != null && d.classList.contains('occupiedBlack')) {
        d.classList.add("red");
        d.classList.add('avaiableMovement')} else {null}
    if (e != null && e.classList.contains('occupiedBlack')) {
        e.classList.add("red");
        e.classList.add('avaiableMovement')} else {null}
}

function classeFirstCasaRainhaBranco(x, y, z, a, b, c, d, e, f, g, h, i, j, k, l, m) {
    if (!!x) {if (x.classList.contains('occupiedBlack') || x.classList.contains('occupiedWhite')) {null}
                else {x.classList.add('avaiableMovement')}} else {null}
    if (!!y) {if (y.classList.contains('occupiedBlack') || y.classList.contains('occupiedWhite')) {null}
                else {y.classList.add('avaiableMovement')}} else {null}
    if (!!z) {if (z.classList.contains('occupiedBlack') || z.classList.contains('occupiedWhite')) {null}
                else {z.classList.add('avaiableMovement')}} else {null}
    if (!!a) {if (a.classList.contains('occupiedBlack') || a.classList.contains('occupiedWhite')) {null}
                else {a.classList.add('avaiableMovement')}} else {null}
    if (!!b) {if (b.classList.contains('occupiedBlack') || b.classList.contains('occupiedWhite')) {null}
                else {b.classList.add('avaiableMovement')}} else {null}
    if (!!c) {if (c.classList.contains('occupiedBlack') || c.classList.contains('occupiedWhite')) {null}
                else {c.classList.add('avaiableMovement')}} else {null}
    if (!!d) {if (d.classList.contains('occupiedBlack') || d.classList.contains('occupiedWhite')) {null}
                else {d.classList.add('avaiableMovement')}} else {null}
    if (!!e) {if (e.classList.contains('occupiedBlack') || e.classList.contains('occupiedWhite')) {null}
                else {e.classList.add('avaiableMovement')}} else {null}
    if (f != null && f.classList.contains('occupiedBlack')) {
        f.classList.add("red");
        f.classList.add('avaiableMovement')} else {null}
    if (g != null && g.classList.contains('occupiedBlack')) {
        g.classList.add("red");
        g.classList.add('avaiableMovement')} else {null}
    if (h != null && h.classList.contains('occupiedBlack')) {
        h.classList.add("red");
        h.classList.add('avaiableMovement')} else {null}
    if (i != null && i.classList.contains('occupiedBlack')) {
        i.classList.add("red");
        i.classList.add('avaiableMovement')} else {null}
    if (j != null && j.classList.contains('occupiedBlack')) {
        j.classList.add("red");
        j.classList.add('avaiableMovement')} else {null}
    if (k != null && k.classList.contains('occupiedBlack')) {
        k.classList.add("red");
        k.classList.add('avaiableMovement')} else {null}
    if (l != null && l.classList.contains('occupiedBlack')) {
        l.classList.add("red");
        l.classList.add('avaiableMovement')} else {null}
    if (m != null && m.classList.contains('occupiedBlack')) {
        m.classList.add("red");
        m.classList.add('avaiableMovement')} else {null}
}

function classeFirstCasaPreto(x, y, z, a, b, c, d, e) {
    if (!!x) {if (x.classList.contains('occupiedWhite') || x.classList.contains('occupiedBlack')) {null}
                else {x.classList.add('avaiableMovement')}} else {null}
    if (!!y) {if (y.classList.contains('occupiedWhite') || y.classList.contains('occupiedBlack')) {null}
                else {y.classList.add('avaiableMovement')}} else {null}
    if (!!z) {if (z.classList.contains('occupiedWhite') || z.classList.contains('occupiedBlack')) {null}
                else {z.classList.add('avaiableMovement')}} else {null}
    if (!!a) {if (a.classList.contains('occupiedWhite') || a.classList.contains('occupiedBlack')) {null}
                else {a.classList.add('avaiableMovement')}} else {null}
    if (b != null && b.classList.contains('occupiedWhite')) {
        b.classList.add("red");
        b.classList.add('avaiableMovement')} else {null}
    if (c != null && c.classList.contains('occupiedWhite')) {
        c.classList.add("red");
        c.classList.add('avaiableMovement')} else {null}
    if (d != null && d.classList.contains('occupiedWhite')) {
        d.classList.add("red");
        d.classList.add('avaiableMovement')} else {null}
    if (e != null && e.classList.contains('occupiedWhite')) {
        e.classList.add("red");
        e.classList.add('avaiableMovement')} else {null}
}

function removerEventListener(parameter) {
    siblings.forEach(element => {
        element.removeEventListener('click', parameter)
    });
}

function removerClassList() {
    siblings.forEach(element => {
        element.classList.remove('onFocus')
        element.classList.remove('avaiableMovement')
        element.classList.remove('red')
    });
}

function checarAvaiableMovement() {
    var aux = []
    siblings.forEach(element => {
        if (element.classList.contains('avaiableMovement')){
            aux.push(true)
        }
    })
    return aux
}

function zerarElementosBranco(parameter) {
    removerEventListener(parameter)
    posiçãoSelecionada.innerHTML = '';
    removerClassList()
    organizarClasses()
    chessboard.classList.remove('turnoBranco');
    chessboard.classList.add('turnoPreto');
    setTimeout(() => {
        chessboard.addEventListener('click', game, {once : true})
    }, 200);
}

function zerarElementosPreto(parameter) {
    removerEventListener(parameter)
    posiçãoSelecionada.innerHTML = '';
    removerClassList()
    organizarClasses()
    chessboard.classList.remove('turnoPreto');
    chessboard.classList.add('turnoBranco');
    setTimeout(() => {
        chessboard.addEventListener('click', game, {once : true})
    }, 200);
}

function jogadaTorreBranca(element) {
    element.path[0].innerHTML = "♖"
    zerarElementosBranco(jogadaTorreBranca)
}

function jogadaBispoBranco(element) {
    element.path[0].innerHTML = "♗"
    zerarElementosBranco(jogadaBispoBranco)
}

function jogadaTorrePreta(element) {
    element.path[0].innerHTML = "♜"
    zerarElementosPreto(jogadaTorrePreta)
}

function jogadaBispoPreto(element) {
    element.path[0].innerHTML = "♝"
    zerarElementosPreto(jogadaBispoPreto)
}

function jogadaRainhaBranca(element) {
    element.path[0].innerHTML = "♕"
    zerarElementosBranco(jogadaRainhaBranca)
}

function jogadaRainhaPreta(element) {
    element.path[0].innerHTML = "♛"
    zerarElementosPreto(jogadaRainhaPreta)
}

function game(elemento) {

    console.log(elemento)
    
    removerClassList()
    posiçãoSelecionada = elemento.path[0];
    indexPosiçãoSelecionada = siblings.indexOf(posiçãoSelecionada);
    
    var todosOsFilhosAnteriores = filhosAnteriores(indexPosiçãoSelecionada)
    var todosOsFilhosPosteriores = filhosPosteriores(indexPosiçãoSelecionada)

    if (chessboard.classList[1] == 'turnoBranco'){
        if (posiçãoSelecionada.innerHTML != "♖"
        // trocar conforme for fazendo as peças, só para o jogo nao bugar
        ) {chessboard.addEventListener('click', game, {once : true}), 50} else {null}
    //torre branca
        if (posiçãoSelecionada.innerHTML == "♖") {

        posiçãoSelecionada.classList.add('onFocus')

        var todasAsCasasDaColunaAcima = casasColunaAcima(todosOsFilhosAnteriores)
        var todasAsCasasDaColunaAbaixo = casasColunaAbaixo(todosOsFilhosPosteriores)
        var todasAsCasasDaLinhaEsquerda = casasLinhaEsquerda(todosOsFilhosAnteriores)
        var todasAsCasasDaLinhaDireita = casasLinhaDireita(todosOsFilhosPosteriores)

        var proxCima = todasAsCasasDaColunaAcima[0]
        var proxBaixo = todasAsCasasDaColunaAbaixo[0]
        var proxEsquerda = todasAsCasasDaLinhaEsquerda[0]
        var proxDireita = todasAsCasasDaLinhaDireita[0]

        classeFirstCasaBranco(todasAsCasasDaColunaAcima[0], todasAsCasasDaColunaAbaixo[0], todasAsCasasDaLinhaEsquerda[0], todasAsCasasDaLinhaDireita[0], proxCima, proxBaixo, proxEsquerda, proxDireita)

        todasAsCasasDaColunaAcima.forEach(element => {

            var atualIndex = todasAsCasasDaColunaAcima.indexOf(element);
            var anterior = elementoAnterior(atualIndex, todasAsCasasDaColunaAcima);

            if (anterior != null && anterior.classList.contains('avaiableMovement')){
                element.classList.add('avaiableMovement')} else {null}

            if (anterior != null && anterior.classList.contains('occupiedBlack')){
                element.classList.remove('avaiableMovement')} else {null}

            if (element.classList.contains('avaiableMovement')) {
                element.addEventListener('click', jogadaTorreBranca, {once : true})} 

            if (element.classList.contains('occupiedBlack') && element.classList.contains('avaiableMovement')) {
                element.classList.add('red')} else {null}

            if (element.classList.contains('occupiedWhite')){
                element.classList.remove('avaiableMovement')} else {null}
        });

        todasAsCasasDaColunaAbaixo.forEach(element => {

            var atualIndex = todasAsCasasDaColunaAbaixo.indexOf(element);
            var anterior = elementoAnterior(atualIndex, todasAsCasasDaColunaAbaixo);

            if (anterior != null && anterior.classList.contains('avaiableMovement')){
                element.classList.add('avaiableMovement')} else {null}

            if (anterior != null && anterior.classList.contains('occupiedBlack')){
                element.classList.remove('avaiableMovement')} else {null}

            if (element.classList.contains('avaiableMovement')) {
                element.addEventListener('click', jogadaTorreBranca, {once : true})}

            if (element.classList.contains('occupiedBlack') && element.classList.contains('avaiableMovement')) {
                element.classList.add('red')} else {null}

            if (element.classList.contains('occupiedWhite')){
                element.classList.remove('avaiableMovement')} else {null}
        });

        todasAsCasasDaLinhaEsquerda.forEach(element => {

            var atualIndex = todasAsCasasDaLinhaEsquerda.indexOf(element);
            var anterior = elementoAnterior(atualIndex, todasAsCasasDaLinhaEsquerda);

            if (anterior != null && anterior.classList.contains('avaiableMovement')){
                element.classList.add('avaiableMovement')} else {null}

            if (anterior != null && anterior.classList.contains('occupiedBlack')){
                element.classList.remove('avaiableMovement');} else {null}

            if (element.classList.contains('avaiableMovement')) {
                element.addEventListener('click', jogadaTorreBranca, {once : true})}

            if (element.classList.contains('occupiedBlack') && element.classList.contains('avaiableMovement')) {
                element.classList.add('red')} else {null}

            if (element.classList.contains('occupiedWhite')){
                element.classList.remove('avaiableMovement')} else {null}
        });

        todasAsCasasDaLinhaDireita.forEach(element => {

            var atualIndex = todasAsCasasDaLinhaDireita.indexOf(element);
            var anterior = elementoAnterior(atualIndex, todasAsCasasDaLinhaDireita);

            if (anterior != null && anterior.classList.contains('avaiableMovement')){
                element.classList.add('avaiableMovement')} else {null}

            if (anterior != null && anterior.classList.contains('occupiedBlack') || anterior != null && anterior.classList.contains('occupiedWhite')){
                element.classList.remove('avaiableMovement')} else {null}

            if (element.classList.contains('avaiableMovement')) {
                element.addEventListener('click', jogadaTorreBranca, {once : true})} 

            if (element.classList.contains('occupiedBlack') && element.classList.contains('avaiableMovement')) {
                element.classList.add('red')} else {null}

            if (element.classList.contains('occupiedWhite')){
                element.classList.remove('avaiableMovement')} else {null}
        });
        if (checarAvaiableMovement().length == 0) {chessboard.addEventListener('click', game, {once : true}), 50} else {null}}
    
        if (posiçãoSelecionada.innerHTML == "♗") {

            posiçãoSelecionada.classList.add('onFocus')
    
            var todasAsCasasDaDDC = casasDiagonalDireitaCima(todosOsFilhosAnteriores)
            var todasAsCasasDaDDB = casasDiagonalDireitaBaixo(todosOsFilhosPosteriores)
            var todasAsCasasDEC = casasDiagonalEsquerdaCima(todosOsFilhosAnteriores)
            var todasAsCasasDEB = casasDiagonalEsquerdaBaixo(todosOsFilhosPosteriores)
    
            var proxCima = todasAsCasasDaDDC[0]
            var proxBaixo = todasAsCasasDaDDB[0]
            var proxEsquerda = todasAsCasasDEC[0]
            var proxDireita = todasAsCasasDEB[0]
    
            classeFirstCasaBranco(todasAsCasasDaDDC[0], todasAsCasasDaDDB[0], todasAsCasasDEC[0], todasAsCasasDEB[0], proxCima, proxBaixo, proxEsquerda, proxDireita)
    
            todasAsCasasDaDDC.forEach(element => {
    
                var atualIndex = todasAsCasasDaDDC.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDaDDC);
    
                if (anterior != null && anterior.classList.contains('avaiableMovement')){
                    element.classList.add('avaiableMovement')} else {null}
    
                if (anterior != null && anterior.classList.contains('occupiedBlack')){
                    element.classList.remove('avaiableMovement')} else {null}
    
                if (element.classList.contains('avaiableMovement')) {
                    element.addEventListener('click', jogadaBispoBranco, {once : true})} 
    
                if (element.classList.contains('occupiedBlack') && element.classList.contains('avaiableMovement')) {
                    element.classList.add('red')} else {null}
    
                if (element.classList.contains('occupiedWhite')){
                    element.classList.remove('avaiableMovement')} else {null}
            });
    
            todasAsCasasDaDDB.forEach(element => {
    
                var atualIndex = todasAsCasasDaDDB.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDaDDB);
    
                if (anterior != null && anterior.classList.contains('avaiableMovement')){
                    element.classList.add('avaiableMovement')} else {null}
    
                if (anterior != null && anterior.classList.contains('occupiedBlack')){
                    element.classList.remove('avaiableMovement')} else {null}
    
                if (element.classList.contains('avaiableMovement')) {
                    element.addEventListener('click', jogadaBispoBranco, {once : true})}
    
                if (element.classList.contains('occupiedBlack') && element.classList.contains('avaiableMovement')) {
                    element.classList.add('red')} else {null}
    
                if (element.classList.contains('occupiedWhite')){
                    element.classList.remove('avaiableMovement')} else {null}
            });
    
            todasAsCasasDEC.forEach(element => {
    
                var atualIndex = todasAsCasasDEC.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDEC);
    
                if (anterior != null && anterior.classList.contains('avaiableMovement')){
                    element.classList.add('avaiableMovement')} else {null}
    
                if (anterior != null && anterior.classList.contains('occupiedBlack')){
                    element.classList.remove('avaiableMovement');} else {null}
    
                if (element.classList.contains('avaiableMovement')) {
                    element.addEventListener('click', jogadaBispoBranco, {once : true})}
    
                if (element.classList.contains('occupiedBlack') && element.classList.contains('avaiableMovement')) {
                    element.classList.add('red')} else {null}
    
                if (element.classList.contains('occupiedWhite')){
                    element.classList.remove('avaiableMovement')} else {null}
            });
    
            todasAsCasasDEB.forEach(element => {
    
                var atualIndex = todasAsCasasDEB.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDEB);
    
                if (anterior != null && anterior.classList.contains('avaiableMovement')){
                    element.classList.add('avaiableMovement')} else {null}
    
                if (anterior != null && anterior.classList.contains('occupiedBlack') || anterior != null && anterior.classList.contains('occupiedWhite')){
                    element.classList.remove('avaiableMovement')} else {null}
    
                if (element.classList.contains('avaiableMovement')) {
                    element.addEventListener('click', jogadaBispoBranco, {once : true})} 
    
                if (element.classList.contains('occupiedBlack') && element.classList.contains('avaiableMovement')) {
                    element.classList.add('red')} else {null}
    
                if (element.classList.contains('occupiedWhite')){
                    element.classList.remove('avaiableMovement')} else {null}
            });
            if (checarAvaiableMovement().length == 0) {chessboard.addEventListener('click', game, {once : true}), 50} else {null}}

            if (posiçãoSelecionada.innerHTML == "♕") {

            posiçãoSelecionada.classList.add('onFocus')
    
            var todasAsCasasDaColunaAcima = casasColunaAcima(todosOsFilhosAnteriores)
            var todasAsCasasDaColunaAbaixo = casasColunaAbaixo(todosOsFilhosPosteriores)
            var todasAsCasasDaLinhaEsquerda = casasLinhaEsquerda(todosOsFilhosAnteriores)
            var todasAsCasasDaLinhaDireita = casasLinhaDireita(todosOsFilhosPosteriores)
            var todasAsCasasDaDDC = casasDiagonalDireitaCima(todosOsFilhosAnteriores)
            var todasAsCasasDaDDB = casasDiagonalDireitaBaixo(todosOsFilhosPosteriores)
            var todasAsCasasDEC = casasDiagonalEsquerdaCima(todosOsFilhosAnteriores)
            var todasAsCasasDEB = casasDiagonalEsquerdaBaixo(todosOsFilhosPosteriores)
    
            var proxCima = todasAsCasasDaColunaAcima[0]
            var proxBaixo = todasAsCasasDaColunaAbaixo[0]
            var proxEsquerda = todasAsCasasDaLinhaEsquerda[0]
            var proxDireita = todasAsCasasDaLinhaDireita[0]
            var proxCimaD = todasAsCasasDaDDC[0]
            var proxBaixoD = todasAsCasasDaDDB[0]
            var proxEsquerdaD = todasAsCasasDEC[0]
            var proxDireitaD = todasAsCasasDEB[0]
    
            classeFirstCasaRainhaBranco(todasAsCasasDaColunaAcima[0], todasAsCasasDaColunaAbaixo[0], todasAsCasasDaLinhaEsquerda[0], todasAsCasasDaLinhaDireita[0],
                todasAsCasasDaDDC[0], todasAsCasasDaDDB[0], todasAsCasasDEC[0], todasAsCasasDEB[0], proxCima, proxBaixo, proxEsquerda, proxDireita, proxCimaD, proxBaixoD, proxEsquerdaD, proxDireitaD)
    
            todasAsCasasDaColunaAcima.forEach(element => {

            var atualIndex = todasAsCasasDaColunaAcima.indexOf(element);
            var anterior = elementoAnterior(atualIndex, todasAsCasasDaColunaAcima);

            if (anterior != null && anterior.classList.contains('avaiableMovement')){
                element.classList.add('avaiableMovement')} else {null}

            if (anterior != null && anterior.classList.contains('occupiedBlack')){
                element.classList.remove('avaiableMovement')} else {null}

            if (element.classList.contains('avaiableMovement')) {
                element.addEventListener('click', jogadaRainhaBranca, {once : true})} 

            if (element.classList.contains('occupiedBlack') && element.classList.contains('avaiableMovement')) {
                element.classList.add('red')} else {null}

            if (element.classList.contains('occupiedWhite')){
                element.classList.remove('avaiableMovement')} else {null}
        });

        todasAsCasasDaColunaAbaixo.forEach(element => {

            var atualIndex = todasAsCasasDaColunaAbaixo.indexOf(element);
            var anterior = elementoAnterior(atualIndex, todasAsCasasDaColunaAbaixo);

            if (anterior != null && anterior.classList.contains('avaiableMovement')){
                element.classList.add('avaiableMovement')} else {null}

            if (anterior != null && anterior.classList.contains('occupiedBlack')){
                element.classList.remove('avaiableMovement')} else {null}

            if (element.classList.contains('avaiableMovement')) {
                element.addEventListener('click', jogadaRainhaBranca, {once : true})}

            if (element.classList.contains('occupiedBlack') && element.classList.contains('avaiableMovement')) {
                element.classList.add('red')} else {null}

            if (element.classList.contains('occupiedWhite')){
                element.classList.remove('avaiableMovement')} else {null}
        });

        todasAsCasasDaLinhaEsquerda.forEach(element => {

            var atualIndex = todasAsCasasDaLinhaEsquerda.indexOf(element);
            var anterior = elementoAnterior(atualIndex, todasAsCasasDaLinhaEsquerda);

            if (anterior != null && anterior.classList.contains('avaiableMovement')){
                element.classList.add('avaiableMovement')} else {null}

            if (anterior != null && anterior.classList.contains('occupiedBlack')){
                element.classList.remove('avaiableMovement');} else {null}

            if (element.classList.contains('avaiableMovement')) {
                element.addEventListener('click', jogadaRainhaBranca, {once : true})}

            if (element.classList.contains('occupiedBlack') && element.classList.contains('avaiableMovement')) {
                element.classList.add('red')} else {null}

            if (element.classList.contains('occupiedWhite')){
                element.classList.remove('avaiableMovement')} else {null}
        });

        todasAsCasasDaLinhaDireita.forEach(element => {

            var atualIndex = todasAsCasasDaLinhaDireita.indexOf(element);
            var anterior = elementoAnterior(atualIndex, todasAsCasasDaLinhaDireita);

            if (anterior != null && anterior.classList.contains('avaiableMovement')){
                element.classList.add('avaiableMovement')} else {null}

            if (anterior != null && anterior.classList.contains('occupiedBlack') || anterior != null && anterior.classList.contains('occupiedWhite')){
                element.classList.remove('avaiableMovement')} else {null}

            if (element.classList.contains('avaiableMovement')) {
                element.addEventListener('click', jogadaRainhaBranca, {once : true})} 

            if (element.classList.contains('occupiedBlack') && element.classList.contains('avaiableMovement')) {
                element.classList.add('red')} else {null}

            if (element.classList.contains('occupiedWhite')){
                element.classList.remove('avaiableMovement')} else {null}
        });

            todasAsCasasDaDDC.forEach(element => {
    
                var atualIndex = todasAsCasasDaDDC.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDaDDC);
    
                if (anterior != null && anterior.classList.contains('avaiableMovement')){
                    element.classList.add('avaiableMovement')} else {null}
    
                if (anterior != null && anterior.classList.contains('occupiedBlack')){
                    element.classList.remove('avaiableMovement')} else {null}
    
                if (element.classList.contains('avaiableMovement')) {
                    element.addEventListener('click', jogadaRainhaBranca, {once : true})} 
    
                if (element.classList.contains('occupiedBlack') && element.classList.contains('avaiableMovement')) {
                    element.classList.add('red')} else {null}
    
                if (element.classList.contains('occupiedWhite')){
                    element.classList.remove('avaiableMovement')} else {null}
            });
    
            todasAsCasasDaDDB.forEach(element => {
    
                var atualIndex = todasAsCasasDaDDB.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDaDDB);
    
                if (anterior != null && anterior.classList.contains('avaiableMovement')){
                    element.classList.add('avaiableMovement')} else {null}
    
                if (anterior != null && anterior.classList.contains('occupiedBlack')){
                    element.classList.remove('avaiableMovement')} else {null}
    
                if (element.classList.contains('avaiableMovement')) {
                    element.addEventListener('click', jogadaRainhaBranca, {once : true})}
    
                if (element.classList.contains('occupiedBlack') && element.classList.contains('avaiableMovement')) {
                    element.classList.add('red')} else {null}
    
                if (element.classList.contains('occupiedWhite')){
                    element.classList.remove('avaiableMovement')} else {null}
            });
    
            todasAsCasasDEC.forEach(element => {
    
                var atualIndex = todasAsCasasDEC.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDEC);
    
                if (anterior != null && anterior.classList.contains('avaiableMovement')){
                    element.classList.add('avaiableMovement')} else {null}
    
                if (anterior != null && anterior.classList.contains('occupiedBlack')){
                    element.classList.remove('avaiableMovement');} else {null}
    
                if (element.classList.contains('avaiableMovement')) {
                    element.addEventListener('click', jogadaRainhaBranca, {once : true})}
    
                if (element.classList.contains('occupiedBlack') && element.classList.contains('avaiableMovement')) {
                    element.classList.add('red')} else {null}
    
                if (element.classList.contains('occupiedWhite')){
                    element.classList.remove('avaiableMovement')} else {null}
            });
    
            todasAsCasasDEB.forEach(element => {
    
                var atualIndex = todasAsCasasDEB.indexOf(element);
                var anterior = elementoAnterior(atualIndex, todasAsCasasDEB);
    
                if (anterior != null && anterior.classList.contains('avaiableMovement')){
                    element.classList.add('avaiableMovement')} else {null}
    
                if (anterior != null && anterior.classList.contains('occupiedBlack') || anterior != null && anterior.classList.contains('occupiedWhite')){
                    element.classList.remove('avaiableMovement')} else {null}
    
                if (element.classList.contains('avaiableMovement')) {
                    element.addEventListener('click', jogadaRainhaBranca, {once : true})} 
    
                if (element.classList.contains('occupiedBlack') && element.classList.contains('avaiableMovement')) {
                    element.classList.add('red')} else {null}
    
                if (element.classList.contains('occupiedWhite')){
                    element.classList.remove('avaiableMovement')} else {null}
            });
            if (checarAvaiableMovement().length == 0) {chessboard.addEventListener('click', game, {once : true}), 50} else {null}}

    }


    if (chessboard.classList[1] == 'turnoPreto') {
        if (posiçãoSelecionada.innerHTML != "♜"
        // trocar conforme for fazendo as peças, só para o jogo nao bugar
        ) {chessboard.addEventListener('click', game, {once : true}), 50} else {null}
        //torre preta
        if (posiçãoSelecionada.innerHTML == "♜") {
        
            posiçãoSelecionada.classList.add('onFocus')

            var todasAsCasasDaColunaAcima = casasColunaAcima(todosOsFilhosAnteriores)
            var todasAsCasasDaColunaAbaixo = casasColunaAbaixo(todosOsFilhosPosteriores)
            var todasAsCasasDaLinhaEsquerda = casasLinhaEsquerda(todosOsFilhosAnteriores)
            var todasAsCasasDaLinhaDireita = casasLinhaDireita(todosOsFilhosPosteriores)

            var proxCima = todasAsCasasDaColunaAcima[0]
            var proxBaixo = todasAsCasasDaColunaAbaixo[0]
            var proxEsquerda = todasAsCasasDaLinhaEsquerda[0]
            var proxDireita = todasAsCasasDaLinhaDireita[0]

            classeFirstCasaPreto(todasAsCasasDaColunaAcima[0], todasAsCasasDaColunaAbaixo[0], todasAsCasasDaLinhaEsquerda[0], todasAsCasasDaLinhaDireita[0], proxCima, proxBaixo, proxEsquerda, proxDireita)

            todasAsCasasDaColunaAcima.forEach(element => {

            var atualIndex = todasAsCasasDaColunaAcima.indexOf(element);
            var anterior = elementoAnterior(atualIndex, todasAsCasasDaColunaAcima);

            if (anterior != null && anterior.classList.contains('avaiableMovement')){
            element.classList.add('avaiableMovement')} else {null}

            if (anterior != null && anterior.classList.contains('occupiedWhite')){
            element.classList.remove('avaiableMovement')} else {null}

            if (element.classList.contains('avaiableMovement')) {
            element.addEventListener('click', jogadaTorrePreta, {once : true})} 

            if (element.classList.contains('occupiedWhite') && element.classList.contains('avaiableMovement')) {
            element.classList.add('red')} else {null}

            if (element.classList.contains('occupiedBlack')){
            element.classList.remove('avaiableMovement')} else {null}
            });

            todasAsCasasDaColunaAbaixo.forEach(element => {

            var atualIndex = todasAsCasasDaColunaAbaixo.indexOf(element);
            var anterior = elementoAnterior(atualIndex, todasAsCasasDaColunaAbaixo);

            if (anterior != null && anterior.classList.contains('avaiableMovement')){
            element.classList.add('avaiableMovement')} else {null}

            if (anterior != null && anterior.classList.contains('occupiedWhite')){
            element.classList.remove('avaiableMovement')} else {null}

            if (element.classList.contains('avaiableMovement')) {
                element.addEventListener('click', jogadaTorrePreta, {once : true})}
            
            if (element.classList.contains('occupiedWhite') && element.classList.contains('avaiableMovement')) {
                element.classList.add('red')} else {null}
            
            if (element.classList.contains('occupiedBlack')){
                element.classList.remove('avaiableMovement')} else {null}
            });
        
            todasAsCasasDaLinhaEsquerda.forEach(element => {
        
            var atualIndex = todasAsCasasDaLinhaEsquerda.indexOf(element);
            var anterior = elementoAnterior(atualIndex, todasAsCasasDaLinhaEsquerda);
        
            if (anterior != null && anterior.classList.contains('avaiableMovement')){
                element.classList.add('avaiableMovement')} else {null}
            
            if (anterior != null && anterior.classList.contains('occupiedWhite')){
                element.classList.remove('avaiableMovement');} else {null}
            
            if (element.classList.contains('avaiableMovement')) {
                element.addEventListener('click', jogadaTorrePreta, {once : true})}
            
            if (element.classList.contains('occupiedWhite') && element.classList.contains('avaiableMovement')) {
                element.classList.add('red')} else {null}
            
            if (element.classList.contains('occupiedBlack')){
                element.classList.remove('avaiableMovement')} else {null}
            });
        
            todasAsCasasDaLinhaDireita.forEach(element => {
        
            var atualIndex = todasAsCasasDaLinhaDireita.indexOf(element);
            var anterior = elementoAnterior(atualIndex, todasAsCasasDaLinhaDireita);
        
            if (anterior != null && anterior.classList.contains('avaiableMovement')){
                element.classList.add('avaiableMovement')} else {null}
            
            if (anterior != null && anterior.classList.contains('occupiedWhite') || anterior != null && anterior.classList.contains('occupiedWhite')){
                element.classList.remove('avaiableMovement')} else {null}
            
            if (element.classList.contains('avaiableMovement')) {
                element.addEventListener('click', jogadaTorrePreta, {once : true})} 
            
            if (element.classList.contains('occupiedWhite') && element.classList.contains('avaiableMovement')) {
                element.classList.add('red')} else {null}
            
            if (element.classList.contains('occupiedBlack')){
                element.classList.remove('avaiableMovement')} else {null}
            });
            if (checarAvaiableMovement().length == 0) {chessboard.addEventListener('click', game, {once : true}), 50} else {null}}
    
            if (posiçãoSelecionada.innerHTML == "♝") {

                posiçãoSelecionada.classList.add('onFocus')
        
                var todasAsCasasDaDDC = casasDiagonalDireitaCima(todosOsFilhosAnteriores)
                var todasAsCasasDaDDB = casasDiagonalDireitaBaixo(todosOsFilhosPosteriores)
                var todasAsCasasDEC = casasDiagonalEsquerdaCima(todosOsFilhosAnteriores)
                var todasAsCasasDEB = casasDiagonalEsquerdaBaixo(todosOsFilhosPosteriores)
        
                var proxCima = todasAsCasasDaDDC[0]
                var proxBaixo = todasAsCasasDaDDB[0]
                var proxEsquerda = todasAsCasasDEC[0]
                var proxDireita = todasAsCasasDEB[0]
        
                classeFirstCasaPreto(todasAsCasasDaDDC[0], todasAsCasasDaDDB[0], todasAsCasasDEC[0], todasAsCasasDEB[0], proxCima, proxBaixo, proxEsquerda, proxDireita)
        
                todasAsCasasDaDDC.forEach(element => {
        
                    var atualIndex = todasAsCasasDaDDC.indexOf(element);
                    var anterior = elementoAnterior(atualIndex, todasAsCasasDaDDC);
        
                    if (anterior != null && anterior.classList.contains('avaiableMovement')){
                        element.classList.add('avaiableMovement')} else {null}
        
                    if (anterior != null && anterior.classList.contains('occupiedWhite')){
                        element.classList.remove('avaiableMovement')} else {null}
        
                    if (element.classList.contains('avaiableMovement')) {
                        element.addEventListener('click', jogadaBispoPreto, {once : true})} 
        
                    if (element.classList.contains('occupiedWhite') && element.classList.contains('avaiableMovement')) {
                        element.classList.add('red')} else {null}
        
                    if (element.classList.contains('occupiedBlack')){
                        element.classList.remove('avaiableMovement')} else {null}
                });
        
                todasAsCasasDaDDB.forEach(element => {
        
                    var atualIndex = todasAsCasasDaDDB.indexOf(element);
                    var anterior = elementoAnterior(atualIndex, todasAsCasasDaDDB);
        
                    if (anterior != null && anterior.classList.contains('avaiableMovement')){
                        element.classList.add('avaiableMovement')} else {null}
        
                    if (anterior != null && anterior.classList.contains('occupiedWhite')){
                        element.classList.remove('avaiableMovement')} else {null}
        
                    if (element.classList.contains('avaiableMovement')) {
                        element.addEventListener('click', jogadaBispoPreto, {once : true})}
        
                    if (element.classList.contains('occupiedWhite') && element.classList.contains('avaiableMovement')) {
                        element.classList.add('red')} else {null}
        
                    if (element.classList.contains('occupiedBlack')){
                        element.classList.remove('avaiableMovement')} else {null}
                });
        
                todasAsCasasDEC.forEach(element => {
        
                    var atualIndex = todasAsCasasDEC.indexOf(element);
                    var anterior = elementoAnterior(atualIndex, todasAsCasasDEC);
        
                    if (anterior != null && anterior.classList.contains('avaiableMovement')){
                        element.classList.add('avaiableMovement')} else {null}
        
                    if (anterior != null && anterior.classList.contains('occupiedWhite')){
                        element.classList.remove('avaiableMovement');} else {null}
        
                    if (element.classList.contains('avaiableMovement')) {
                        element.addEventListener('click', jogadaBispoPreto, {once : true})}
        
                    if (element.classList.contains('occupiedWhite') && element.classList.contains('avaiableMovement')) {
                        element.classList.add('red')} else {null}
        
                    if (element.classList.contains('occupiedBlack')){
                        element.classList.remove('avaiableMovement')} else {null}
                });
        
                todasAsCasasDEB.forEach(element => {
        
                    var atualIndex = todasAsCasasDEB.indexOf(element);
                    var anterior = elementoAnterior(atualIndex, todasAsCasasDEB);
        
                    if (anterior != null && anterior.classList.contains('avaiableMovement')){
                        element.classList.add('avaiableMovement')} else {null}
        
                    if (anterior != null && anterior.classList.contains('occupiedWhite') || anterior != null && anterior.classList.contains('occupiedWhite')){
                        element.classList.remove('avaiableMovement')} else {null}
        
                    if (element.classList.contains('avaiableMovement')) {
                        element.addEventListener('click', jogadaBispoPreto, {once : true})} 
        
                    if (element.classList.contains('occupiedWhite') && element.classList.contains('avaiableMovement')) {
                        element.classList.add('red')} else {null}
        
                    if (element.classList.contains('occupiedBlack')){
                        element.classList.remove('avaiableMovement')} else {null}
                });
                if (checarAvaiableMovement().length == 0) {chessboard.addEventListener('click', game, {once : true}), 50} else {null}}

        } else {null}
}

chessboard.addEventListener('click', game, {once : true})

    // // var todasAsCasasDaColunaAcima = casasColunaAcima(todosOsFilhosAnteriores)
    // // console.log(todasAsCasasDaColunaAcima)
    // // // torre
    // // // rainha
    // // // apenas uma casa: rei e peao = todasAsCasasDaColunaAcima[0]

    // // var todasAsCasasDaColunaAbaixo = casasColunaAbaixo(todosOsFilhosPosteriores)
    // // console.log(todasAsCasasDaColunaAbaixo)
    // // // torre
    // // // rainha
    // // // apenas uma casa: rei e peao = todasAsCasasDaColunaAbaixo[0]

    // // var todasAsCasasDaLinhaEsquerda = casasLinhaEsquerda(todosOsFilhosAnteriores)
    // // console.log(todasAsCasasDaLinhaEsquerda);
    // // // torre
    // // // rainha
    // // // apenas uma casa: rei = todasAsCasasDaLinhaEsquerda[0]

    // // var todasAsCasasDaLinhaDireita = casasLinhaDireita(todosOsFilhosPosteriores)
    // // console.log(todasAsCasasDaLinhaDireita)
    // // // torre
    // // // rainha
    // // // apenas uma casa: rei = todasAsCasasDaLinhaDireita[0]

    // // var todasAsCasasDiagonalDiretaCima = casasDiagonalDireitaCima(todosOsFilhosAnteriores)
    // // console.log(todasAsCasasDiagonalDiretaCima)
    // // // bispo
    // // // rainha
    // // // apenas uma casa: rei e peao = todasAsCasasDiagonalDiretaCima[0]

    // // var todasAsCasasDiagonalDiretaBaixo = casasDiagonalDireitaBaixo(todosOsFilhosPosteriores)
    // // console.log(todasAsCasasDiagonalDiretaBaixo)
    // // // bispo
    // // // rainha
    // // // apenas uma casa: rei e peao = todasAsCasasDiagonalDiretaBaixo[0]

    // // var todasAsCasasDiagonalEsquerdaCima = casasDiagonalEsquerdaCima(todosOsFilhosAnteriores)
    // // console.log(todasAsCasasDiagonalEsquerdaCima)
    // // // bispo
    // // // rainha
    // // // apenas uma casa: rei e peao = todasAsCasasDiagonalEsquerdaCima[0]

    // // var todasAsCasasDiagonalEsquerdaBaixo = casasDiagonalEsquerdaBaixo(todosOsFilhosPosteriores)
    // // console.log(todasAsCasasDiagonalEsquerdaBaixo)
    // // // bispo
    // // // rainha
    // // // apenas uma casa: rei e peao = todasAsCasasDiagonalEsquerdaBaixo[0]




//     while (n < casasDiEs.length){

//         var elementoAtual = casasDiEs[n]
//         var elementoAnterior = casasDiEs[n - 1]

//         console.log(elementoAtual);
//         console.log(elementoAnterior);

//         if (elementoAtual.classList.contains('l1')){
//             elementoAtual.style.backgroundColor = 'onFocus'
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