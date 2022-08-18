package aula7_facadePattern.Model;

public class ApiProduto {

    public int desconto(Produto produto){
        if (produto.getTipo().compareTo("Lata")==0){
            return 10;
        } else {
            return 0;
        }
    };

}
