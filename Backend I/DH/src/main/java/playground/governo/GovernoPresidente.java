package playground.governo;

public class GovernoPresidente extends GovernoFuncionario{
    @Override
    public void processarMensagem(String conteudo, int nivelSigilo){
        if (nivelSigilo <= 3){
            System.out.println("Presidente pode acessar conteudo: " + conteudo);
        }
    }
}
