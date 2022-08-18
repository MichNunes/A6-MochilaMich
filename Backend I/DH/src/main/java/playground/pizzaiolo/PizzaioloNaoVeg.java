package playground.pizzaiolo;

public class PizzaioloNaoVeg extends Pizzaiolo{

    private String nome;

    public PizzaioloNaoVeg(String nome) {
        this.nome = nome;
    }

    @Override
    protected void prepararIngredientes(){
        System.out.println("Preparando ingredientes não veganos.");
    }

    @Override
    protected void adicionarIngredientes() {
        System.out.println("Adicionando ingredientes não veganos.");
    }
}
