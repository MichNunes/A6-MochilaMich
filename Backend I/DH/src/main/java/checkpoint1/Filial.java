package checkpoint1;

public class Filial {

    private Integer id;
    private String nome;
    private String rua;
    private int numero;
    private String cidade;
    private String estado;
    private Boolean e5Estrelas;

    public Filial(String nome, String rua, int numero, String cidade, String estado, Boolean e5Estrelas) {
        this.nome = nome;
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.e5Estrelas = e5Estrelas;
    }

    public Integer getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Boolean getE5Estrelas() {
        return e5Estrelas;
    }

    public void setE5Estrelas(Boolean e5Estrelas) {
        this.e5Estrelas = e5Estrelas;
    }

    @Override
    public String toString() {
        return "Filial{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", rua='" + rua + '\'' +
                ", numero=" + numero +
                ", cidade='" + cidade + '\'' +
                ", estado='" + estado + '\'' +
                ", e5Estrelas=" + e5Estrelas +
                '}';
    }
}
