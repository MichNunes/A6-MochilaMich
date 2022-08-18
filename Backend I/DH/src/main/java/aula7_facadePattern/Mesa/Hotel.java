package aula7_facadePattern.Mesa;

import java.text.SimpleDateFormat;

public class Hotel {

    private SimpleDateFormat dataPartida = new SimpleDateFormat("yyyy-MM-dd");
    private SimpleDateFormat dataRetorno = new SimpleDateFormat("yyyy-MM-dd");
    private String cidade;

    public Hotel(SimpleDateFormat dataPartida, SimpleDateFormat dataRetorno, String cidade) {
        this.dataPartida = dataPartida;
        this.dataRetorno = dataRetorno;
        this.cidade = cidade;
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

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }
}
