package playground.governo;

import org.junit.jupiter.api.Test;

public class GovernoTest {

    @Test
    void normal_test() {
        GovernoFuncionario inicio = new GovernoDeputado()
            .setSeguinteFuncionario(new GovernoMinistro()
            .setSeguinteFuncionario(new GovernoPresidente()));

        inicio.processarMensagem("Reservado",1);
        System.out.println("-----------------------");
        inicio.processarMensagem("Secreto",2);
        System.out.println("-----------------------");
        inicio.processarMensagem("Muito Secreto",3);
    }
}
