package playground.governo;

public class GovernoDeputado extends GovernoFuncionario{

    @Override
    public void processarMensagem(String conteudo, int nivelSigilo){
        if (nivelSigilo == 1){
            System.out.println("Deputado pode acessar conteudo: " + conteudo);
            this.seguinteFuncionario.processarMensagem(conteudo, nivelSigilo);
        } else if (this.seguinteFuncionario != null) {
            this.seguinteFuncionario.processarMensagem(conteudo, nivelSigilo);
        }
    }
}
