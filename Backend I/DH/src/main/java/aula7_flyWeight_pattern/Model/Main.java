package aula7_flyWeight_pattern.Model;

public class Main {

    public static void main (String args[]){
        ComputerFactory computer = new ComputerFactory();

        Computer mac1 = computer.getComputer(16,500);
        Computer windows = computer.getComputer(2,256);
        Computer mac2 = computer.getComputer(16,500);

        System.out.println(mac1);
        System.out.println(windows);
        System.out.println(mac2);
    }
}
