package aula7_flyWeight_pattern.Model;

public class Computer {

    private int ram;
    private int hd;

    private static int contador = 0;

    public Computer (int ram, int hd){
        super();
        this.ram = ram;
        this.hd = hd;
        contador++;
        System.out.println("Contador: " + contador);
    }

    public int getRam() {
        return ram;
    }

    public void setRam(int ram) {
        this.ram = ram;
    }

    public int getHd() {
        return hd;
    }

    public void setHd(int hd) {
        this.hd = hd;
    }

    @Override
    public String toString() {
        return "Computer{" +
                "ram=" + ram +
                ", hd=" + hd +
                '}';
    }
}
