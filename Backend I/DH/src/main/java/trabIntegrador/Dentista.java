package trabIntegrador;

public class Dentista { //registrar e modificar

    private String nome;
    private String sobrenome;
    private String matricula;
    private String senha;

    public Dentista(String nome, String sobrenome, String matricula, String senha) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.matricula = matricula;
        this.senha = senha;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
