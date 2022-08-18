package Testes;

import org.junit.jupiter.api.*;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

public class Testando {

    @BeforeAll
    static void initAll(){
    }

    @BeforeEach
    void init () {
    }

    @Test
    void regular_testing_method(){
        assertEquals(2,2);
        assertEquals(2,2,"Agora, a mensagem opcional da asserção é o último parametro.");
        int idade = 2;
        assertTrue(idade == 2, "Os números são iguais?");

        //assertNotEquals
        //assertFalse
        //assertNull
        //assertNotNull
        //assertNotSame(originalObject, otherObject);
    }

    @Test
    void teste_data() throws ParseException {

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-yyyy");
        String saida = "10-08-2022";
        String retorno = "12-08-2022";
        String hoje = simpleDateFormat.format(new Date());

        Date dateSaida = simpleDateFormat.parse(saida);
        Date dateRetorno = simpleDateFormat.parse(retorno);
        Date dateHoje = simpleDateFormat.parse(hoje);

        System.out.println(saida);
        System.out.println(dateSaida);
        System.out.println(retorno);
        System.out.println(dateRetorno);
        System.out.println(hoje);
        System.out.println(dateHoje);

        if(dateSaida.before(dateRetorno)){
            System.out.println("retorno após a saida");
        }


    }

    @Test
    @Disabled //teste não sera executado
    void skippedTest() {
        // não executado
    }

    @AfterEach
    void tearDown(){
    }

    @AfterAll
    static void tearDownAll() {
    }

    //@Rule public ExceptedException thrown = ExceptedException.none();

    @RunWith(Parameterized.class)
    public class MultiplicarTeste{
        @Parameterized.Parameters
        public static Iterable data(){
            return Arrays.asList(new Object[][]{
                {4,2,2},{6,3,2},{5,5,1},{10,5,2}
            });
        }
    }
}
