package aula3_chainOfResponsability;

public class Main {
    public static void main(String[] args) {

        CheckMail processo = new CheckMail();

        processo.verificar(new Mail("email@email.com", "tecnica@digitalhouse.com", "Reclamação"));
        processo.verificar(new Mail("email@email.com", "sds@digialhouse.com", "Gerência"));
        processo.verificar(new Mail("email@email.com", "aff@digialhouse.com", "Técnico"));
        processo.verificar(new Mail("email@email.com", "pampam@digialhouse.com", "Comercial"));
    }
}