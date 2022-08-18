package aula13_pt2;

public interface IDao <T>{

    public T salvar(T t);
    public T buscar(Integer id);
}
