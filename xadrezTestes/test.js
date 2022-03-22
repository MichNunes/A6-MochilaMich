var chessboard = document.getElementById('chessboard')

var siblings = Array.from(chessboard.children);

var aux;

// console.log(siblings)

function umaCasaAcima(parameter) {
    var indexElemento = siblings.indexOf(parameter);
    var indexUmaCasaAcima = indexElemento - 8;
    var casa = siblings[indexUmaCasaAcima];
return casa;}

function duasCasasAcima(parameter) {
    var indexElemento = siblings.indexOf(parameter);
    var indexDuasCasasAcima = indexElemento - 16;
    var casa = siblings[indexDuasCasasAcima];
    return casa;}

function tresCasasAcima(parameter) {
    var indexElemento = siblings.indexOf(parameter);
    var indexTresCasasAcima = indexElemento - 24;
    var casa = siblings[indexTresCasasAcima];
    return casa;}

function quatroCasasAcima(parameter) {
    var indexElemento = siblings.indexOf(parameter);
    var indexQuatroCasasAcima = indexElemento - 32;
    var casa = siblings[indexQuatroCasasAcima];
    return casa;}

function cincoCasasAcima(parameter) {
    var indexElemento = siblings.indexOf(parameter);
    var indexCincoCasasAcima = indexElemento - 40;
    var casa = siblings[indexCincoCasasAcima];
    return casa;}

function seisCasasAcima(parameter) {
    var indexElemento = siblings.indexOf(parameter);
    var indexSeisCasasAcima = indexElemento - 48;
    var casa = siblings[indexSeisCasasAcima];
    return casa;}

function seteCasasAcima(parameter) {
    var indexElemento = siblings.indexOf(parameter);
    var indexSeteCasasAcima = indexElemento - 56;
    var casa = siblings[indexSeteCasasAcima];
    return casa;}




function umaCasaAbaixo(parameter) {
    var indexElemento = siblings.indexOf(parameter);
    var indexUmaCasaAcima = indexElemento + 8;
    var casa = siblings[indexUmaCasaAcima];
return casa;}

function duasCasasAbaixo(parameter) {
    var indexElemento = siblings.indexOf(parameter);
    var indexDuasCasasAcima = indexElemento + 16;
    var casa = siblings[indexDuasCasasAcima];
    return casa;}

function tresCasasAbaixo(parameter) {
    var indexElemento = siblings.indexOf(parameter);
    var indexTresCasasAcima = indexElemento + 24;
    var casa = siblings[indexTresCasasAcima];
    return casa;}

function quatroCasasAbaixo(parameter) {
    var indexElemento = siblings.indexOf(parameter);
    var indexQuatroCasasAcima = indexElemento + 32;
    var casa = siblings[indexQuatroCasasAcima];
    return casa;}

function cincoCasasAbaixo(parameter) {
    var indexElemento = siblings.indexOf(parameter);
    var indexCincoCasasAcima = indexElemento + 40;
    var casa = siblings[indexCincoCasasAcima];
    return casa;}

function seisCasasAbaixo(parameter) {
    var indexElemento = siblings.indexOf(parameter);
    var indexSeisCasasAcima = indexElemento + 48;
    var casa = siblings[indexSeisCasasAcima];
    return casa;}

function seteCasasAbaixo(parameter) {
    var indexElemento = siblings.indexOf(parameter);
    var indexSeteCasasAcima = indexElemento + 56;
    var casa = siblings[indexSeteCasasAcima];
    return casa;}





// function diagonal1DireitaCima(parameter) {
//     var indexElemento = siblings.indexOf(parameter);
//     var indexUmaCasaAcima = indexElemento - 7;
//     var casa = siblings[indexUmaCasaAcima];
// return casa;}

// function diagonal2DireitaCima(parameter) {
//     var indexElemento = siblings.indexOf(parameter);
//     var indexDuasCasasAcima = indexElemento - 14;
//     var casa = siblings[indexDuasCasasAcima];
//     return casa;}

// function diagonal3DireitaCima(parameter) {
//     var indexElemento = siblings.indexOf(parameter);
//     var indexTresCasasAcima = indexElemento - 21;
//     var casa = siblings[indexTresCasasAcima];
//     return casa;}

// function diagonal4DireitaCima(parameter) {
//     var indexElemento = siblings.indexOf(parameter);
//     var indexQuatroCasasAcima = indexElemento - 28;
//     var casa = siblings[indexQuatroCasasAcima];
//     return casa;}

// function diagonal5DireitaCima(parameter) {
//     var indexElemento = siblings.indexOf(parameter);
//     var indexCincoCasasAcima = indexElemento - 35;
//     var casa = siblings[indexCincoCasasAcima];
//     return casa;}

// function diagonal6DireitaCima(parameter) {
//     var indexElemento = siblings.indexOf(parameter);
//     var indexSeisCasasAcima = indexElemento - 42;
//     var casa = siblings[indexSeisCasasAcima];
//     return casa;}

// function diagonal7DireitaCima(parameter) {
//     var indexElemento = siblings.indexOf(parameter);
//     var indexSeteCasasAcima = indexElemento - 49;
//     var casa = siblings[indexSeteCasasAcima];
//     return casa;}

// function diagonal1DireitaAbaixo(parameter) {
//     var indexElemento = siblings.indexOf(parameter);
//     var indexUmaCasaAcima = indexElemento + 9;
//     var casa = siblings[indexUmaCasaAcima];
// return casa;}

