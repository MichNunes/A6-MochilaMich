package aula6_proxy__exception;

public class GradeDeFilmes implements IGradeDeFilmes{

    @Override
    public Filme getFilme(String nomeDoFilme){
        Filme f = null;

        switch (nomeDoFilme)
        {
            case "The White Tiger":
                f = new Filme("The White Tiger", "ARG", "www.thewhitetiger.com");
                break;

            case "His Houser":
                f = new Filme("His Houser", "BRA", "www.hishouser.com");
                break;

            case "Over The Moon":
                f = new Filme("Over The Moon", "COL", "www.overthemoon.com");
                break;

            case "Superbad":
                f = new Filme("Superbad", "ARG", "www.superbad.com");
                break;

            case "The Babysitter":
                f = new Filme("The Babysitter", "BRA", "www.thebabysitter.com");
                break;
        }
        return f;
    }
}
