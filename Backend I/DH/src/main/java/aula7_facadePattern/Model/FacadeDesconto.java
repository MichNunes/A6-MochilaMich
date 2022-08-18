package aula7_facadePattern.Model;

public class FacadeDesconto implements IFacadeDesconto{

    private ApiCartao apiCartao;
    private ApiProduto apiProduto;
    private ApiQuantidade apiQuantidade;

    public FacadeDesconto() {
        apiCartao = new ApiCartao();
        apiProduto = new ApiProduto();
        apiQuantidade = new ApiQuantidade();
    }

    @Override
    public int desconto(Cartao cartao, Produto produto, int quantidade){
        int desconto;
        desconto = apiQuantidade.desconto(quantidade) + apiProduto.desconto(produto) + apiCartao.desconto(cartao);
        return desconto;
    }
}