// function diagonal2DireitaAbaixo(parameter) {
//     var indexElemento = siblings.indexOf(parameter);
//     var indexDuasCasasAcima = indexElemento + 18;
//     var casa = siblings[indexDuasCasasAcima];
//     return casa;}

// function diagonal3DireitaAbaixo(parameter) {
//     var indexElemento = siblings.indexOf(parameter);
//     var indexTresCasasAcima = indexElemento + 27;
//     var casa = siblings[indexTresCasasAcima];
//     return casa;}

// function diagonal4DireitaAbaixo(parameter) {
//     var indexElemento = siblings.indexOf(parameter);
//     var indexQuatroCasasAcima = indexElemento + 36;
//     var casa = siblings[indexQuatroCasasAcima];
//     return casa;}

// function diagonal5DireitaAbaixo(parameter) {
//     var indexElemento = siblings.indexOf(parameter);
//     var indexCincoCasasAcima = indexElemento + 45;
//     var casa = siblings[indexCincoCasasAcima];
//     return casa;}

// function diagonal6DireitaAbaixo(parameter) {
//     var indexElemento = siblings.indexOf(parameter);
//     var indexSeisCasasAcima = indexElemento + 54;
//     var casa = siblings[indexSeisCasasAcima];
//     return casa;}

// function diagonal7DireitaAbaixo(parameter) {
//     var indexElemento = siblings.indexOf(parameter);
//     var indexSeteCasasAcima = indexElemento + 63;
//     var casa = siblings[indexSeteCasasAcima];
//     return casa;}

function umaCasaDireita(parameter) {
        var indexElemento = siblings.indexOf(parameter);
        var indexCasa = indexElemento + 1;
        var casa = siblings[indexCasa];
        return casa;}

function duasCasaDireita(parameter) {
        var indexElemento = siblings.indexOf(parameter);
        var indexCasa = indexElemento + 2;
        var casa = siblings[indexCasa];
        return casa;}

function tresCasaDireita(parameter) {
        var indexElemento = siblings.indexOf(parameter);
        var indexCasa = indexElemento + 3;
        var casa = siblings[indexCasa];
        return casa;}

function quatroCasaDireita(parameter) {
        var indexElemento = siblings.indexOf(parameter);
        var indexCasa = indexElemento + 4;
        var casa = siblings[indexCasa];
        return casa;}

function cincoCasaDireita(parameter) {
        var indexElemento = siblings.indexOf(parameter);
        var indexCasa = indexElemento + 5;
        var casa = siblings[indexCasa];
        return casa;}

function seisCasaDireita(parameter) {
        var indexElemento = siblings.indexOf(parameter);
        var indexCasa = indexElemento + 6;
        var casa = siblings[indexCasa];
        return casa;}

function seteCasaDireita(parameter) {
        var indexElemento = siblings.indexOf(parameter);
        var indexCasa = indexElemento + 7;
        var casa = siblings[indexCasa];
        return casa;}




function umaCasaEsquerda(parameter) {
        var indexElemento = siblings.indexOf(parameter);
        var indexCasa = indexElemento - 1;
        var casa = siblings[indexCasa];
        return casa;}

function duasCasaEsquerda(parameter) {
        var indexElemento = siblings.indexOf(parameter);
        var indexCasa = indexElemento - 2;
        var casa = siblings[indexCasa];
        return casa;}

function tresCasaEsquerda(parameter) {
        var indexElemento = siblings.indexOf(parameter);
        var indexCasa = indexElemento - 3;
        var casa = siblings[indexCasa];
        return casa;}

function quatroCasaEsquerda(parameter) {
        var indexElemento = siblings.indexOf(parameter);
        var indexCasa = indexElemento - 4;
        var casa = siblings[indexCasa];
        return casa;}

function cincoCasaEsquerda(parameter) {
        var indexElemento = siblings.indexOf(parameter);
        var indexCasa = indexElemento - 5;
        var casa = siblings[indexCasa];
        return casa;}

function seisCasaEsquerda(parameter) {
        var indexElemento = siblings.indexOf(parameter);
        var indexCasa = indexElemento - 6;
        var casa = siblings[indexCasa];
        return casa;}

function seteCasaEsquerda(parameter) {
        var indexElemento = siblings.indexOf(parameter);
        var indexCasa = indexElemento - 7;
        var casa = siblings[indexCasa];
        return casa;}


function casasDireitaEsquerda(aux) {

    var arrayAux = []
    var umaCsDi;

    if (!!umaCasaDireita(aux)) {
    umaCsDi = umaCasaDireita(aux);
    arrayAux.push(umaCsDi)}
    var duasCsDi = duasCasaDireita(aux);
    var treCsDi = tresCasaDireita(aux);
    var quatroCsDi = quatroCasaDireita(aux);
    var cincoCsDi = cincoCasaDireita(aux);
    var seisCsDi = seisCasaDireita(aux);
    var seteCsDi = seteCasaDireita(aux);

    var umaCsEs = umaCasaEsquerda(aux);
    var duasCsEs = duasCasaEsquerda(aux);
    var tresCsEs = tresCasaEsquerda(aux);
    var quatroCsEs = quatroCasaEsquerda(aux);
    var cincoCsEs = cincoCasaEsquerda(aux);
    var seisCsEs = seisCasaEsquerda(aux);
    var seteCsEs = seteCasaEsquerda(aux);

    return arrayAux;
}


chessboard.addEventListener('click', (elemento) => {
    aux = elemento.path[0];

    var casasDiEs = casasDireitaEsquerda(aux)

    console.log(casasDiEs[0])})

//     var n = 0;

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


