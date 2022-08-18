package aula5_mesa_proxy__exception;

public interface ISerie {

    String getSerie(String nome) throws SerieNaoHabilitadaException;
}
