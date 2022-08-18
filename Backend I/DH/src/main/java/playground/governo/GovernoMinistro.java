package playground.governo;

public class GovernoMinistro extends GovernoFuncionario{
    @Override
    public void processarMensagem(String conteudo, int nivelSigilo){
        if (nivelSigilo <= 2){
            System.out.println("Ministro pode acessar conteudo: " + conteudo);
            this.seguinteFuncionario.processarMensagem(conteudo, nivelSigilo);
        } else if (this.seguinteFuncionario != null) {
            this.seguinteFuncionario.processarMensagem(conteudo, nivelSigilo);
        }
    }
}
