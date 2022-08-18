package playground.pizzaiolo;

public class PizzaioloVeg extends Pizzaiolo{

    private String nome;

    public PizzaioloVeg(String nome) {
        this.nome = nome;
    }

    @Override
    protected void prepararIngredientes(){
        System.out.println("Preparando ingredientes veganos.");
    }

    @Override
    protected void adicionarIngredientes() {
        System.out.println("Adicionando ingredientes veganos.");
    }
}
