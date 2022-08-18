package playground.pizzaiolo;

public abstract class Pizzaiolo {

    public void fazerPizza(){
        prepararMassa();
        preCozinharMassa();
        prepararIngredientes();
        adicionarIngredientes();
        cozinhaPizza();
        embalarPizza();
    }

    protected abstract void prepararIngredientes();
    protected abstract void adicionarIngredientes();
    private void prepararMassa(){
        System.out.println("Preparando a massa.");
    }
    private void preCozinharMassa(){
        System.out.println("Pré-cozinhando a massa.");
    }
    private void cozinhaPizza(){
        System.out.println("Cozinhando a pizza.");
    }
    private void embalarPizza() {
        System.out.println("Embalando a pizza.");
    }
}
