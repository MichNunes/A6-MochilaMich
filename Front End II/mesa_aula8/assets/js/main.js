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

var botao = document.querySelector('.botao')
botao.addEventListener("click", (evento) => {
    zerarDados(); 
    removerTelaInicial();
    return console.log("Tenha uma boa partida!");
})

lc = ['linha-1_coluna-1', 'linha-1_coluna-2', 'linha-1_coluna-3', 'linha-2_coluna-1', 'linha-2_coluna-2', 'linha-2_coluna-3', 'linha-3_coluna-1', 'linha-3_coluna-2', 'linha-3_coluna-3']
function zerarDados() {
    if (!!document.getElementById('telaInicial') === true) {
        var l1c1 = document.getElementById("linha-1_coluna-1");
    var l1c2 = document.getElementById("linha-1_coluna-2");
    var l1c3 = document.getElementById("linha-1_coluna-3");
    var l2c1 = document.getElementById("linha-2_coluna-1");
    var l2c2 = document.getElementById("linha-2_coluna-2");
    var l2c3 = document.getElementById("linha-2_coluna-3");
    var l3c1 = document.getElementById("linha-3_coluna-1");
    var l3c2 = document.getElementById("linha-3_coluna-2");
    var l3c3 = document.getElementById("linha-3_coluna-3");

        function removeBackgroundColor() {
            l1c1.style.backgroundColor = "";
            l1c2.style.backgroundColor = "";
            l1c3.style.backgroundColor = "";
            l2c1.style.backgroundColor = "";
            l2c2.style.backgroundColor = "";
            l2c3.style.backgroundColor = "";
            l3c1.style.backgroundColor = "";
            l3c2.style.backgroundColor = "";
            l3c3.style.backgroundColor = "";
    
        }
        removeBackgroundColor()
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

console.log(tabuleiro.childNodes[1])

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



var aux3 = tabuleiro.addEventListener('click', function vitoriaX(evento) {
    function removeBackgroundColor() {
        l1c1.style.backgroundColor = "";
        l1c2.style.backgroundColor = "";
        l1c3.style.backgroundColor = "";
        l2c1.style.backgroundColor = "";
        l2c2.style.backgroundColor = "";
        l2c3.style.backgroundColor = "";
        l3c1.style.backgroundColor = "";
        l3c2.style.backgroundColor = "";
        l3c3.style.backgroundColor = "";
    }
    var xxxxx = "X";
   if (evento.path[0].classList[1] === xxxxx === true) {
    var l1c1 = document.getElementById("linha-1_coluna-1");
    var l1c2 = document.getElementById("linha-1_coluna-2");
    var l1c3 = document.getElementById("linha-1_coluna-3");
    var l2c1 = document.getElementById("linha-2_coluna-1");
    var l2c2 = document.getElementById("linha-2_coluna-2");
    var l2c3 = document.getElementById("linha-2_coluna-3");
    var l3c1 = document.getElementById("linha-3_coluna-1");
    var l3c2 = document.getElementById("linha-3_coluna-2");
    var l3c3 = document.getElementById("linha-3_coluna-3");
    console.log(l1c1.classList[1]);
   }  else {console.log(evento)}
   
   if (l1c1.classList[1] == xxxxx && l1c2.classList[1] == xxxxx && l1c3.classList[1] == xxxxx) {
    l1c1.style.backgroundColor = "red";
    l1c2.style.backgroundColor = "red";
    l1c3.style.backgroundColor = "red";
    } else {console.log('l1x')}
    
    if (l2c1.classList[1] == xxxxx && l2c2.classList[1] == xxxxx && l2c3.classList[1] == xxxxx) {
        l2c1.style.backgroundColor = "red";
        l2c2.style.backgroundColor = "red";
        l2c3.style.backgroundColor = "red";
        } else {console.log('l2x')}
        
        if (l3c1.classList[1] == xxxxx && l3c2.classList[1] == xxxxx && l3c3.classList[1] == xxxxx) {
            l3c1.style.backgroundColor = "red";
            l3c2.style.backgroundColor = "red";
            l3c3.style.backgroundColor = "red";
            } else {
        console.log('l3x')
    }});

var aux4 = tabuleiro.addEventListener('dblclick', function vitoriaO(evento) {
        function removeBackgroundColor() {
            l1c1.style.backgroundColor = "";
            l1c2.style.backgroundColor = "";
            l1c3.style.backgroundColor = "";
        }
        var ooooo = "O";
       if (evento.path[0].classList[1] === ooooo === true) {
        var l1c1 = document.getElementById("linha-1_coluna-1");
        var l1c2 = document.getElementById("linha-1_coluna-2");
        var l1c3 = document.getElementById("linha-1_coluna-3");
        var l2c1 = document.getElementById("linha-2_coluna-1");
        var l2c2 = document.getElementById("linha-2_coluna-2");
        var l2c3 = document.getElementById("linha-2_coluna-3");
        var l3c1 = document.getElementById("linha-3_coluna-1");
        var l3c2 = document.getElementById("linha-3_coluna-2");
        var l3c3 = document.getElementById("linha-3_coluna-3");
       } if (l1c1.classList[1] == ooooo && l1c2.classList[1] == ooooo && l1c3.classList[1] == ooooo) {
        l1c1.style.backgroundColor = "red";
        l1c2.style.backgroundColor = "red";
        l1c3.style.backgroundColor = "red";
        } if (l2c1.classList[1] == ooooo && l2c2.classList[1] == ooooo && l2c3.classList[1] == ooooo) {
            l2c1.style.backgroundColor = "red";
            l2c2.style.backgroundColor = "red";
            l2c3.style.backgroundColor = "red";
            } if (l3c1.classList[1] == ooooo && l3c2.classList[1] == ooooo && l3c3.classList[1] == ooooo) {
                l1c1.style.backgroundColor = "red";
                l1c2.style.backgroundColor = "red";
                l1c3.style.backgroundColor = "red";
                } else {
            removeBackgroundColor()
}});


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
