package aula7_facadePattern.Model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.Assert.assertEquals;

public class FacedeDescontoTest {

    private FacadeDesconto facadeDesconto = new FacadeDesconto();
    private Cartao cartao;
    private Produto produto;

    @BeforeEach
    void fazeAntes(){
        cartao = new Cartao("1111222233334444", "Star Bank");
        produto = new Produto("Requeijão", "Lata");
    }

    @Test
    void validarDescontoBanco(){
        produto.setTipo("enlatado");

        int desconto = facadeDesconto.desconto(cartao,produto,1);
        assertEquals(20, desconto);
    }

    @Test
    void validarDescontoProduto(){
        cartao.setBanco("Bank Star");

        int desconto = facadeDesconto.desconto(cartao,produto,1);
        assertEquals(10, desconto);
    }

    @Test
    void validarDescontoQuantidade(){
        produto.setTipo("enlatado");
        cartao.setBanco("Bank Star");

        int desconto = facadeDesconto.desconto(cartao,produto,12);
        assertEquals(15, desconto);
    }

    @Test
    void validarDescontoTotal(){
        int desconto = facadeDesconto.desconto(cartao,produto,12);
        assertEquals(45,desconto);
    }
}
