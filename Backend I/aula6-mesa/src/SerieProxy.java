public class SerieProxy implements ISerie{

    private int qtdViews = 1;

    @Override
    public String getSerie(String nome) throws SerieNaoHabilitadaException {
        if (qtdViews <= 5) {
            Serie nomeSerie = new Serie();
            qtdViews++;
            return nomeSerie.getSerie(nome);
        }
        else {
            throw new SerieNaoHabilitadaException("Excede o número de reproduções permitidas");
        }
    }

    public SerieProxy() {
    }
}
