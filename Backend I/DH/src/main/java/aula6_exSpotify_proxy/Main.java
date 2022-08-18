package aula6_exSpotify_proxy;

public class Main {
    public static void main(String[] args) {

        Usuario u1 = new Usuario("Carlos", "Premium", 1);
        Usuario u2 = new Usuario("Michel", "Free", 2);

        IServicoDownload download = new ServicoDownloadProxy();

        System.out.println(download.servicoDonwload("Aff", u1));
        System.out.println(download.servicoDonwload("Aff", u2));

        System.out.println(download.servicoDonwload("Shawty", u1));
        System.out.println(download.servicoDonwload("Shawty", u2));

        System.out.println(download.servicoDonwload("Bala Azul", u1));
        System.out.println(download.servicoDonwload("Bala Azul", u2));

        System.out.println(download.servicoDonwload("aff", u1));
        System.out.println(download.servicoDonwload("aff", u2));
    }
}