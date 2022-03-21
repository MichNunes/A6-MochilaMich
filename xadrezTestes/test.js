var chessboard = document.getElementById('chessboard')

var siblings = Array.from(chessboard.children);

var aux;

console.log(siblings)

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




chessboard.addEventListener('click', (elemento) => {
    aux = elemento.path[0];

    // if elemento.classList.contains('linha2') && duasCsDi.classList.contains('linha2'){
    //     duasCsDi.classList.add('avaiableMovement')
    // }
    // }
        

    var umaCsDi = umaCasaDireita(aux);
    console.log(umaCsDi)
    var duasCsDi = duasCasaDireita(aux);
    console.log(duasCsDi)
    var tressDi = tresCasaDireita(aux);
    console.log(tressDi)
    var quatroCsDi = quatroCasaDireita(aux);
    console.log(quatroCsDi)
    var cincoCsDi = cincoCasaDireita(aux);
    console.log(cincoCsDi)
    var seisCsDi = seisCasaDireita(aux);
    console.log(seisCsDi)
    var seteCsDi = seteCasaDireita(aux);
    console.log(seteCsDi)

    // var umaCsAc = umaCasaAcima(aux);
    // console.log(umaCsAc);
    // var duasCsAc = duasCasasAcima(aux);
    // console.log(duasCsAc);
    // var tresCsAc = tresCasasAcima(aux);
    // console.log(tresCsAc);
    // var quatroCsAc = quatroCasasAcima(aux);
    // console.log(quatroCsAc);
    // var cincoCsAc = cincoCasasAcima(aux);
    // console.log(cincoCsAc);
    // var seisCsAc = seisCasasAcima(aux);
    // console.log(seisCsAc);
    // var seteCsAc = seteCasasAcima(aux);
    // console.log(seteCsAc)

    // var umaCsAb = umaCasaAbaixo(aux);
    // console.log(umaCsAb);
    // var duasCsAb = duasCasasAbaixo(aux);
    // console.log(duasCsAb);
    // var tresCsAb = tresCasasAbaixo(aux);
    // console.log(tresCsAb);
    // var quatroCsAb = quatroCasasAbaixo(aux);
    // console.log(quatroCsAb);
    // var cincoCsAb = cincoCasasAbaixo(aux);
    // console.log(cincoCsAb);
    // var seisCsAb = seisCasasAbaixo(aux);
    // console.log(seisCsAb);
    // var seteCsAb = seteCasasAbaixo(aux);
    // console.log(seteCsAb)

    // var dia1DiCi = diagonal1DireitaCima(aux);
    // console.log(dia1DiCi);
    // var dia2DiCi = diagonal2DireitaCima(aux);
    // console.log(dia2DiCi);
    // var dia3DiCi = diagonal3DireitaCima(aux);
    // console.log(dia3DiCi);
    // var dia4DiCi = diagonal4DireitaCima(aux);
    // console.log(dia4DiCi);
    // var dia5DiCi = diagonal5DireitaCima(aux);
    // console.log(dia5DiCi);
    // var dia6DiCi = diagonal6DireitaCima(aux);
    // console.log(dia6DiCi);
    // var dia7DiCi = diagonal7DireitaCima(aux);
    // console.log(dia7DiCi)

    // var dia1DiCi = diagonal1DireitaAbaixo(aux);
    // console.log(dia1DiCi);
    // var dia2DiCi = diagonal2DireitaAbaixo(aux);
    // console.log(dia2DiCi);
    // var dia3DiCi = diagonal3DireitaAbaixo(aux);
    // console.log(dia3DiCi);
    // var dia4DiCi = diagonal4DireitaAbaixo(aux);
    // console.log(dia4DiCi);
    // var dia5DiCi = diagonal5DireitaAbaixo(aux);
    // console.log(dia5DiCi);
    // var dia6DiCi = diagonal6DireitaAbaixo(aux);
    // console.log(dia6DiCi);
    // var dia7DiCi = diagonal7DireitaAbaixo(aux);
    // console.log(dia7DiCi)
})

// var indexUmaCasaAcima = indexElemento - 8

// var umaCasaAcima = siblings[indexUmaCasaAcima];

// return umaCasaAcima;