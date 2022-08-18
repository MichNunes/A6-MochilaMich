package aula5_mesa_proxy__exception;

public class SerieNaoHabilitadaException extends Exception{

    @Override
    public String toString(){
        return "Erro: " + this.getMessage();
    }

    public SerieNaoHabilitadaException(String message) {
        super(message);
    }
}
