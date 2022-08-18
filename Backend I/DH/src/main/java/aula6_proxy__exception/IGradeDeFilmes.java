package aula6_proxy__exception;

public interface IGradeDeFilmes {

    Filme getFilme(String nomeDoFilme) throws FilmeNaoHabilitadoException;
}
