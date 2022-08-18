package playground.pessoa;

import java.time.LocalDateTime;

public class Pessoa {

    private String nome;
    private String sobrenome;
    private String email;
    private LocalDateTime dataNascimento;

    public Pessoa(String nome, String sobrenome, String email, LocalDateTime dataNascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.dataNascimento = dataNascimento;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDateTime getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDateTime dataNascimento) {
        this.dataNascimento = dataNascimento;
    }



    public String nomeFormatado() {
        return (this.sobrenome + ", " + this.nome + ".");
    }

    LocalDateTime agora = LocalDateTime.now();
    public Boolean maiorDeIdade() {
        if (agora.getYear() -       this.getDataNascimento().getYear()       == 18 &&
            agora.getMonthValue() - this.getDataNascimento().getMonthValue() >= 0  &&
            agora.getDayOfMonth() - this.getDataNascimento().getDayOfMonth() >= 0){
            return true;
        } else if (agora.getYear() - this.getDataNascimento().getYear() > 18) {
            return true;
        } else {
            return false;
        }
    }
}
