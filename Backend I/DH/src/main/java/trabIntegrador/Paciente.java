package trabIntegrador;

import java.util.Date;

public class Paciente { //registrar, modificar e excluir

    private String nome;
    private String sobrenome;
    private String endereco;
    private String rg;
    private String senha;
    private Date dataDaAlta; //não está no construtor

    public Paciente(String nome, String sobrenome, String endereco, String rg, String senha) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.endereco = endereco;
        this.rg = rg;
        this.senha= senha;
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

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public Date getDataDaAlta() {
        return dataDaAlta;
    }

    public void setDataDaAlta(Date dataDaAlta) {
        this.dataDaAlta = dataDaAlta;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
