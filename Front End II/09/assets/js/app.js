documento = document.body;
var menuButton = document.getElementById('l-sidebar__btn');
var lsidebar = document.getElementById('l-sidebar');
function closesidebar() { lsidebar.classList.add('l-sidebar--close') };

closesidebar();

function lsidebarOpenClose() {
    var aux = lsidebar.classList[1];
    if (aux == "l-sidebar--close") {
        lsidebar.classList.remove('l-sidebar--close');
        lsidebar.classList.add('l-sidebar--open');
    } else {
        lsidebar.classList.remove('l-sidebar--open');
        lsidebar.classList.add('l-sidebar--close');
}};

menuButton.addEventListener("click", lsidebarOpenClose);
lsidebar.addEventListener("click", lsidebarOpenClose)
document.addEventListener("dblclick", lsidebarOpenClose);
document.addEventListener("keydown", (key) => { 
    if (key.code == "Space") {
        lsidebarOpenClose()
    }
})

var box = document.getElementById('textBox');
const onMouseMove = (e) =>{
    box.style.left = e.pageX + 60 + 'px';
    box.style.top = e.pageY + -30 + 'px';
}
document.addEventListener('mousemove', onMouseMove);


documento.addEventListener('mousemove', textBox, false)

    function vh(px){
    px = parseFloat(px);
    var wh = window.innerHeight;
    return (px*100)/wh;}

    var caixa = document.getElementById('textBox')
    function bemvindo() { caixa.classList.add('contatos') };
    bemvindo();

    var texto = document.createElement('a');
    caixa.appendChild(texto);

function textBox(evento) {
    
    var auxtext = caixa.classList[0]
    var aux = vh(evento.pageY);
    var aux2 = document.createTextNode('Bem Vindo!');
    var aux3 = document.createTextNode('Sobre mim!');
    var aux4 = document.createTextNode('Contatos');
    if (aux < 100 && auxtext != 'bemvindo') {
        caixa.removeChild(texto)
        caixa.classList.remove('sobremim')
        caixa.classList.remove('contatos')
        caixa.classList.add('bemvindo')
        texto = aux2; 
        caixa.appendChild(texto)}
    else if (aux > 100 && aux < 200 && auxtext != 'sobremim') {
        caixa.removeChild(texto)
        caixa.classList.remove('bemvindo')
        caixa.classList.remove('contatos')
        caixa.classList.add('sobremim')
        texto = aux3 
        caixa.appendChild(texto)} 
    else if (aux > 200 && auxtext != 'contatos'){
        caixa.removeChild(texto)
        caixa.classList.remove('bemvindo')
        caixa.classList.remove('sobremim')
        caixa.classList.add('contatos')
        texto = aux4 
        caixa.appendChild(texto)}
}
