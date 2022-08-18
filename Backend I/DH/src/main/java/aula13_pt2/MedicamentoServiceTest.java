package aula13_pt2;

import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runners.MethodSorters;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class MedicamentoServiceTest {

    MedicamentoService medicamentoService;

    @BeforeEach
    void doBefore(){
        medicamentoService = new MedicamentoService(new MedicamentoDaoH2(new ConfiguracaoJDBC()));
    }

    @Test
    public void guardarMedicamento(){
        Medicamento medicamento = new Medicamento("Ibuprofeno", "Aché", 395, 20.5);
        medicamentoService.salvar(medicamento);
        Assert.assertTrue(medicamento.getId()!=null);
        Medicamento medicamento1 = new Medicamento("Dorflex", "Crepe", 500, 29.5);
        medicamentoService.salvar(medicamento1);
        Assert.assertTrue(medicamento1.getId()!=null);
    }

}
