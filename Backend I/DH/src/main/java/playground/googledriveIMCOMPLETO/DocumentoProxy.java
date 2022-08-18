package playground.googledriveIMCOMPLETO;

import java.util.ArrayList;

public class DocumentoProxy implements IDocumento{

    private int id;
    private String url;
    private String conteudo;
    private ArrayList<Usuario> listaDeUsuarios;

    public DocumentoProxy(int id, String url, String conteudo, ArrayList<Usuario> listaDeUsuarios) {
        this.id = id;
        this.url = url;
        this.conteudo = conteudo;
        this.listaDeUsuarios = listaDeUsuarios;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getConteudo() {
        return conteudo;
    }

    public void setConteudo(String conteudo) {
        this.conteudo = conteudo;
    }

    public ArrayList<Usuario> getListaDeUsuarios() {
        return listaDeUsuarios;
    }

    public void setListaDeUsuarios(ArrayList<Usuario> listaDeUsuarios) {
        this.listaDeUsuarios = listaDeUsuarios;
    }

    public void adicionarNaLista(Usuario usuario){
        listaDeUsuarios.add(usuario);
    }

    @Override
    public void acessarDocumento(String url, Usuario usuario) {

    }
}
