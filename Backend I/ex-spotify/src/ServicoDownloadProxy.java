public class ServicoDownloadProxy implements IServicoDownload{

    @Override
    public String servicoDonwload(String musica, Usuario usuario){

        if (usuario.getPlano() == "Premium") {
            ServicoDownload nomeMusica = new ServicoDownload();
            return nomeMusica.servicoDonwload(musica, usuario);
        }
        else {
            return usuario.getNome() + ", atualize seu plano para o Premium para baixar músicas.";
        }
    }

    public ServicoDownloadProxy() {
    }
}
