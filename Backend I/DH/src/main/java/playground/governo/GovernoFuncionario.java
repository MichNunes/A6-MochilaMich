package playground.governo;

public abstract class GovernoFuncionario {

    protected GovernoFuncionario seguinteFuncionario;

    public abstract void processarMensagem(String conteudo, int nivelSigilo);

    public GovernoFuncionario setSeguinteFuncionario(GovernoFuncionario next) {
        this.seguinteFuncionario = next;
        return this;
    }
}
