package checkpoint1;

import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runners.MethodSorters;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class FilialServiceTest {

    FilialService filialService;

    @BeforeEach
    void doBefore(){
        filialService = new FilialService(new FilialDaoH2(new ConfigJDBC()));
    }

    @Test
    public void salvarFilial(){
        Filial filial1 = new Filial("Nubank", "São José", 300, "Joinville", "SC", false);
        filialService.salvar(filial1);
        Assert.assertTrue(filial1.getId()!=null);

        Filial filial2 = new Filial("Ventisol", "São Bento", 350, "Pouso Alegre", "MG", true);
        filialService.salvar(filial2);
        Assert.assertTrue(filial2.getId()!=null);

        Filial filial3 = new Filial("La Roche-Posay", "São Carlos", 400, "Bombinhas", "SC", true);
        filialService.salvar(filial3);
        Assert.assertTrue(filial3.getId()!=null);

        Filial filial4 = new Filial("JBL", "São Roque", 450, "Varginha", "MG", false);
        filialService.salvar(filial4);
        Assert.assertTrue(filial4.getId()!=null);

        Filial filial5 = new Filial("Post-It", "São Pedro", 500, "São Paulo", "SP", true);
        filialService.salvar(filial5);
        Assert.assertTrue(filial5.getId()!=null);
    }
}
