package aula5_proxy__test;

import java.util.Date;

public class SUSProxy implements Vacinar{

    @Override
    public void vacinarPessoa(String rg, Date dataVacina, String tipoVacina){
        if (dataVacina.before(new Date())) {
            SUS servicoVacinar = new SUS();
            servicoVacinar.vacinarPessoa(rg,dataVacina,tipoVacina);
            System.out.println("Cidadão(a) vacinado(a).");
        }
        else {
            System.out.println("A data de hoje é anterior a data marcada.");
        }
    }
}
