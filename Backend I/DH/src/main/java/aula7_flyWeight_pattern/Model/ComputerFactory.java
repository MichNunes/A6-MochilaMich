package aula7_flyWeight_pattern.Model;

import java.util.HashMap;
import java.util.Map;

public class ComputerFactory {

    private static Map<String, Computer> macFlyweight = new HashMap<>();

    public Computer getComputer(int ram, int hd){
        String id = "\nPc = "+ram+" : "+hd;
        System.out.println(id);

        if(!macFlyweight.containsKey(id)){
            macFlyweight.put(id,new Computer(ram, hd));
            System.out.println("PC criado com sucesso.");
            return macFlyweight.get(id);
        }
        System.out.println("PC ja criado e armazenado.\n");
        return macFlyweight.get(id);
    }
}
