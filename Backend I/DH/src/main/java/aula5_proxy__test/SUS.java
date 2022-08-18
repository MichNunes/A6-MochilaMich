package aula5_proxy__test;

import java.util.Date;

public class SUS implements Vacinar{

    @Override
    public void vacinarPessoa(String rg, Date dataVacina, String tipoVacina){
        System.out.println("Usuário(a) portador do RG: " + rg + ", vacinado(a) em " + dataVacina + " com a vacina " + tipoVacina + ".");
    }
}
