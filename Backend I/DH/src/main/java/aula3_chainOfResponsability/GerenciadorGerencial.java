package aula3_chainOfResponsability;

public class GerenciadorGerencial extends Gerenciador{

    @Override
    public void verificar(Mail email){ //vou fazer a verificação do destino e do assunto a partir do verificador
        if((email.getDestino().equalsIgnoreCase("gerencia@colmeia.com")) ||
                (email.getAssunto().equalsIgnoreCase("Gerência")))
        {
            System.out.println("Enviando ao departamento Gerencial");
        }
        else { //verifico a proxima entrada e executo novamente o meu metodo Verificar
            if(this.getSeguinte() != null)
            {
                this.getSeguinte().verificar(email);
            }
        }
    }
}
