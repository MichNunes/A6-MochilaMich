package aula5_proxy__test;

import org.testng.annotations.Test;

import java.util.Date;

public class PessoaTeste {

    Date data = new Date();

    @Test
    public void vacinar1(){
        Pessoa p1 = new Pessoa("Juca", "Silva", "6710823", data, "Pfizer");
        Vacinar vacinar = new SUSProxy();

        vacinar.vacinarPessoa(p1.getRg(),p1.getDataVacina(), p1.getNomeVacina());
        System.out.println(p1.toString());
    }
}
