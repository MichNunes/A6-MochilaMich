public class Main {

    public static void main(String[] args) {

        ISerie buscaSerie = new SerieProxy();

        try{
            System.out.println(buscaSerie.getSerie("att"));
            System.out.println(buscaSerie.getSerie("Alice in Bordelands"));
            System.out.println(buscaSerie.getSerie("GOT"));
            System.out.println(buscaSerie.getSerie("TWD"));
            System.out.println(buscaSerie.getSerie("GOT"));
            System.out.println(buscaSerie.getSerie("GOT"));
            System.out.println(buscaSerie.getSerie("GOT"));
            System.out.println(buscaSerie.getSerie("GOT"));
        } catch (SerieNaoHabilitadaException e){
            e.printStackTrace();
        }


    }
}