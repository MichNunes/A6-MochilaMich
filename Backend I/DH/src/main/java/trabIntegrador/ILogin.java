package trabIntegrador;

public interface ILogin {

    User makeLogin(String nome, String senha); //throws LoginNaoAutorizadoException;
}
