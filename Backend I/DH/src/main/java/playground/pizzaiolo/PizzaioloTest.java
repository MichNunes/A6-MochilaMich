package playground.pizzaiolo;

import org.junit.jupiter.api.Test;

public class PizzaioloTest {

    @Test
    void normal_test(){

        PizzaioloVeg pizzaioloVeg = new PizzaioloVeg("Michel");
        PizzaioloNaoVeg pizzaioloNaoVeg = new PizzaioloNaoVeg("Carlos");

        System.out.println("--------------");
        pizzaioloVeg.fazerPizza();
        System.out.println("--------------");
        pizzaioloNaoVeg.fazerPizza();

    }
}
