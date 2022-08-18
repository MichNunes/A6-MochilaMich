package aula6_exSpotify_proxy;

public class ServicoDownload implements IServicoDownload{

    @Override
    public String servicoDonwload(String musica, Usuario usuario){

        if (musica == "Shawty") {
            return usuario.getNome() + " baixou a música Shawty!";
        }
        else if (musica == "Aff") {
            return usuario.getNome() + " baixou a música Aff!";
        }
        else if (musica == "Bala Azul"){
            return usuario.getNome() + " baixou a música Bala Azul!";
        }
        else {
            return "Música não encontrada";
        }
    }

    public ServicoDownload() {
    }
}
