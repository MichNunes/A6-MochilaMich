var documento = document.body;
var telaInicial = document.getElementById('telaInicial');
var eleAux = document.createElement("section");
    eleAux.setAttribute("id", "partidaEmAndamento");
                                    //faz a troca do elemento - novo, antigo
function removerTelaInicial()    {documento.replaceChild(eleAux, telaInicial);}
function retornarTelaInicial()   {documento.replaceChild(telaInicial, eleAux);}

documento.addEventListener("keydown", (tecla) => {
    var teclaPressionada = tecla.key;

    if (teclaPressionada == " " &   !!document.getElementById('partidaEmAndamento') === false){
                                    //volta apenas com uma confirmação de true ou false, confirmando se o elemento esta no documento
        console.log("Tenha uma boa partida!");
        zerarDados();
        removerTelaInicial();

    } else if (teclaPressionada == "Escape" & !!document.getElementById('telaInicial') === false){
        console.log("Exit");
        retornarTelaInicial();

    } else {console.log("Pressione ESPAÇO para iniciar o jogo ou ESCAPE para sair do jogo!")}
})

// var l1c1 = document.querySelector("#linha-1_coluna-1");
// l1c1.addEventListener("click", (evento) => evento.target.innerText = "X" );
// l1c1.addEventListener("dblclick", (evento) => evento.target.innerText = "O" ); 

// var l1c2 = document.querySelector("#linha-1_coluna-2");
// l1c2.addEventListener("click", (evento) => evento.target.innerText = "X" );
// l1c2.addEventListener("dblclick", (evento) => evento.target.innerText = "O" );

// var l1c3 = document.querySelector("#linha-1_coluna-3");
// l1c3.addEventListener("click", (evento) => evento.target.innerText = "X" );
// l1c3.addEventListener("dblclick", (evento) => evento.target.innerText = "O" );

// var l2c1 = document.querySelector("#linha-2_coluna-1");
// l2c1.addEventListener("click", (evento) => evento.target.innerText = "X" );
// l2c1.addEventListener("dblclick", (evento) => evento.target.innerText = "O" );

// var l2c2 = document.querySelector("#linha-2_coluna-2");
// l2c2.addEventListener("click", (evento) => evento.target.innerText = "X" );
// l2c2.addEventListener("dblclick", (evento) => evento.target.innerText = "O" );

// var l2c3 = document.querySelector("#linha-2_coluna-3");
// l2c3.addEventListener("click", (evento) => evento.target.innerText = "X" );
// l2c3.addEventListener("dblclick", (evento) => evento.target.innerText = "O" );

// var l3c1 = document.querySelector("#linha-3_coluna-1");
// l3c1.addEventListener("click", (evento) => evento.target.innerText = "X" );
// l3c1.addEventListener("dblclick", (evento) => evento.target.innerText = "O" );

// var l3c2 = document.querySelector("#linha-3_coluna-2");
// l3c2.addEventListener("click", (evento) => evento.target.innerText = "X" );
// l3c2.addEventListener("dblclick", (evento) => evento.target.innerText = "O" );

// var l3c3 = document.querySelector("#linha-3_coluna-3");
// l3c3.addEventListener("click", (evento) => evento.target.innerText = "X" );
// l3c3.addEventListener("dblclick", (evento) => evento.target.innerText = "O" );

var botao = document.querySelector('.botao')
botao.addEventListener("click", (evento) => {
    zerarDados(); 
    removerTelaInicial();
    return console.log("Tenha uma boa partida!");
})

lc = ['linha-1_coluna-1', 'linha-1_coluna-2', 'linha-1_coluna-3', 'linha-2_coluna-1', 'linha-2_coluna-2', 'linha-2_coluna-3', 'linha-3_coluna-1', 'linha-3_coluna-2', 'linha-3_coluna-3']
function zerarDados() {
    if (!!document.getElementById('telaInicial') === true) {
    var aux = "";
    lc.forEach(element => {
        var aux2 = document.getElementById(element);
        document.getElementById(element).innerText = aux;
        aux2.classList.remove('X');
        aux2.classList.remove('O');
    });
    
    }else {console.log('Hello World')}
}



var tabuleiro = document.querySelector(".tabuleiro");

var aux = tabuleiro.addEventListener('click', function clickEvento(evento) {
    evento.target.innerText = "X";
    if (evento.path[0].classList[1] == 'O') {
        evento.path[0].classList.remove('O');
        evento.path[0].classList.add('X')
    } else {evento.path[0].classList.add('X')}
    // console.log(evento.path[0].classList)
})

var aux2 = tabuleiro.addEventListener('dblclick', function dblclickEvento(evento) {
    if (evento.path[0].classList[1] == 'X') {
        evento.path[0].classList.remove('X');
        evento.path[0].classList.add('O')
    } else {evento.path[0].classList.add('O')}
    // console.log(evento.path[0].classList)
    evento.target.innerText = "O";
})



var aux3 = tabuleiro.addEventListener('dblclick', function vitoriaO(evento) {
    var l1c1 = document.getElementById("linha-1_coluna-1");
    var l1c2 = document.getElementById("linha-1_coluna-2");
    var l1c3 = document.getElementById("linha-1_coluna-3");
    var l2c1 = document.getElementById("linha-2_coluna-1");
    var l2c2 = document.getElementById("linha-2_coluna-2");
    var l2c3 = document.getElementById("linha-2_coluna-3");
    var l3c1 = document.getElementById("linha-3_coluna-1");
    var l3c2 = document.getElementById("linha-3_coluna-2");
    var l3c3 = document.getElementById("linha-3_coluna-3");

    // var aux = tabuleiro.childNodes[1].classList.value
    // var aux2 = [tabuleiro.childNodes[3].classList[0]]
    // var aux3 = [tabuleiro.childNodes[5].classList[0]]
    // if (evento.path[0].classList[1]){
    //     tabuleiro.childNodes[1].style.backgroundColor = 'red';
    // }
    // else {
    // console.log(aux)
    // // console.log(aux2)
    // console.log(aux3)}
    console.log(evento.path[0].classList.value)
})

// uma outra perspectiva:

// var documento = document.body;
// var tela = document.querySelector("#telaInicial");

// documento.addEventListener("keypress" , function(evento){ 

//     if(evento.code == "Space"){
//         tela.style.display = "none"      ---------------------
//     }                                    muito mais inteligente
//                                          do que como eu pensei kkkk
//     if(evento.code == "Enter"){          ----------------------
//         tela.style.display = "flex"
//     } 
// });

//     var tabuleiro = document.querySelector(".tabuleiro");
//     tabuleiro.addEventListener("click", (evento) => evento.target.innerText = "X" );
//     tabuleiro.addEventListener("dblclick", (evento) => evento.target.innerText = "O" );
//     DESSE JEITO O TABULEIRO QUEBRA SE VOCE CLICA NAS FRESTAS ENTRE OS QUADRADOS
