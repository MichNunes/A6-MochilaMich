package playground.pessoa;

import org.junit.jupiter.api.Test;
import java.time.LocalDateTime;
import java.util.ArrayList;

public class PessoaTest {

    @Test
    void regular_test() {
        Pessoa p1 = new Pessoa("Michel", "Nunes", "michnunes@gmail.com", LocalDateTime.of(2001, 10, 15, 2, 5, 0));
        Pessoa p2 = new Pessoa("Carlos", "Nunes", "michnunes@gmail.com", LocalDateTime.of(2005, 10, 15, 2, 5, 0));
        Pessoa p3 = new Pessoa("Junior", "Nunes", "michnunes@gmail.com", LocalDateTime.of(2001, 10, 15, 2, 5, 0));

        ArrayList<Pessoa> listaDePessoas = new ArrayList<>();
            listaDePessoas.add(p1);
            listaDePessoas.add(p2);
            listaDePessoas.add(p3);

        ArrayList<Pessoa> listaDePessoasNome5LetrasMaiorDeIdade = new ArrayList<>();

            listaDePessoas.forEach((user) -> {
            if (user.getNome().length() >= 5 && user.maiorDeIdade()){
                listaDePessoasNome5LetrasMaiorDeIdade.add(user);
            }
        });

        System.out.println("Lista de usuários");
        listaDePessoasNome5LetrasMaiorDeIdade.forEach((user) -> System.out.println(user.getNome()));
        System.out.println("------------------");
    }
}
