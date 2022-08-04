public class Serie implements ISerie{

    @Override
    public String getSerie(String nome){

        if (nome == "GOT") {
            return "www.got.com";
        }
        else if (nome == "Alice in Bordelands") {
            return "www.aliceinbordelands.com";
        }
        else if (nome == "TWD"){
            return "www.twd.com";
        }
        else {
            return "Série não encontrada";
        }
    }

    public Serie() {
    }
}
