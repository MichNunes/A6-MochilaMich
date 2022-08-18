package checkpoint1;

public class FilialService {

    private IDao1<Filial> filialIDao1;

    public FilialService(IDao1<Filial> filialIDao1){
        this.filialIDao1 = filialIDao1;
    }

    public Filial salvar(Filial filial){
        return filialIDao1.salvar(filial);
    }
}
