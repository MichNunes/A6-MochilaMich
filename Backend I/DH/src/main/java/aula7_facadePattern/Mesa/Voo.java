package aula7_facadePattern.Mesa;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;

public class Voo {

    private SimpleDateFormat dataPartida;
    private SimpleDateFormat dataRetorno;
    private String origem;
    private String destino;

    public Voo(SimpleDateFormat dataPartida, SimpleDateFormat dataRetorno, String origem, String destino) {
        this.dataPartida = dataPartida;
        this.dataRetorno = dataRetorno;
        this.origem = origem;
        this.destino = destino;
    }

    public SimpleDateFormat getDataPartida() {
        return dataPartida;
    }

    public void setDataPartida(SimpleDateFormat dataPartida) {
        this.dataPartida = dataPartida;
    }

    public SimpleDateFormat getDataRetorno() {
        return dataRetorno;
    }

    public void setDataRetorno(SimpleDateFormat dataRetorno) {
        this.dataRetorno = dataRetorno;
    }

    public String getOrigem() {
        return origem;
    }

    public void setOrigem(String origem) {
        this.origem = origem;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }
}

