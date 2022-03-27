var tabuleiro = document.getElementById('chessboard');
var posicao = Array.from(tabuleiro.children);
var brancosFora = [];
var pretosFora = [];
var reiEmCheque = [];

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
    c7.innerHTML = '♟'
    d5.innerHTML = '♟'
    e7.innerHTML = '♟'
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
    var aux = element
    if (aux.innerText == '♜' || aux.innerText == "♞" || aux.innerText == "♝" || aux.innerText == "♛" || aux.innerText == "♚" || aux.innerText == "♟") {
        aux.classList.add('occupiedBlack')} else {aux.classList.remove('occupiedBlack')}
    if (aux.innerText == '♖' || aux.innerText == "♘" || aux.innerText == "♗" || aux.innerText == "♕" || aux.innerText == "♔" || aux.innerText == "♙") {
        aux.classList.add('occupiedWhite')} else {aux.classList.remove('occupiedWhite')}
})};
organizarClasses()

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

function torreBranca(parameter) {

    reiEmCheque = [];
    posiçãoSelecionada = parameter.path[0];
    indexPosiçãoSelecionada = posicao.indexOf(posiçãoSelecionada);
    
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



function game(elemento) {

    if (elemento.path[0].innerHTML == "♖") {torreBranca(elemento)}
    
}

tabuleiro.addEventListener('contextmenu', e => {e.preventDefault();});

tabuleiro.addEventListener('click', () => {
removerClassList();
setTimeout(() => {
  tabuleiro.addEventListener('mousedown', game,  {once : true})
}, 300);})

tabuleiro.addEventListener('mousedown', game,  {once : true})

tabuleiro.addEventListener('mouseup', (aux) => {console.log(aux)})



var dragged;

/* events fired on the draggable target */
tabuleiro.addEventListener("drag", function(event) {}, false);

tabuleiro.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

tabuleiro.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
tabuleiro.addEventListener("dragover", function(event) {
  // prevent default to allow drop
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

    if (event.target.classList.contains("avaiableMovement")) {
        event.target.style.background = "";
        var aux = dragged.innerHTML
        event.target.innerHTML = aux
        if (aux == '♖' || aux == '♙' || aux == '♕' || aux == '♔' || aux == '♗' || aux == '♘'){
            brancosFora.push(aux)
        } else {pretosFora.push(aux)}
        dragged.innerHTML = '';
  }
  organizarClasses()
  var aux = torreBranca(event)
  removerClassList()
  setTimeout(() => {
    tabuleiro.addEventListener('mousedown', game,  {once : true});
  }, 300);
  console.log(aux)
}, false);