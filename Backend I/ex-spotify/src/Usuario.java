public class Usuario {

    private String nome;
    private String plano;
    private int id;

    public Usuario(String nome, String plano, int id) {
        this.nome = nome;
        this.plano = plano;
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getPlano() {
        return plano;
    }

    public void setPlano(String plano) {
        this.plano = plano;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
