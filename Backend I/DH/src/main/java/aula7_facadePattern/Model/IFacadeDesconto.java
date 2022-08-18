package aula7_facadePattern.Model;

public interface IFacadeDesconto {

    public int desconto(Cartao cartao, Produto produto, int quantidade);
}
